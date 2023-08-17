// Import modules
import {
	usePosts,
	fetchHookData,
	useAppSettings,
	addHookData,
	handleError,
	useTerms,
} from '@headstartwp/next';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Import params
import { singleParams } from '@/params';

// Import utils
import { resolveBatch } from '@/utils/promises';

// Import components
import Hero from '@/components/Hero';
import LatestArticleSection from '@/components/LatestArticleSection';
import Seperator from '@/components/Seperator';

/**
 * Homepage component that displays code snippets and articles.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.terms - List of category terms.
 * @param {Array} props.posts - List of latest posts.
 * @param {boolean} props.loading - Loading state.
 * @returns {JSX.Element} - Homepage JSX element.
 */
const Homepage = ({ terms, posts, loading }) => {
	return (
		<div style={{ display: 'grid'}}>
			<Head>
				<title>Code with Nas - Homepage</title>
			</Head>

			{/* Hero section */}
			<Hero terms={terms}/>

			<Seperator size={2}/>
			
			{/* Latest Articles section */}
			<LatestArticleSection posts={posts} loading={loading} />
		</div>
	);
}

Homepage.propTypes = {
	terms: PropTypes.array.isRequired,
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

/**
 * Fetches data and returns props for the Homepage component.
 *
 * @param {Object} context - Context object for getStaticProps.
 * @returns {Object} - Props for the Homepage component.
 */
export async function getStaticProps(context) {
	let appSettings;
	let slug;
	try {
		// Fetch app settings
		appSettings = await fetchHookData(useAppSettings.fetcher(), context);
		// Determine the slug for the homepage based on app settings
		slug = appSettings.data.result?.home?.slug ?? 'front-page';
	} catch (e) {
		if (e.name === 'EndpointError') {
			// Use a default slug if an error occurs
			slug = 'front-page';
		}
	}

	try {
		// Fetch data for the Homepage component using batched requests
		const hookData = await resolveBatch([
			{
				// Fetch posts using usePosts hook
				func: fetchHookData(usePosts.fetcher(), context, {
					params: {
						per_page: 5,
					},
				}),
			},
			{
				// Fetch category terms
				func: fetchHookData(useTerms.fetcher(), context, {
					params: { taxonomy: 'category' },
				}),
			},
			{
				// Fetch tag terms with specific fields
				func: fetchHookData(useTerms.fetcher(), context, {
					params: { taxonomy: 'tag', _fields: ['id', 'name', 'link'] },
				}),
			},
		]);

		// Extract data from hook results
		const postsData = hookData[0]; // Use index 0 to access posts data
		const categoryData = hookData[1]; // Use index 1 to access category data
		const tagData = hookData[2]; // Use index 2 to access tag data

		// Construct terms array with category data
		const terms = categoryData.data.result || []; // Ensure terms array is defined

		// Construct posts array with posts data
		const posts = postsData.data.result || []; // Ensure posts array is defined

		// Determine loading state
		const loading =
			postsData.loading || categoryData.loading || tagData.loading || false;

		// Return props with fetched data and revalidation interval
		return addHookData([...hookData, appSettings], {
			props: { homePageSlug: slug, terms, posts, loading },
			revalidate: 5 * 60, // Revalidate every 5 minutes
		});
	} catch (e) {
		// Handle errors and return appropriate error response
		return handleError(e, context);
	}
}

export default Homepage;
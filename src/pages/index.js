// Import modules
import {
	usePost,
	fetchHookData,
	useAppSettings,
	addHookData,
	handleError,
	useTerms,
} from '@headstartwp/next';
import PropTypes from 'prop-types';

// Import params
import { singleParams } from '@/params';

// Import utils
import { resolveBatch } from '@/utils/promises';

// Import components
import Hero from '@/components/Hero';
import HeroCategoriesSection from '@/components/HeroCategoriesSection';
import LatestArticleSection from '@/components/LatestArticleSection';

/**
 * Homepage component that displays code snippets and articles.
 *
 * @param {Object} props - Component props.
 * @param {string} props.homePageSlug - Slug for the homepage.
 * @param {Array} props.terms - List of category terms.
 * @param {Array} props.posts - List of latest posts.
 * @param {boolean} props.loading - Loading state.
 * @returns {JSX.Element} - Homepage JSX element.
 */
const Homepage = ({ terms, posts, loading }) => (
	<div style={{ display: 'grid', gap: '5em' }}>
		{/* Hero section */}
		<Hero />
		{/* Categories section */}
		<HeroCategoriesSection terms={terms} />
		{/* Latest Articles section */}
		<LatestArticleSection posts={posts} loading={loading} />
	</div>
);

Homepage.propTypes = {
	terms: PropTypes.array.isRequired,
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Homepage;

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
				// Fetch a single post based on the determined slug
				func: fetchHookData(usePost.fetcher(), context, {
					params: {
						...singleParams,
						slug,
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
		const { data: postData } = hookData[0];
		const { data: categoryData } = hookData[1];
		const { data: tagData } = hookData[2];

		// Construct terms array with category data
		const terms = categoryData.terms || []; // Ensure terms array is defined

		// Construct posts array with post data
		const posts = postData.post ? [postData.post] : [];

		// Determine loading state
		const loading =
			postData.loading || categoryData.loading || tagData.loading || false;

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

// Import modules
import {
	usePosts,
	fetchHookData,
	addHookData,
	handleError,
	useAppSettings,
	useTerms,
} from '@headstartwp/next';
import { resolveBatch } from '@/utils/promises';
import Link from 'next/link';
import Head from 'next/head';

// Import components
import PostList from '@/components/PostList';

// Import styles
import { headingStyles, backButtonStyles } from '@/styles/components';

/**
 * Renders a page displaying posts in all category.
 *
 * @returns {JSX.Element} - The JSX element representing the category page.
 */
const CategoryPage = () => {
	const {
		data,
		loading,
	} = usePosts({ taxonomy: 'category' });

	const {
		data: { terms },
		error: termsError,
		loading: termsLoading,
	} = useTerms({ taxonomy: 'post_tag', _fields: ['name', 'id', 'link', 'description'] });

	if (termsLoading) {
		return <p>Loading...</p>;
	}

	if (termsError) {
		return <p>Error loading tags: {termsError.message}</p>;
	}

	return (
		<section style={{
			display: 'grid',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			gap: '2em',
		}}>
			<Head>
				<title>{ 'Code with Nas - Categories' }</title>
			</Head>
			<Link className={backButtonStyles} href="/">Home</Link>
			<h1 style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '10px',
				borderBottom: '2px solid',
				paddingBottom: '20px',
			}}
				className={headingStyles}
			>
				Category: <span className="term-title">Latest</span>
			</h1>
			<PostList posts={data.posts} loading={loading} showCategory={false} showTag={true} />
		</section>
	);
};

/**
 * Fetches data for the category page.
 *
 * @param {object} context - The context object containing request parameters.
 * @returns {object} - An object containing fetched data for the category page.
 */
export async function getServerSideProps(context) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePosts.fetcher(), context, {
					params: {
						taxonomy: 'category',
					},
				}),
			},
			{
				func: fetchHookData(useTerms.fetcher(), context, {
					params: {
						taxonomy: 'post_tag',
					},
				}),
			},
			{ func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
		]);

		/**
		 * It is also possible to get the queried object on the server, this is useful if you need to conditionally fetch data
		 * server side based on queriedObject
		 *
		 * const [posts] = settledPromises;
		 * console.log(posts.data.queriedObject.term.slug);
		 */
		const [posts] = settledPromises;
		return addHookData([posts], {});
	} catch (e) {
		return handleError(e, context);
	}
}

export default CategoryPage;

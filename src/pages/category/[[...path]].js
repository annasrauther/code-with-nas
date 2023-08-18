// Import dependencies
import {
	usePosts,
	fetchHookData,
	addHookData,
	handleError,
	useAppSettings,
	useTerms,
} from '@headstartwp/next';
import resolveBatch from '@/utils/promises';
import Link from 'next/link';
import Head from 'next/head';
import { cx } from '@linaria/core';

// Import components
import PostList from '@/components/PostList';
import { Pagination } from '@/components/Pagination';
import Loader from '@/components/Loader';
import ErrorComponent from '@/components/ErrorComponent';

// Import styles
import {
	headingStyles,
	backButtonStyles,
	pageTitleStyles,
	pageSectionStyles,
} from '@/styles/components';

/**
 * Renders a page displaying posts in a specific category.
 *
 * @returns {JSX.Element} The JSX element representing the category page.
 */
const CategoryPage = () => {
	const {
		data,
		loading,
		error,
	} = usePosts({ taxonomy: 'category', per_page: 12 });

	// Display loading state while fetching data
	if (loading) {
		return <Loader />;
	}

	// Display error message if data fetching fails
	if (error) {
		return <ErrorComponent message={error.message} />;
	}

	const pageTitle = data.queriedObject?.term?.name;

	return (
		<section className={pageSectionStyles}>
			<Head>
				<title>
					{pageTitle
						? `${pageTitle} - Code with Nas`
						: 'Categories - Code with Nas'}
				</title>
			</Head>
			{pageTitle ? (
				<Link className={backButtonStyles} href="/category">
					Go to Latest Posts
				</Link>
			) : (
				<Link className={backButtonStyles} href="/">
					Home
				</Link>
			)}
			<h1 className={cx(pageTitleStyles, headingStyles)}>
				Category: <span className="term-title">{pageTitle || 'Latest'}</span>
			</h1>
			<PostList
				posts={data.posts}
				loading={loading}
				showCategory={!pageTitle}
				showTag={true}
			/>
			{pageTitle && <Pagination pageInfo={data.pageInfo} />}
		</section>
	);
};

/**
 * Fetches data for the category page.
 *
 * @param {object} context - The context object containing request parameters.
 * @returns {object} An object containing fetched data for the category page.
 */
export async function getServerSideProps(context) {
	try {
		// Fetch data in parallel using resolveBatch
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

		const [posts] = settledPromises;
		// Add fetched data to the hook data
		return addHookData([posts], {});
	} catch (e) {
		// Handle errors gracefully
		return handleError(e, context);
	}
}

export default CategoryPage;

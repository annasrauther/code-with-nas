// Import modules
import {
	usePosts,
	fetchHookData,
	addHookData,
	handleError,
	useAppSettings,
} from '@headstartwp/next';
import { resolveBatch } from '@/utils/promises';
import Link from 'next/link';
import Head from 'next/head';

// Import components
import PostList from '@/components/PostList';

// Import styles
import { headingStyles, backButtonStyles } from '@/styles/components';

/**
 * Renders a page displaying posts with all tag.
 *
 * @returns {JSX.Element} - The JSX element representing the tag page.
 */
const TagPage = () => {
	const { data, loading } = usePosts({ taxonomy: 'post_tag' });

    if (loading) {
        return <div>Loading...</div>;
    }

	return (
		<section style={{
			display: 'grid',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			gap: '2em',
		}}>
			<Head>
                <title>{ 'Code with Nas - Tags' }</title>
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
				Tags: <span className="term-title">Latest</span>
			</h1>
            <PostList posts={data.posts} loading={loading} showCategory={true} showTag={true} />
		</section>
	);
};

/**
 * Fetches data for the tag page.
 *
 * @param {object} context - The context object containing request parameters.
 * @returns {object} - An object containing fetched data for the tag page.
 */
export async function getServerSideProps(context) {
	try {
		const settledPromises = await resolveBatch([
			{
				func: fetchHookData(usePosts.fetcher(), context, {
					params: { taxonomy: 'post_tag', per_page: 20 },
				}),
			},
			{ func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
		]);

		return addHookData(settledPromises, {});
	} catch (e) {
		return handleError(e, context);
	}
}

export default TagPage;

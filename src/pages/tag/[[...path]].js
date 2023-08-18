// Import necessary modules
import React from 'react';
import {
    usePosts,
    fetchHookData,
    addHookData,
    handleError,
    useAppSettings,
} from '@headstartwp/next';
import resolveBatch from '@/utils/promises';
import Link from 'next/link';
import Head from 'next/head';
import { cx } from '@linaria/core';

// Import components
import PostList from '@/components/PostList';
import Loader from '@/components/Loader';
import ErrorComponent from '@/components/ErrorComponent';
import { Pagination } from '@/components/Pagination';

// Import styles
import {
    headingStyles,
    backButtonStyles,
    pageTitleStyles,
    pageSectionStyles,
} from '@/styles/components';

/**
 * Renders a page displaying posts with all tags.
 *
 * @returns {JSX.Element} The JSX element representing the tag page.
 */
const TagPage = () => {
    // Fetch posts with the 'post_tag' taxonomy
    const { data, loading, error } = usePosts({ taxonomy: 'post_tag' });

    // Display a loader while fetching data
    if (loading) {
        return <Loader />;
    }

    // Display an error component if an error occurred during fetching
    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    const pageTitle = data.queriedObject?.term?.name;

    return (
        <section className={pageSectionStyles}>
            <Head>
                <title>{pageTitle ? `${pageTitle} - Code with Nas` : 'Tags - Code with Nas'}</title>
            </Head>
            {/* Display a link to go back to the tag or home page */}
            {pageTitle ? (
                <Link className={backButtonStyles} href="/tag">
                    Go to Latest Posts
                </Link>
            ) : (
                <Link className={backButtonStyles} href="/">
                    Home
                </Link>
            )}
            <h1 className={cx(pageTitleStyles, headingStyles)}>
                Tags: <span className="term-title">{pageTitle || 'Latest'}</span>
            </h1>
            
            {/* Display the list of posts */}
            <PostList
                posts={data.posts}
                loading={loading}
                showCategory={true}
                showTag={true}
            />
            
            {/* Display pagination if a specific tag is selected */}
            {pageTitle && <Pagination pageInfo={data.pageInfo} />}
        </section>
    );
};

/**
 * Fetches data for the tag page.
 *
 * @param {Object} context - The context object containing request parameters.
 * @returns {Object} An object containing fetched data for the tag page.
 */
export async function getServerSideProps(context) {
    try {
        // Fetch data for posts and app settings in parallel
        const settledPromises = await resolveBatch([
            {
                func: fetchHookData(usePosts.fetcher(), context, {
                    params: { taxonomy: 'post_tag', per_page: 12 },
                }),
            },
            { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
        ]);

        return addHookData(settledPromises, {});
    } catch (e) {
        // Handle errors gracefully
        return handleError(e, context);
    }
}

export default TagPage;

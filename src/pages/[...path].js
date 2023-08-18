// Import necessary modules
import { usePost, usePosts, fetchHookData, addHookData, handleError } from '@headstartwp/next';
import { BlocksRenderer } from '@headstartwp/core/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import formatDate from '@/utils/formatDate';

// Import components
import Badge from '@/components/Badge';
import Loader from '@/components/Loader';
import ErrorComponent from '@/components/ErrorComponent';
import RelatedPosts from '@/components/RelatedPosts';

// Import styles
import { singlePostStyles } from '@/styles/components';
import { headingStyles } from '@/styles/components';

/**
 * Renders a single post page.
 * @component
 * @returns {JSX.Element} Rendered single post page.
 */
const SinglePostsPage = () => {
    const router = useRouter();
    const params = { postType: ['post'] };
    
    // Fetch main post data using usePost hook
    const { loading, error, data } = usePost(params);
    
    // Extract category information from the post data
    const category = data.post._embedded['wp:term'][0][0];

    // Fetch related posts based on the category
    const {
        data: relatedPosts,
        loading: relatedPostsLoading,
        error: relatedPostsError,
    } = usePosts({ taxonomy: category.id, per_page: 3 });

    // Display loaders if data is still loading
    if (loading || relatedPostsLoading) {
        return <Loader />;
    }

    // Display an error component if any errors occurred during fetching
    if (error || relatedPostsError) {
        return <ErrorComponent message={error.message} />;
    }

    // Determine the post background image
    const postBackgroundImage = data.post._embedded['wp:featuredmedia']?.length > 0
        ? data.post._embedded['wp:featuredmedia'][0].source_url
        : '/post-placeholder.avif';

    return (
        <div className={singlePostStyles}>
            {/* Head section for metadata */}
            <Head>
                <title>{`${data.post.title.rendered} - Code with Nas`}</title>
                <meta name="description" content={data.post.excerpt.rendered} />
                <meta property="og:title" content={data.post.title.rendered} />
                <meta property="og:description" content={data.post.excerpt.rendered} />
                <meta property="og:image" content={postBackgroundImage} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={data.post.date} />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`} />
            </Head>
            
            {/* Post thumbnail */}
            <div className="post-thumbnail"
                style={{
                    backgroundImage: `url(${postBackgroundImage})`
                }}
            />

            {/* Post title */}
            <h1 className={`${headingStyles} post-title`} dangerouslySetInnerHTML={{ __html: data.post.title.rendered }} />
            
            {/* Post metadata */}
            <div className="post-meta">
                <p className="post-date"> {formatDate(data.post.date)}</p>
                <p className="post-author">By <span>{data.post._embedded.author[0].name}</span></p>
            </div>
            
            {/* Post category and tags */}
            <div className="post-category">
                <Badge term={category} type={'category'} />
                {data.post._embedded['wp:term'][1].map((term) => (
                    <Badge key={term.id} term={term} type={'tag'} />
                ))}
            </div>
            
            {/* Post content */}
            <div className="post-content">
                <BlocksRenderer html={data.post.content.rendered} />
            </div>

            {/* Display related posts */}
            <RelatedPosts relatedPosts={relatedPosts.posts} loading={loading} />
        </div>
    );
};

/**
 * Server-side data fetching.
 * @param {Object} context - The context object.
 * @returns {Object} Props for the component.
 */
export async function getServerSideProps(context) {
    try {
        // Fetch main post data
        const postParams = { postType: ['post'] };
        const postData = await fetchHookData(usePost.fetcher(), context, { params: postParams });

        // Add fetched post data as props
        return addHookData([postData], {});
    } catch (e) {
        // Handle errors gracefully
        return handleError(e, context);
    }
}

export default SinglePostsPage;

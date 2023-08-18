// Import modules
import { usePost, fetchHookData, addHookData, handleError } from '@headstartwp/next';
import { BlocksRenderer } from '@headstartwp/core/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import formatDate from '@/utils/formatDate';

// Import components
import Badge from '@/components/Badge';
import Loader from '@/components/Loader';
import ErrorComponent from '@/components/ErrorComponent';

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
    const { loading, error, data } = usePost(params);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent message={error.message} />;
    }

    const postBackgroundImage = data.post._embedded['wp:featuredmedia']?.length > 0 ? data.post._embedded['wp:featuredmedia'][0].source_url : '/post-placeholder.avif';

    return (
        <div className={singlePostStyles}>
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
            <div className="post-thumbnail"
                style={{
                    backgroundImage: `url(${postBackgroundImage})`
                }}
            />
            <h1 className={`${headingStyles} post-title`} dangerouslySetInnerHTML={{ __html: data.post.title.rendered }} />
            <div className="post-meta">
                <p className="post-date"> {formatDate(data.post.date)}</p>
                <p className="post-author">By <span>{data.post._embedded.author[0].name}</span></p>
            </div>
            <div className="post-category">
                <Badge term={data.post._embedded['wp:term'][0][0]} type={'category'} />
                {data.post._embedded['wp:term'][1].map((term) => (
                    <Badge key={term.id} term={term} type={'tag'} />
                ))}
            </div>
            <div className="post-content">
                <BlocksRenderer html={data.post.content.rendered} />
            </div>
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
        // Make sure to pass the same params to fetchHookData and usePost
        const params = { postType: ['post'] };
        const usePostData = await fetchHookData(usePost.fetcher(), context, { params });

        return addHookData([usePostData], {});
    } catch (e) {
        return handleError(e, context);
    }
}

export default SinglePostsPage;

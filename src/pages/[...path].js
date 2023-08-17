// Import modules
import { usePost, fetchHookData, addHookData, handleError } from '@headstartwp/next';
import { BlocksRenderer } from '@headstartwp/core/react';
import Head from 'next/head';

// Import components
import Badge from '@/components/Badge';

// Import styles
import { singlePostStyles } from '@/styles/components';
import { headingStyles } from '@/styles/components';

/**
 * Renders a single post page.
 * @component
 * @returns {JSX.Element} Rendered single post page.
 */
const SinglePostsPage = () => {
    const params = { postType: ['post'] };
    const { loading, error, data } = usePost(params);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return 'Error...';
    }

    const postBackgroundImage = data.post._embedded['wp:featuredmedia']?.length > 0 ? data.post._embedded['wp:featuredmedia'][0].source_url : '/post-placeholder.avif';

    return (
        <div className={singlePostStyles}>
            <Head>
                <title>{data.post.title.rendered}</title>
            </Head>
            <div className="post-thumbnail"
                style={{
                    backgroundImage: `url(${postBackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: 'clamp(20vh, 20vw, 50vh)',
                    marginBottom: '1em',
                    border: '1px solid rgba(0,0,0,0.1)',
                    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
                    borderRadius: '5px',
                }}
            />
            <h1
                style={{
                    textAlign: 'center',
                    fontSize: 'clamp(2.5rem, 3vw, 3.5rem)',
                    fontWeight: '900',
                }}
                className={`${headingStyles} title`}
                dangerouslySetInnerHTML={{ __html: data.post.title.rendered }}
            />
            <div style={{
                textAlign: 'center',
                fontWeight: '900',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '100',
            }}>
                <p className="post-author">By {data.post._embedded.author[0].name},</p>
                <p className="post-date"> {
                    new Date(data.post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })
                } </p>
            </div>
            <div className="post-category">
                <Badge term={data.post._embedded['wp:term'][0][0]} type={'category'}/>
                {data.post._embedded['wp:term'][1].map((term) => (
                    <Badge key={term.id} term={term} type={'tag'}/>
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

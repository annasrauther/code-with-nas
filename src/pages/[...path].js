import {
    usePost,
    fetchHookData,
    addHookData,
    handleError,
} from '@headstartwp/next';
import { BlocksRenderer } from '@headstartwp/core/react';
import { headingStyles } from '@/styles/components';
import Badge from '@/components/Badge';
import { singlePostStyles } from '@/styles/components';

const params = { postType: ['post' ] };

const SinglePostsPage = () => {
    const { loading, error, data } = usePost(params);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return 'error...';
    }

    return (
        <div className={singlePostStyles}>
            <h1 style={{
                textAlign: 'center',
                fontSize: 'clamp(2.5rem, 3vw, 3.5rem)',
                fontWeight: '900',
            }} className={`${headingStyles} title`} dangerouslySetInnerHTML={{ __html: data.post.title.rendered }} />
            <div className="post-category">
                <Badge term={data.post._embedded['wp:term'][0][0]} />
                {
                    data.post._embedded['wp:term'][1].map((term) => (
                        <Badge key={term.id} term={term} />
                    ))
                }
            </div>
            <div className="post-content">
                <BlocksRenderer html={data.post.content.rendered} />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    try {
        // make sure to pass the same params to fetchHookData and usePost
        const usePostData = await fetchHookData(usePost.fetcher(), context, { params });

        return addHookData([usePostData], {});
    } catch (e) {
        return handleError(e, context);
    }
}

export default SinglePostsPage;
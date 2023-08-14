import {
    usePost,
    fetchHookData,
    addHookData,
    handleError,
    usePosts
} from '@headstartwp/next';
import { BlocksRenderer } from '@headstartwp/core/react';

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
        <div>
            <h1>{data.post.title.rendered}</h1>
            <BlocksRenderer html={data.post.content.rendered} />
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
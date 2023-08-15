import {
    usePost,
    fetchHookData,
    addHookData,
    handleError,
} from '@headstartwp/next';
import { BlocksRenderer } from '@headstartwp/core/react';
import { headingStyles } from '@/styles/components';
import Badge from '@/components/Badge';
import { css } from '@linaria/core';

const singlePostStyles = css`
    .post__category {
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
        padding-left: 1em;
        padding-bottom: 1em;
        margin: 1em 0;
        border-bottom: 2px solid;
        a {
            border: none;
        }
        h4 {
            margin: 0;
            font-size: 1em;
            font-weight: 300;
        }
    }

    /* Block Styles */
    .post__content {
        padding: 1em;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-weight: 600;
            margin: 1em 0;
            border-bottom: 1px solid gray;
            padding-left: 0.3em;
            padding-bottom: 0.25em;
        }
        h1 {
            font-size: clamp(4rem, 4vw, 3rem);
        }
        h2 {
            font-size: clamp(2rem, 3vw, 2.5rem);
        }
        h3 {
            font-size: clamp(1.5rem, 2vw, 2rem);
        }
        h4 {
            font-size: clamp(1.25rem, 1.5vw, 1.5rem);
        }
        h5 {
            font-size: clamp(1rem, 1.25vw, 1.25rem);
        }
        h6 {
            font-size: clamp(0.875rem, 1vw, 1rem);
        }

        ul, ol {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        ul {
            list-style: circle;
        }

        p,
        li {
            font-weight: 300;
        }
        
        p {
            margin-bottom: 0.5em;
        }

        figure {
            margin: 1em 0;
            img {
                width: 100% !important;
                height: auto !important;
            }
        }
        code {
            display: inline-block;
            font-weight: 900;
            padding: 0.125rem 0.375rem;
            border-radius: 3px;
            border: 1px solid;
            margin: 0 2px;
            background: #330;
            color: white;
        }
        .wp-block-code code {
            display: block;
            padding: 1em 2em;
            margin-bottom: 2em;
        }


    }
}
`;

const params = { postType: ['post' ] };

const SinglePostsPage = () => {
    const { loading, error, data } = usePost(params);

    if (loading) {
        return 'Loading...';
    }

    if (error) {
        return 'error...';
    }
    console.log(data);

    return (
        <div className={singlePostStyles}>
            <h1 style={{
                textAlign: 'center',
                fontSize: 'clamp(2.5rem, 3vw, 3.5rem)',
                fontWeight: '900',
            }} className={`${headingStyles} title`} dangerouslySetInnerHTML={{ __html: data.post.title.rendered }} />
            <div className="post__category">
                <Badge term={data.post._embedded['wp:term'][0][0]} />
                {
                    data.post._embedded['wp:term'][1].map((term) => (
                        <Badge key={term.id} term={term} />
                    ))
                }
            </div>
            <div className="post__content">
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
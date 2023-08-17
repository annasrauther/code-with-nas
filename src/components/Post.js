import Link from "./Link";
import PropTypes from 'prop-types';
import Image from 'next/image';
import Badge from "./Badge";
import { css } from '@linaria/core';

const postStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1em;
    background: white;
    padding: 1em;
    border: 1px solid rgba(0,0,0,0.1);
	box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    :hover {
        .recent-post__image {
            img {
                transform: scale(1.2);
            }
        }
    }

    a {
        border: none;
    }
    .recent-post__content-title {
        font-size: 1.5em;
        font-weight: 900;
        color: #330;
        margin: 0;
    }

    .recent-post__content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.7em;
    }

    .recent-post__image {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1em;
        overflow: hidden;
        width: 100%;
        
        img {
            transition: all 0.2s ease;
            border-radius: 5px;
        }
    }

    .recent-post__category {
        text-align: center;
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        
        h4 {
            letter-spacing: 0.5px;
            font-weight: 400;
        }
    }

    .recent-post__description {
        p {
            font-size: 0.9em;
            font-weight: 300;
        }
    }
`;

const Post = ({ post, showCategory, showTag }) => {
    return (
		<div className={postStyles}>
            <div className="recent-post__image">
                {
                    post._embedded['wp:featuredmedia'] ? (
                        <Image src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} width={300} height={300} />
                    ): <Image src="/post-placeholder.webp" alt={post.title.rendered} width={300} height={300} />
                }
			</div>
			<div className="recent-post__content">				
				<div className="recent-post__category">
                    {
                        showCategory && post._embedded['wp:term'][0] && post._embedded['wp:term'][0].length
                        ? (
                            <Badge term={post._embedded['wp:term'][0][0]} type={'category'} />
                        ): null
                    }
					{
						showTag && post._embedded['wp:term'][1] && post._embedded['wp:term'][1].length
                        ? post._embedded['wp:term'][1].map((term) => (
							<Badge key={term.id} term={term} type={'tag'} />
						)): null
					}
				</div>
				<Link href={post.link}>
					<h3 className="recent-post__content-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
				</Link>
                {
                    post._embedded.author && post._embedded.author.length ? (
                        <div className="recent-post__author">
                            <h4>By {post._embedded.author[0].name}</h4>
                        </div>
                    ): null
                }
                {
                    post.date ? (
                        <div className="recent-post__date">
                            {/* <h4>{new Date(post.date).toLocaleDateString()}</h4> */}
                        </div>
                    ): null
                }
                {
                    post.excerpt.rendered ? (
                        <div className="recent-post__description" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    ): null
                }
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.shape({ title: PropTypes.shape({ rendered: PropTypes.string }) }).isRequired,
    showCategory: PropTypes.bool,
    showTag: PropTypes.bool
};

export default Post;
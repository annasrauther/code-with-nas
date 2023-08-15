import Link from "./Link";
import PropTypes from 'prop-types';
import Image from 'next/image';
import Badge from "./Badge";
import { css } from '@linaria/core';

const postStyles = css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
    padding: 1em 2em;
    position: relative;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 2fr;
    }

    :before,
    :after {
        background-repeat: no-repeat;
        background-size: 100% auto;
        content: "";
        display: block;
        height: 29px;
        position: absolute;
        width: 29px;
    }
    :before {
        background-image: url(https://design-milk.com/assets/images/display/corner-decoration-top-left.svg);
        left: 0;
        top: 0;
    }

    :after {
        background-image: url(https://design-milk.com/assets/images/display/corner-decoration-bottom-right.svg);
        bottom: 0;
        right: 0;
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
    }

    .recent-post__category {
        width: 100%;
        text-align: center;
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        border-top: 1px solid #330;
        border-bottom: 1px solid #330;
        padding: 0.6em 0.5em 0.8em;
        h4 {
            font-size: 12px;
            padding: 5px 10px;
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
				<Image src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} width={300} height={300} />
			</div>
			<div className="recent-post__content">				
				<Link href={post.link}>
					<h3 className="recent-post__content-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
				</Link>
				<div className="recent-post__category">
                    {
                        showCategory ? (
                            <Badge term={post._embedded['wp:term'][0][0]} />
                        ): null
                    }
					{
						showTag ? post._embedded['wp:term'][1].map((term) => (
							<Badge key={term.id} term={term} />
						)): null
					}
				</div>
				<div className="recent-post__description" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
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
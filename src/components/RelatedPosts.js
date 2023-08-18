// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import PostList from './PostList';

// Import styles
import { headingStyles } from '@/styles/components';

/**
 * Styles for the related article section container.
 */
const relatedArticleSectionStyles = css`
    display: grid;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--color-secondary);
    margin: 0 -0.5em;
`;

/**
 * Renders a section displaying related articles.
 *
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The rendered JSX element.
 */
const RelatedPosts = ({ relatedPosts }) => {
    return (
        <div className={`${relatedArticleSectionStyles} container`}>
            {/* Heading for the related articles section */}
            <h2 style={{
                textAlign: 'center',
                background: 'white',
                padding: '0.2em',
                border: '1px solid var(--color-border)',
                boxShadow: '0 0 5px var(--color-border)',
                marginBottom: '0.5em',
            }} className={headingStyles}>
                Related Articles
            </h2>
            {/* Display the list of related articles */}
            <PostList posts={relatedPosts} showCategory={true} showTag={true} />
        </div>
    );
};

/**
 * Prop types for the related articles section component.
 * @type {Object}
 * @property {Array} relatedPosts - List of related posts.
 * @property {number} relatedPosts[].id - The post ID.
 * @property {string} relatedPosts[].slug - The post slug.
 * @property {Object} relatedPosts[].title - The post title.
 * @property {string} relatedPosts[].title.rendered - The post title.
 * @property {boolean} loading - Loading state.
 * @property {boolean} showCategory - Whether to show the post category.
 * @property {boolean} showTag - Whether to show the post tag.
 */ 
RelatedPosts.propTypes = {
    relatedPosts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            slug: PropTypes.string.isRequired,
            title: PropTypes.shape({
                rendered: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};

export default RelatedPosts;

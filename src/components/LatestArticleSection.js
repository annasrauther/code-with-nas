// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import PostList from '@/components/PostList';

// Import styles
import {
    headingStyles,
    latestArticleStyles,
} from '@/styles/components';

// Linaria styles
const latestArticleSectionStyles = css`
    display: grid;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--color-secondary);
    margin: 0 -0.5em;
`;

/**
 * Latest articles section component for the homepage.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.posts - List of latest posts.
 * @param {boolean} props.loading - Loading state.
 * @returns {JSX.Element} Rendered Latest articles section component.
 */
const LatestArticleSection = ({ posts, loading }) => {
    if (loading) {
        return <p>Loading Recent Posts...</p>;
    }

    return (
        <div className={`${latestArticleSectionStyles} container`}>
            <h2 style={{
                textAlign: 'center',
                background: 'white',
                padding: '0.2em',
                border: '1px solid var(--color-border)',
                boxShadow: '0 0 5px var(--color-border)',
                marginBottom: '0.5em',
            }} className={headingStyles}>
                Latest Articles
            </h2>
            {/* Display list of latest posts */}
            <div className={latestArticleStyles}>
                <PostList posts={posts} loading={loading} showCategory showTag />
            </div>
        </div>
    );
};

LatestArticleSection.propTypes = {
    /**
     * List of latest posts.
     */
    posts: PropTypes.array.isRequired,
    /**
     * Loading state.
     */
    loading: PropTypes.bool.isRequired,
};

export default LatestArticleSection;

// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import PostList from '@/components/PostList';
import Seperator from '@/components/Seperator';

// Import styles
import {
    headingStyles,
    latestArticleStyles,
} from '@/styles/components';

// Linaria styles
const latestArticleSectionStyles = css`
    display: grid;
    justifyContent: flex-start;
    alignItems: flex-start;
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
        <div className={latestArticleSectionStyles}>
            <h2 style={{ textAlign: 'center' }} className={headingStyles}>
                Latest Articles
            </h2>
            <Seperator size={2} />
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

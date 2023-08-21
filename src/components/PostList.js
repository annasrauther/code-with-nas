// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import Post from '@/components/Post';
import Loader from '@/components/Loader';

// Styles for the post list component
const postListStyles = css`
    display: grid;
    gap: 0.5em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

/**
 * Component to display a list of posts.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.posts - List of posts.
 * @param {boolean} props.loading - Loading state.
 * @param {boolean} props.showCategory - Whether to show category.
 * @param {boolean} props.showTag - Whether to show tag.
 * @returns {JSX.Element} - Post list JSX element.
 */
const PostList = ({ posts, loading, showCategory, showTag }) => {
    if (loading) {
        return <Loader />;
    }

    return (
        <div className={postListStyles}>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                    showCategory={showCategory}
                    showTag={showTag}
                />
            ))}
        </div>
    );
};

// PropTypes for the PostList component
PostList.propTypes = {
    /**
     * List of posts to display.
     */
    posts: PropTypes.array.isRequired,
    /**
     * Loading state of the component.
     */
    loading: PropTypes.bool.isRequired,
    /**
     * Whether to show the category.
     */
    showCategory: PropTypes.bool,
    /**
     * Whether to show the tag.
     */
    showTag: PropTypes.bool,
};

export default PostList;

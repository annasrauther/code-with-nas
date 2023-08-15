import Post from './Post'
import PropTypes from 'prop-types'
import { css } from '@linaria/core';

const postListStyles = css`
    display: grid;
    gap: 3em;
`;

const PostList = ({ posts, loading, showCategory, showTag }) => {
  return (
    <div className={postListStyles}>
        {
            loading
            ? 'Loading Recent Posts...'
            : posts.map((post) => <Post key={post.id} post={post} showCategory={showCategory} showTag={showTag} />)
        }
    </div>
  )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    showCategory: PropTypes.bool,
    showTag: PropTypes.bool,
}

export default PostList
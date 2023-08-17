import Post from './Post'
import PropTypes from 'prop-types'
import { css } from '@linaria/core';

const postListStyles = css`
    display: grid;
    gap: 0.5em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const PostList = ({ posts, loading, showCategory, showTag }) => {
  if (loading) {
    return <p>Loading Recent Posts...</p>;
  }
  
  return (
    <div className={postListStyles}>
        {
          posts.map((post) => <Post key={post.id} post={post} showCategory={showCategory} showTag={showTag} />)
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
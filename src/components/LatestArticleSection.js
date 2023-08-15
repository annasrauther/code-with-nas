// Import modules
import PropTypes from 'prop-types';

// Import components
import PostList from '@/components/PostList';

// Import styles
import { headingStyles } from '@/styles/components';

/**
 * Latest articles section component for the homepage.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.posts - List of latest posts.
 * @param {boolean} props.loading - Loading state.
 * @returns {JSX.Element} - Latest articles section JSX element.
 */
const LatestArticleSection = ({ posts, loading }) => (
	<div
		style={{
		display: 'grid',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: '2em',
		}}
	>
		<h2 className={headingStyles}>Latest Articles</h2>
		{/* Display list of latest posts */}
		<PostList posts={posts} loading={loading} showCategory={true} showTag={true} />
	</div>
);

LatestArticleSection.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default LatestArticleSection;
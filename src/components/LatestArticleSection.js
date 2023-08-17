// Import modules
import PropTypes from 'prop-types';

// Import components

// Import styles
import { headingStyles, latestArticleStyles } from '@/styles/components';
import PostList from './PostList';
import Seperator from './Seperator';

/**
 * Latest articles section component for the homepage.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.posts - List of latest posts.
 * @param {boolean} props.loading - Loading state.
 * @returns {JSX.Element} - Latest articles section JSX element.
 */
const LatestArticleSection = ({ posts, loading }) => {
	if (loading) {
		return <p>Loading Recent Posts...</p>;
	}

	return (
		<div style={{
			display: 'grid',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
		}}>
			<h2 style={{
				textAlign: 'center',
			}} className={headingStyles}>Latest Articles</h2>
			<Seperator size={2} />
			{/* Display list of latest posts */}
			<div className={latestArticleStyles}>
				<PostList posts={posts} loading={loading} showCategory={true} showTag={true} />
			</div>
		</div>
	)
};

LatestArticleSection.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default LatestArticleSection;
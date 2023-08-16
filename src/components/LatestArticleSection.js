// Import modules
import PropTypes from 'prop-types';

// Import components
import Post from '@/components/Post';

// Import styles
import { headingStyles, latestArticleStyles } from '@/styles/components';

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
			<div className={latestArticleStyles}>
				<div className="col-side">
					<Post key={posts[0].id} post={posts[0]} showCategory={true} showTag={true} />
					<Post key={posts[1].id} post={posts[1]} showCategory={true} showTag={true} />
				</div>
				<div className="col-main">
					<Post key={posts[2].id} post={posts[2]} showCategory={true} showTag={true} />
				</div>
				<div className="col-side">
					<Post key={posts[3].id} post={posts[3]} showCategory={true} showTag={true} />
					<Post key={posts[4].id} post={posts[4]} showCategory={true} showTag={true} />
				</div>
			</div>
		</div>
	)
};

LatestArticleSection.propTypes = {
	posts: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default LatestArticleSection;
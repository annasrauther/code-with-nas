// Import modules
import Image from 'next/image';
import PropTypes from 'prop-types';

// Import components
import HeroCategoriesSection from '@/components/HeroCategoriesSection';

// Import styles
import { headingStyles, heroStyles } from '@/styles/components';

/**
 * Hero component for the homepage.
 *
 * @returns {JSX.Element} - Hero JSX element.
 */
const Hero = ({terms}) => (
	<div className={heroStyles}>
		{/* Text content */}
		<div
			style={{
				display: 'grid',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '2em',
			}}
		>
			<h1 className={headingStyles}>Discover short code snippets for all your development needs.</h1>
			<h3
				style={{
					fontWeight: 'normal',
					fontSize: '1.2em',
					lineHeight: '1.2em',
					margin: '0',
				}}
			>
				Browse snippets by collection or check out our top picks and latest articles below.
			</h3>
			<HeroCategoriesSection terms={terms} />
		</div>
		{/* Hero Image */}
		<div>
			<Image src="/hero_banner.svg" alt="Hero Image" width={300} height={300} />
		</div>
	</div>
);

Hero.propTypes = {
	terms: PropTypes.array.isRequired,
};

export default Hero;
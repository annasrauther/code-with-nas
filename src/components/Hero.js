// Import modules
import Image from 'next/image';

// Import styles
import { headingStyles } from '@/styles/components';

/**
 * Hero component for the homepage.
 *
 * @returns {JSX.Element} - Hero JSX element.
 */
const Hero = () => (
	<div
		style={{
			display: 'grid',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '2em',
			gridTemplateColumns: '2fr 1fr',
		}}
	>
		{/* Text content */}
		<div
			style={{
				display: 'grid',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1em',
				gridTemplateRows: '5fr 1fr',
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
		</div>
		{/* Hero Image */}
		<div>
			<Image src="/hero_banner.svg" alt="Hero Image" width={300} height={300} />
		</div>
	</div>
);

export default Hero;
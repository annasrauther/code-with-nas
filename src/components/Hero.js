// Import dependencies
import Image from 'next/image';
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import HeroCategoriesSection from '@/components/HeroCategoriesSection';

// Import styles
import { headingStyles, heroStyles } from '@/styles/components';

// Linaria styles
const textContentStyles = css`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2em;
`;

/**
 * Hero component for the homepage.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.terms - List of terms.
 * @returns {JSX.Element} Rendered Hero component.
 */
const Hero = ({ terms }) => (
    <div className={`${heroStyles} container`}>
        {/* Text content */}
        <div className={textContentStyles}>
            <h1 className={headingStyles}>Discover short code snippets for all your development needs.</h1>
            <h2
                style={{
                    fontWeight: 'normal',
                    fontSize: '1.2em',
                    lineHeight: '1.2em',
                    margin: '0',
                }}
            >
                Browse snippets by collection or check out our top picks and latest articles below.
            </h2>
            <HeroCategoriesSection terms={terms} />
        </div>
        {/* Hero Image */}
        <div>
            <Image src="/hero_banner.svg" alt="Hero Image" width={700} height={700} />
        </div>
    </div>
);

Hero.propTypes = {
    /**
     * List of terms.
     */
    terms: PropTypes.array.isRequired,
};

export default Hero;

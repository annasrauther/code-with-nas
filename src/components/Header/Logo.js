// Import dependencies
import { useAppSettings } from '@headstartwp/next';
import { css } from '@linaria/core';
import PropTypes from 'prop-types';

// Import components
import Link from 'next/link';
import Image from 'next/image';

// Linaria CSS styling for the logo
const logoStyles = css`
    width: 100%;
    text-align: center;
    img {
        max-width: 90%;
        margin: 0 auto;
    }
`;

const logoStylesSmall = css`
    width: clamp(200px, 50%, 350px);
    text-align: center;
    padding: 1vw;
    img {
        max-width: 90%;
        margin: 0 auto;
    }
`;

/**
 * Logo component for the application.
 *
 * @component
 * @returns {JSX.Element} Rendered Logo component.
 */
export const Logo = ({isHomePage}) => {
    const { data, loading } = useAppSettings();
    
    if (loading) {
        return null;
    }

    return (
        <Link
            href={data?.settings?.site_url || '/'}
            className={isHomePage ? logoStyles : logoStylesSmall}
        >
            <Image
                src={'/logo.svg'}
                alt={data?.settings?.site_name || 'Code With Nas'}
                width={'150'}
                height={'90'}
            />
        </Link>
    );
};

/**
 * PropTypes for the Logo component.
 * 
 * @type {object}
 * @property {boolean} isHomePage - Whether the logo is being rendered on the home page.
 */
Logo.propTypes = {
    isHomePage: PropTypes.bool,
};


export default Logo;

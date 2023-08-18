import { useAppSettings } from '@headstartwp/next';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@linaria/core';

// Linaria CSS styling for the logo
const logoStyles = css`
    text-align: center;
    border: none;
`;

/**
 * Logo component for the application.
 *
 * @component
 * @returns {JSX.Element} Rendered Logo component.
 */
export const Logo = () => {
    const { data, loading } = useAppSettings();

    if (loading) {
        return null;
    }

    return (
        <Link
            href={data?.settings?.site_url || '/'}
            className={logoStyles}
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

export default Logo;

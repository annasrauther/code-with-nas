// Import dependencies
import { useAppSettings } from '@headstartwp/next';
import PropTypes from 'prop-types';

// Import components
import Link from 'next/link';
import Image from 'next/image';

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
            style={{
                width: 'clamp(200px, 50%, 350px)',
                textAlign: 'center',
                padding: '1vw',
            }}
        >
            <Image
                src={'/logo.svg'}
                alt={data?.settings?.site_name || 'Code With Nas'}
                width={'300'}
                height={'100'}
                loading={'eager'}
            />
        </Link>
    );
};

export default Logo;

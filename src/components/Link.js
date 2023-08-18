// Import dependencies
import PropTypes from 'prop-types';
import { removeSourceUrl } from '@headstartwp/core';
import { useSettings } from '@headstartwp/core/react';
import NextLink from 'next/link';

/**
 * Custom Link component that handles source URL removal.
 *
 * This component uses Next.js's Link to handle routing, while also removing the source URL
 * from the provided link using the `removeSourceUrl` function.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.href - The target URL for the link.
 * @param {string} [props.rel=''] - The relationship of the link to the current page.
 * @param {ReactNode} props.children - Child components to be rendered inside the link.
 * @returns {JSX.Element} Rendered Link component.
 */
const Link = ({ href, rel = '', children }) => {
    const settings = useSettings();
    const link = removeSourceUrl({ link: href, backendUrl: settings.sourceUrl || '' });

    return (
        <NextLink href={link} rel={rel} shallow={false}>
            {children}
        </NextLink>
    );
};

// Define PropTypes for the Link component
Link.propTypes = {
    /**
     * The target URL for the link.
     */
    href: PropTypes.string.isRequired,

    /**
     * The relationship of the link to the current page.
     */
    rel: PropTypes.string,

    /**
     * Child components to be rendered inside the link.
     */
    children: PropTypes.node.isRequired,
};

// Default props for the Link component
Link.defaultProps = {
    rel: '',
};

export default Link;

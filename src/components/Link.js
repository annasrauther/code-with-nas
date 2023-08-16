import PropTypes from 'prop-types';
import { removeSourceUrl } from '@headstartwp/core';
import { useSettings } from '@headstartwp/core/react';
import NextLink from 'next/link';

const Link = ({ href, rel = '', children }) => {
	const settings = useSettings();
	const link = removeSourceUrl({ link: href, backendUrl: settings.sourceUrl || '' });

	return (
		<NextLink href={link} rel={rel} shallow={false}>
			{children}
		</NextLink>
	);
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	rel: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Link.defaultProps = {
	rel: '',
};

export default Link;
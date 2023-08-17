import { useAppSettings } from '@headstartwp/next';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@linaria/core';

const logoStyles = css`
	text-align: center;
	border: none;
`;

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
				alt={data?.settings?.site_name || 'Brand Logo'}
				width={'150'}
				height={'90'}
			/>
		</Link>
	);
};
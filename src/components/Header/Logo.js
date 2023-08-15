import { useAppSettings } from '@headstartwp/next';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@linaria/core';

const logoStyles = css`
	text-align: center;
	max-width: 150px;
	border: none;
	> span {
		display: inline-block;
		color: #000;
		font-weight: 500;
		background: #f2f2f2;
		padding: 10px 20px;
		margin: 0 20px;
		font-size: 26px;
		line-height: 30px;
	}
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
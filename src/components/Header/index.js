import { Logo } from './Logo';
import Seperator from '../Seperator';
import { css } from '@linaria/core';

const headerStyles = css`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	padding: 10px 20px;
	border-bottom: 2px solid #000;
`;

const Header = () => {
	return (
		<header role="banner" className={headerStyles}>
			<Logo />
			<Seperator />
		</header>
	);
};

export default Header;
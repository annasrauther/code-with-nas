import PropTypes from 'prop-types';
// import Footer from './Footer';
import Header from './Header';
import { MainContent } from './MainContent';
import { css } from '@linaria/core';

const layoutStyles = css`
	margin: 0 auto;
	padding: 0.5em;
`;
const Layout = ({ children }) => {
	return (
		<>
		<Header />
		<div className={layoutStyles}>
			<MainContent>
				{children}
			</MainContent>
		</div>
		{/* <Footer /> */}
		</>
			);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
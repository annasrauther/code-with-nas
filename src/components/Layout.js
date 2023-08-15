import PropTypes from 'prop-types';
// import Footer from './Footer';
import Header from './Header';
import { MainContent } from './MainContent';
import { css } from '@linaria/core';

const layoutStyles = css`
	width: clamp(250px, 85vw, 800px);
	margin: 0 auto;
	min-height: 80vh;
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
// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import Header from '@/components/Header';
import { MainContent } from '@/components/MainContent';

// Linaria styles for layout
const layoutStyles = css`
    margin: 0 auto;
    padding: 0.5em;
`;

/**
 * Layout component for the application.
 *
 * This component provides a common layout structure for the entire application.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - Child components to be rendered inside the layout.
 * @returns {JSX.Element} Rendered Layout component.
 */
const Layout = ({ children }) => {
    return (
        <>
            {/* Render the Header component */}
            <Header />

            {/* Main content area */}
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
    /**
     * Child components to be rendered inside the layout.
     */
    children: PropTypes.node.isRequired,
};

export default Layout;

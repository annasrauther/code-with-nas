// Import dependencies
import PropTypes from 'prop-types';

/**
 * Main content section component.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The content to render within the main section.
 * @returns {JSX.Element} - MainContent JSX element.
 */
export const MainContent = ({ children }) => {
    return (
        <div>
            <section>
                <main role="main">{children}</main>
            </section>
        </div>
    );
};

// Define PropTypes for the MainContent component
MainContent.propTypes = {
    /**
     * The content to render within the main section.
     */
    children: PropTypes.node.isRequired,
};

export default MainContent;

// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Linaria styles
const errorStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    font-size: 1.5rem;
    color: red;
`;

/**
 * Error component to display error information.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.message - The error message to display.
 * @returns {JSX.Element} Rendered ErrorComponent.
 */
const ErrorComponent = ({ message }) => {
    return <div className={errorStyles}>{message}</div>;
};

ErrorComponent.propTypes = {
    /**
     * The error message to display.
     */
    message: PropTypes.string.isRequired,
};

export default ErrorComponent;

// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import Badge from '@/components/Badge';

// Styles for the TermList component
const termListStyles = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1em;
`;

/**
 * TermList component to display a list of terms.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.terms - List of terms to display.
 * @param {string} props.type - Type of terms ('category' or 'tag').
 * @returns {JSX.Element} - TermList JSX element.
 */
const TermList = ({ terms, type }) => {
    return (
        <ul className={termListStyles}>
            {terms.map((term) => (
                <li key={term.id}>
                    <Badge term={term} type={type} />
                </li>
            ))}
        </ul>
    );
};

// PropTypes for the TermList component
TermList.propTypes = {
    /**
     * List of terms to display.
     */
    terms: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })).isRequired,
    /**
     * Type of terms ('category' or 'tag').
     */
    type: PropTypes.oneOf(['category', 'tag']).isRequired,
};

export default TermList;

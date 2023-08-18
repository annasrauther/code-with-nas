// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import TermList from '@/components/TermList';

// Linaria styles
const categoriesSectionStyles = css`
    display: grid;
    justifyContent: flex-start;
    alignItems: flex-start;
    gap: 2em;
`;

/**
 * Categories section component for the homepage.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.terms - List of category terms.
 * @returns {JSX.Element} Rendered Categories section component.
 */
const HeroCategoriesSection = ({ terms }) => (
    <div className={categoriesSectionStyles}>
        {/* Display category terms if available */}
        {terms.length > 0 && <TermList terms={terms} type="category" />}
    </div>
);

HeroCategoriesSection.propTypes = {
    /**
     * List of category terms.
     */
    terms: PropTypes.array.isRequired,
};

export default HeroCategoriesSection;

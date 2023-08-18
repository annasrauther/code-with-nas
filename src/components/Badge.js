import PropTypes from 'prop-types';
import { css } from '@linaria/core';
import Link from '@/components/Link';

// Linaria CSS styling for the badge
const badgeStyles = css`
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 14px;
    padding: 9px 15px 8px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0;
    color: #330;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    :hover {
        background: #330;
        color: #fff;
    }
`;

/**
 * Badge component for displaying a category or tag.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.term - Term object with name and link properties.
 * @param {string} props.type - Type of the term (category or tag).
 * @returns {JSX.Element} Rendered Badge component.
 */
const Badge = ({ term, type }) => {
    return (
        <Link href={term.link}>
            <h4 title={type} className={badgeStyles}>
                {term.name}
            </h4>
        </Link>
    );
};

Badge.propTypes = {
    /**
     * Term object with name and link properties.
     */
    term: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
    /**
     * Type of the term (category or tag).
     */
    type: PropTypes.oneOf(['category', 'tag']).isRequired,
};

export default Badge;

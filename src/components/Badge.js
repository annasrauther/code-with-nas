// Import dependencies
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

// Import components
import Link from '@/components/Link';

// Linaria CSS styling for the badge
const badgeStyles = css`
    background: var(--color-secondary);
    border: 1px solid var(--color-border);
    display: inline-block;
    font-size: 1em;
    font-weight: normal;
    letter-spacing: 1px;
    padding: 9px 15px 8px;
    position: relative;
    text-transform: uppercase;
    margin: 0;
    color: var(--color-tertiary);
    border-radius: var(--border-radius);
    box-shadow: 0 0 5px var(--color-border);
    transition: all 0.1s ease;

    span {
        height: 1.3px;
        display: inline-block;
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0;
        border-radius: 3px;
    }

    :hover {
        background: var(--color-tertiary);
        color: var(--color-secondary);
        font-weight: bold;
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
    const badgeColor = type === 'category' ? '#e90' : '#690';
    return (
        <Link href={term.link}>
            <div title={type} className={badgeStyles}>
                {term.name}
                <span style={{
                    background: badgeColor,
                }}></span>
            </div>
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

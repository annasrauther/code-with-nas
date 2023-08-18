// Import dependencies
import PropTypes from 'prop-types';

/**
 * Separator component to add a horizontal line.
 *
 * @param {Object} props - Component props.
 * @param {number} props.size - Size of the separator border.
 * @returns {JSX.Element} - Separator JSX element.
 */
const Seperator = ({ size = 1 }) => {
  return (
    <hr
      style={{
        width: '100%',
        border: `${size}px solid rgba(0, 0, 0, 0.1)`,
      }}
    />
  );
};

// PropTypes for the Seperator component
Seperator.propTypes = {
  /**
   * Size of the separator border.
   */
  size: PropTypes.number.isRequired,
};

export default Seperator;

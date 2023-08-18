import PropTypes from 'prop-types';

/**
 * Format a date string into a localized date format.
 *
 * @param {string|Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 */
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

formatDate.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
    ]).isRequired,
};

export default formatDate;

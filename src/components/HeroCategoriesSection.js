// Import modules
import PropTypes from "prop-types";

// Import components
import TermList from "./TermList";

// Import styles
import { headingStyles } from "@/styles/components";

/**
 * Categories section component for the homepage.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.terms - List of category terms.
 * @returns {JSX.Element} - Categories section JSX element.
 */
const HeroCategoriesSection = ({ terms }) => (
	<div
		style={{
			display: 'grid',
			justifyContent: 'flex-start',
			alignItems: 'flex-start',
			gap: '2em',
		}}
	>
		{/* Display category terms if available */}
		{terms.length > 0 ? <TermList terms={terms} type={'category'}/> : null}
	</div>
);

HeroCategoriesSection.propTypes = {
	terms: PropTypes.array.isRequired,
};

export default HeroCategoriesSection;
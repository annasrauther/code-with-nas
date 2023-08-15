import PropTypes from 'prop-types';
import Badge from "./Badge";
import { css } from '@linaria/core';

const termListStyles = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	list-style: none;
	margin: 0;
	padding: 0;
	gap: 1em;
`;

const TermList = ({ terms }) => {
	return (
		<ul className={termListStyles}>
			{
				terms.map((term) => (
					<li key={term.id}>
						<Badge term={term} />
					</li>
				))
			}
		</ul>
	);
};

TermList.propTypes = {
    terms: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })).isRequired,
};

export default TermList;
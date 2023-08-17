import Link from "./Link";
import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';

const badgeStyles = css`
	background: #fff;
	border: 1px solid rgba(0,0,0,0.1);
	display: inline-block;
	font-size: 12px;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 14px;
	padding: 9px 15px 8px;
	position: relative;
	text-decoration: none;
	text-transform: uppercase
	margin: 0;
	color: #330;
	border-radius: 3px;
	box-shadow: 0 0 5px rgba(0,0,0,0.1);
	transition: all 0.2s ease;

    :hover {
		background: #330;
		color: #fff;
	}
`;

const Badge = ({ term, type }) => {
	return (
		<Link href={term.link}>
			<h4 title={type} className={badgeStyles}>{term.name}</h4>
		</Link>
	);
};

Badge.propTypes = {
    term: PropTypes.shape({ name: PropTypes.string, link: PropTypes.string }).isRequired,
	type: PropTypes.oneOf(['category', 'tag']).isRequired
};

export default Badge;
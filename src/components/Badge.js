import Link from "./Link";
import PropTypes from 'prop-types';
import { css, cx } from '@linaria/core';

const badgeStyles = css`
	background: #fff;
	border: 1px solid;
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
	color: #030;
	border-radius: 3px;
	transition: all 0.2s ease;

    :hover {
		background: #eee;
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
import React from "react";
import Link from "./Link";
import PropTypes from 'prop-types';
import { css } from '@linaria/core';

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
	transition: all 0.2s ease;

    :hover {
		background: #eee;
	}

	:after,
	:before {
		background: #000;
		bottom: -5px;
		content: "";
		display: block;
		position: absolute;
	}

	:before {
		left: -5px;
		top: 5px;
		width: 5px;
	}

	:after {
		height: 5px;
		left: 0;
		right: 5px;
	}
`;

const Badge = ({ term }) => {
	return (
		<Link href={term.link}>
			<h4 className={badgeStyles}>{term.name}</h4>
		</Link>
	);
};

Badge.propTypes = {
    term: PropTypes.shape({ name: PropTypes.string, link: PropTypes.string }).isRequired,
};

export default Badge;
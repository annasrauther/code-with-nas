import { css } from '@linaria/core';

export const backButtonStyles = css`
	text-align: center;
	padding: 0.25em;
	border: 1px solid #030;
	font-size: 1.5em;
	font-weight: 200;
	text-transform: uppercase;
	letter-spacing: 4px;
	background: #fff;
	transition: all 0.2s ease;
	:hover {
		background: #eee;
		border-radius: 5px;
	}
`;
export const headingStyles = css`
	font-size: clamp(2em, 10vw + 1em, 3em);
	font-weight: bold;
	color: #330;
	
	span.term-title {
		background: #330;
		color: white;
		border: 1px solid #330;
		padding: 5px 10px;
		border-radius: 5px;
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: 900;
	}
`;
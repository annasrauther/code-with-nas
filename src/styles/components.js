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

export const singlePostStyles = css`
    .post-category {
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 1em;
        flex-wrap: wrap;
        padding-left: 1em;
        padding-bottom: 1em;
        margin: 1em 0;
        border-bottom: 2px solid;
        a {
            border: none;
        }
        h4 {
            margin: 0;
            font-size: 1em;
            font-weight: 300;
        }
    }

    .post-content {
        padding: 1em;
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-weight: 600;
            margin: 1em 0;
            border-bottom: 1px solid gray;
            padding-left: 0.3em;
            padding-bottom: 0.25em;
        }
        h1 {
            font-size: clamp(4rem, 4vw, 3rem);
        }
        h2 {
            font-size: clamp(2rem, 3vw, 2.5rem);
        }
        h3 {
            font-size: clamp(1.5rem, 2vw, 2rem);
        }
        h4 {
            font-size: clamp(1.25rem, 1.5vw, 1.5rem);
        }
        h5 {
            font-size: clamp(1rem, 1.25vw, 1.25rem);
        }
        h6 {
            font-size: clamp(0.875rem, 1vw, 1rem);
        }

        ul, ol {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        ul {
            list-style: circle;
        }

        p,
        li {
            font-weight: 300;
        }
        
        p {
            margin-bottom: 0.5em;
        }

        figure {
            margin: 1em 0;
            img {
                width: 100% !important;
                height: auto !important;
            }
        }
        code {
            display: inline-block;
            font-weight: 900;
            padding: 0.125rem 0.375rem;
            border-radius: 3px;
            border: 1px solid;
            margin: 0 2px;
            background: #330;
            color: white;
        }
        .wp-block-code code {
            display: block;
            padding: 1em 2em;
            margin-bottom: 2em;
        }
    }
`;
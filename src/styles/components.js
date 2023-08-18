import { css } from '@linaria/core';

/**
 * Styles for the back button.
 */
export const backButtonStyles = css`
  text-align: center;
  padding: 0.25em;
  border: 1px solid var(--color-border);
  font-size: 1.5em;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: var(--color-secondary);
  box-shadow: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  :hover {
    background: var(--color-tertiary);
    color: var(--color-secondary);
  }
`;

/**
 * Styles for headings with term title.
 */
export const headingStyles = css`
  flex-direction: column;
  align-items: center;
  font-size: clamp(2em,6vw + 1em,3em);
  font-weight: bold;
  color: var(--color-tertiary);
  font-family: var(--font-family-secondary);
  text-transform: uppercase;

  @media (min-width: var(--breakpoint-tablet)) {
    flex-direction: row;
  }

  span.term-title {
    background: var(--color-tertiary);
    color: var(--color-secondary);
    border: 1px solid var(--color-tertiary);
    border-radius: var(--border-radius);
    text-transform: uppercase;
    font-weight: 900;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0 0.5em;
    font-size: 0.8em;
  }
`;

/**
 * Styles for a single post.
 */
export const singlePostStyles = css`
  .post-category {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 5px;
    flex-wrap: wrap;
    padding-bottom: 1em;
    margin: 1em 0;
    border-bottom: 1px solid var(--color-border);
    a {
      border: none;
    }
    h4 {
      margin: 0;
      font-size: 1em;
      font-weight: 300;
    }
  }

  .post-title {
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 3.5rem);
    font-weight: 900;
    margin-bottom: 0.5em;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5em;
    font-family: var(--font-family-secondary);
  }
  
  .post-thumbnail {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: clamp(20vh, 20vw, 50vh);
    margin-bottom: 1em;
    box-shadow: 0 0 5px var(--color-border);
    border-radius: var(--border-radius);
  }

  .post-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    font-weight: lighter;
  }

  .post-author {
    span {
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  .post-content {
    padding: 2em 1.5em;
    background: var(--color-secondary);
    box-shadow: 0 0 5px var(--color-border);
    border: 1px solid var(--color-border);
    max-width: 700px;
    margin: 0 auto;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
      font-family: var(--font-family-secondary);
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

    ul,
    ol {
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
      margin-bottom: 1em;
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
      border: 1px solid var(--color-border);
      margin: 0 2px;
      background: var(--color-tertiary);
      color: var(--color-secondary);
    }

    .wp-block-code {
      max-width: 100%;
      overflow: scroll;
    }
    
    .wp-block-code code {
      padding: 2em;
      margin: 0;
      margin-bottom: 2em;
      font-size: 1.2em;
      background: var(--color-tertiary);
      color: var(--color-secondary);
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow: scroll;
    }
  }
`;

export const latestArticleStyles = css`
  display: grid;
  gap: 2em;
  align-items: flex-start;
  grid-template-columns: 1fr;

  .col-side,
  .col-main {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const heroStyles = css`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2em;
    grid-template-columns: 1fr;

    @media (min-width: var(--breakpoint-tablet)) {
      grid-template-columns: 2fr 1fr;
    }
`;

export const pageTitleStyles = css`
  display: flex;
  font-family: var(--font-family-secondary);
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 20px;
`;

export const pageSectionStyles = css`
  display: grid;
  justifyContent: flex-start;
  align-items: flex-start;
  gap: 2em;
`;
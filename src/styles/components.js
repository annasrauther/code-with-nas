import { css } from '@linaria/core';

// Styles for the back button.
export const backButtonStyles = css`
  text-align: center;
  background: var(--color-secondary);
  padding: 0.25em;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 1.5em;
  font-weight: 200;
  letter-spacing: 4px;
  text-transform: uppercase;
  box-shadow: 1px solid var(--color-border);
  transition: all 0.2s ease;

  :hover {
    background: var(--color-tertiary);
    color: var(--color-secondary);
  }
`;

// Styles for headings with term title.
export const headingStyles = css`
  align-items: center;
  color: var(--color-tertiary);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: var(--font-family-secondary);
  font-size: clamp(2em, 5vw + 1em, 3em);
  font-weight: bold;
  justify-content: center;
  text-transform: uppercase;

  @media (min-width: var(--breakpoint-tablet)) {
    flex-direction: row;
  }

  span.term-title {
    align-items: center;
    background: var(--color-tertiary);
    border: 1px solid var(--color-tertiary);
    border-radius: var(--border-radius);
    color: var(--color-secondary);
    display: flex;
    font-size: 0.8em;
    font-weight: 900;
    justify-content: center;
    padding: 0.25em 0.5em;
    text-align: center;
    text-transform: uppercase;
  }
`;

// Styles for a single post.
export const singlePostStyles = css`
  .post-thumbnail {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 5px var(--color-border);
    height: clamp(20vh, 20vw, 50vh);
    margin: -0.5em -0.5em 1em;
    width: calc(100% + 1em);
  }

  .post-category {
    a {
      border: none;
    }
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin: 1em 0;
    padding-bottom: 1em;

    h4 {
      font-size: 1em;
      font-weight: 300;
      margin: 0;
    }
  }

  .post-title {
    border-bottom: 1px solid var(--color-border);
    font-family: var(--font-family-secondary);
    font-size: clamp(1.5rem, 2.5vw, 3rem);
    font-weight: 900;
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
    text-align: center;
  }

  .post-meta {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.9em;
    font-weight: lighter;
    gap: 1em;
    justify-content: center;
    text-align: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .post-author span {
    text-transform: uppercase;
  }

  .post-content {
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    box-shadow: 0 0 5px var(--color-border);
    margin: 0 auto;
    max-width: 700px;
    padding: 2em 2.5em;

    table {
      border-collapse: collapse;
      width: 100%;

      thead {
        border-bottom: 3px solid;
      }

      th,
      td {
        border: 1px solid;
        padding: 0.5em;
      }
    }

    a {
      border-bottom: 1px solid var(--color-primary);
      color: var(--color-primary);
      text-decoration: none;
      transition: all 0.2s ease;

      :hover {
        border-bottom: 1px solid var(--color-tertiary);
        color: var(--color-tertiary);
      }
    }

    code:not(pre code) {
      background: #f5f2f0;
      border-radius: 5px;
      color: var(--color-tertiary);
      display: inline-block;
      font-family: var(--font-family-primary);
      margin: 2px 0;
      padding: 0.2em 0.4em;
      border: 1px solid var(--color-border);
    }

    code {
      white-space: pre-wrap;
      display: block;
    }

    figure {
      margin: 1em 0;

      img {
        height: auto !important;
        width: 100% !important;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      border-bottom: 1px solid var(--color-border);
      font-family: var(--font-family-secondary);
      font-weight: 600;
      margin: 1em 0;
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

    li,
    p {
      font-weight: 300;
      margin-bottom: 0.5em;
      text-align: justify;
    }

    ol,
    ul {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    ul {
      list-style: circle;
    }
  }
`;

export const latestArticleStyles = css`
  align-items: flex-start;
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr;

  .col-main,
  .col-side > div {
    grid-template-columns: 1fr;
  }
`;

export const heroStyles = css`
  align-items: center;
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const pageTitleStyles = css`
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  font-family: var(--font-family-secondary);
  gap: 10px;
  font-size: clamp(2em,1vw + 1em,3em);
  justify-content: center;
  padding-bottom: 20px;
`;

export const pageSectionStyles = css`
  align-items: flex-start;
  display: grid;
  gap: 2em;
  justify-content: flex-start;
`;

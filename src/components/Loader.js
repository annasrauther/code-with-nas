// Import dependencies
import { css } from '@linaria/core';

/**
 * Loader component displaying a spinning loader animation.
 *
 * @component
 * @returns {JSX.Element} Rendered Loader component.
 */
const Loader = () => {
    const loaderContainer = css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
        background-color: var(--color-secondary);
    `;

    const loader = css`
        border: 4px solid var(--color-border);
        border-left-color: var(--color-tertiary);
        animation: spin 1s linear infinite;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    `;

    return (
        <div className={loaderContainer}>
            <div className={loader}></div>
        </div>
    );
};

export default Loader;

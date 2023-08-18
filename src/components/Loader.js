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
        background-color: #f0f0f0;
    `;

    const loader = css`
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #333;
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

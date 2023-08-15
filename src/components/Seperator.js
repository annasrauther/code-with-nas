import { css } from '@linaria/core';

const decorativeLineStyles = css`
    position: absolute;
    bottom: -15px;
`;

const Seperator = () => {
  return (
    <div className={decorativeLineStyles}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16.395" height="20.284" viewBox="0 0 16.395 20.284">
            <g data-name="Group 197" transform="translate(-689.803 -586.663)">
                <rect data-name="Rectangle 362" width="7" height="13" transform="translate(692.403 591.991) rotate(-21)" fill="#fff"></rect>
                <rect data-name="Rectangle 198" width="0.999" height="19.965" transform="translate(690.449 587.668) rotate(-21.05)" stroke="#000" strokeWidth="1"></rect>
                <rect data-name="Rectangle 199" width="0.999" height="19.965" transform="translate(697.448 587.668) rotate(-21.05)" stroke="#000" strokeWidth="1"></rect>
            </g>
        </svg>
    </div>
  )
}

export default Seperator
import { css } from '@linaria/core';
import { Logo } from '@/components/Header/Logo';

// Linaria CSS styling for the header
const headerStyles = css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    padding: 10px 20px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

/**
 * Header component for the application.
 *
 * @component
 * @returns {JSX.Element} Rendered Header component.
 */
const Header = () => {
    return (
        <header role="banner" className={headerStyles}>
            <Logo />
        </header>
    );
};

export default Header;

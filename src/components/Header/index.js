import { css } from '@linaria/core';
import { Logo } from '@/components/Header/Logo';

// Linaria CSS styling for the header
const headerStyles = css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
    padding: 10px 20px;
    border-bottom: 1px solid var(--color-border);
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

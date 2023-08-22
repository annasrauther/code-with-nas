// Import dependencies
import { useRouter } from 'next/router';
import { css } from '@linaria/core';

// Import components
import { Logo } from '@/components/Header/Logo';
import Menu from '@/components/Header/Menu';

// Linaria CSS styling for the header
const headerStyles = css`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-secondary);
    border-bottom: 1px solid var(--color-border);
    @media (min-width: 768px) {
        flex-direction: row;
        height: 65px;
    }
`;

// Hardcoded navigation links
const navigationLinks = [
    {
        id: 1,
        label: 'Categories',
        url: '/category',
    },
    {
        id: 2,
        label: 'Tags',
        url: '/tag',
    },
];

/**
 * Header component for the application.
 *
 * @component
 * @returns {JSX.Element} Rendered Header component.
 */
const Header = () => {
    const router = useRouter();
    return (
        <header role="banner" className={`container ${headerStyles}`} style={{
            paddingTop: 0,
            paddingBottom: 0,

        }}>
            <Logo/>
            <Menu navigationLinks={navigationLinks} router={router} />
        </header>
    );
};

export default Header;

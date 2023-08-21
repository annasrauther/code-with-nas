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
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-secondary);
    padding: 10px 0;
    border-bottom: 1px solid var(--color-border);

    @media (min-width: 768px) {
        flex-direction: row;
    }

    .header-menu {

        display: flex;
        list-style: none;
        padding: 0;
        gap: 1em;
        margin: 1em 0 0;
        font-size: 1.3em;
        width: 100%;
        justify-content: space-evenly;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding-top: 10px;
    
        
        @media (min-width: 768px) {
            margin: 0;
            margin-right: 2vw;
            justify-content: flex-end;
            border-top: none;
            padding-top: 0;
        }
        
        a:hover {
            text-decoration: underline;
            font-weight: bold;
        }
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
    const isHomePage = router.pathname === '/';

    return (
        <header role="banner" className={headerStyles}>
            <Logo isHomePage={isHomePage} />
            {
                isHomePage ? null : <Menu navigationLinks={navigationLinks} router={router} />
            }

        </header>
    );
};

export default Header;

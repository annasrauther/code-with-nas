// Import modules
import { HeadlessApp } from '@headstartwp/next';
import Link from 'next/link';

// Import components
import Layout from '@/components/Layout';

// Import styles
import '@/styles/globals.css';

/**
 * Main application component.
 * @param {Object} param0 - Component props.
 * @param {Object} param0.Component - The component to render.
 * @param {Object} param0.pageProps - Props for the component.
 * @returns {JSX.Element} Rendered application.
 */
const MyApp = ({ Component, pageProps }) => {
    // only HeadlessApp needs fallback and themeJson, so we remove them from the props we pass down to the pages
    const { fallback = {}, themeJson = {}, ...props } = pageProps;

    return (
        <HeadlessApp
            pageProps={pageProps}
            settings={{
                // instruct the framework to use Next.js link component or your own version
                linkComponent: Link,
            }}
        >
            <Layout>
                <Component {...props} />
            </Layout>
        </HeadlessApp>
    );
};

export default MyApp;

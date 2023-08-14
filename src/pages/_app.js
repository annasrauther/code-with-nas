import { HeadlessApp } from '@headstartwp/next';
import Link from 'next/link';
import Layout from '../components/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
    // only HeadlessApp needs fallback and themeJson, so we remove them from the props we pass down to the pages

    // eslint-disable-next-line react/prop-types, no-unused-vars
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
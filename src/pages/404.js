// Import modules
import { addHookData, fetchHookData, handleError, useAppSettings } from '@headstartwp/next';
import Head from 'next/head';
import { resolveBatch } from '@/utils/promises';

/**
 * Renders the 404 Page Not Found.
 * @component
 * @returns {JSX.Element} Rendered 404 Page Not Found.
 */
const NotFoundPage = () => {
    const { data } = useAppSettings();

    return (
        <>
            <Head>
                <title>{`Page Not Found - ${data.settings.site_name}`}</title>
                <meta name="description" content={data.settings.site_desc} />
            </Head>
            <h1>404 - Page Not Found</h1>
        </>
    );
};

/**
 * Server-side data fetching for 404 Page Not Found.
 * @param {Object} context - The context object.
 * @returns {Object} Props for the component.
 */
export async function getStaticProps(context) {
    try {
        // Fetch batch of promises and throw errors selectively
        // Passing `throw: false` will prevent errors from being thrown for that promise
        const settledPromises = await resolveBatch([
            { func: fetchHookData(useAppSettings.fetcher(), context) },
        ]);

        return addHookData(settledPromises, { revalidate: 60 });
    } catch (e) {
        return handleError(e, context);
    }
}

export default NotFoundPage;

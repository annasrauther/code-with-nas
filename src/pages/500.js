// Import modules
import { addHookData, fetchHookData, handleError, useAppSettings } from '@headstartwp/next';
import Head from 'next/head';
import { resolveBatch } from '@/utils/promises';

/**
 * Renders the 500 Internal Server Error page.
 * @component
 * @returns {JSX.Element} Rendered 500 Internal Server Error page.
 */
const ServerErrorPage = () => {
    const { data } = useAppSettings();

    return (
        <>
            <Head>
                <title>Error - {data.settings.site_name}</title>
                <meta name="description" content={data.settings.site_desc} />
            </Head>
            <h1>500 - Internal Server Error</h1>
        </>
    );
};

/**
 * Server-side data fetching for 500 Internal Server Error page.
 * @param {Object} context - The context object.
 * @returns {Object} Props for the component.
 */
export async function getStaticProps(context) {
    try {
        // Fetch batch of promises and throw errors selectively
        // Passing `throw: false` will prevent errors from being thrown for that promise
        const settledPromises = await resolveBatch([
            { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },
        ]);

        return addHookData(settledPromises, { revalidate: 60 });
    } catch (e) {
        return handleError(e, context);
    }
}

export default ServerErrorPage;

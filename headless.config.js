/**
 * Headless Config
 *
 * @type {import('@headstartwp/core').HeadlessConfig}
 */
module.exports = {
    sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,
	hostUrl: process.env.NEXT_PUBLIC_HOST_URL,
    useWordPressPlugin: true,
    customTaxonomies: [
		// this is just an example
		{
			slug: 'tag',
			endpoint: '/wp-json/wp/v2/tags',
		},
	],
};
import { previewHandler } from '@headstartwp/next';

/**
 * API route handler for handling preview requests.
 *
 * @param {import('next').NextApiRequest} req - The Next.js request object.
 * @param {import('next').NextApiResponse} res - The Next.js response object.
 * @returns {Promise<void>} - A promise that resolves when the preview handler is executed.
 */
export default async function handler(req, res) {
    // Proxy the default preview handler provided by the '@headstartwp/next' library
    return previewHandler(req, res);
}

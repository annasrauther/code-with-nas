import { revalidateHandler } from '@headstartwp/next';

/**
 * API route handler for handling revalidation requests.
 *
 * @param {import('next').NextApiRequest} req - The Next.js request object.
 * @param {import('next').NextApiResponse} res - The Next.js response object.
 * @returns {Promise<void>} - A promise that resolves when the revalidate handler is executed.
 */
export default async function handler(req, res) {
  // Proxy the default revalidate handler provided by the '@headstartwp/next' library
  return revalidateHandler(req, res);
}

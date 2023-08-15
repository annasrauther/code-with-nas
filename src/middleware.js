import { AppMiddleware } from '@headstartwp/next/middlewares';

/**
 * Configuration options for the custom middleware.
 * Defines the paths that should be matched by the middleware.
 */
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts[\\w-]+\\.\\w+).*)',
  ],
};

/**
 * Custom middleware function that applies AppMiddleware to the specified paths.
 *
 * @param {...any} args - Arguments passed to the middleware function.
 * @returns {Promise} - Promise that resolves after the middleware is applied.
 */
export async function middleware(...args) {
  return AppMiddleware(...args);
}
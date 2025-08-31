/**
 * Helper functions used throughout the project.
 */

/**
 * Convert a page name to a route path.  The Base44 code uses
 * createPageUrl to generate URLs for internal navigation.  Here we
 * implement a simple mapping that returns friendly paths for each
 * page.  If an unknown page is passed the root path is returned.
 *
 * @param {string} pageName The name of the page (e.g. "Feed").
 * @returns {string} The corresponding URL path starting with a slash.
 */
export function createPageUrl(pageName) {
  switch (pageName) {
    case 'Feed':
      return '/';
    case 'Communities':
      return '/communities';
    case 'Social':
      return '/social';
    case 'Search':
      return '/search';
    case 'CreatePost':
      return '/create-post';
    case 'Profile':
      return '/profile';
    default:
      return '/';
  }
}

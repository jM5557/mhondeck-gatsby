/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

export const onRouteUpdate = () => {
    window.scrollTo(0, 0); // Ensure page starts from the top
  };

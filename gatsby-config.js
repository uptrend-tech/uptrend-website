/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://uptrend.tech`,
    language: `en`,
    image: `/banner.png`,
    // TODO: improve
    author: `@uptrend_tech`,
    title: `Uptrend - Software Design & Development Services`,
    titleAlt: `Software Design & Development Agency - Uptrend`,
    description: `Top talent designers and engineers. Web & mobile development. Human-centered design and technology.`,
    headline: `Users expect beautiful, intuitive products and we help you design and develop them.`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

var proxy = require('http-proxy-middleware')

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
    // headline: `Users expect beautiful, intuitive products and we help you design and develop them.`,
    headline: `We help our clients build beautiful, intuitive digital products.`,
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
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
        },
        extensions: ['js'],
      },
    },
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}

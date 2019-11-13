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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-72435973-5',
        // // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'example.com',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Uptrend Technology',
        short_name: 'Uptrend',
        start_url: '/',
        background_color: '#363648',
        theme_color: '#706bf6',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    // `gatsby-plugin-netlify`,
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

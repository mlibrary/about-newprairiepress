/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// React 19 no longer ships the UMD files that gatsby-plugin-decap-cms copies.
const bundleCmsDependencies = config => {
  config.externals = []
  config.plugins = config.plugins.filter(plugin =>
    ![`CopyPlugin`, `HtmlWebpackTagsPlugin`].includes(plugin.constructor.name)
  )
}

module.exports = {
  siteMetadata: {
    title: `New Prairie Press`,
    description: `New Prairie Press at Kansas State University offers a home for scholarly publications edited or authored by scholars committed to the principles of open access publishing. While the Press focuses on journals, monographs, and conference proceedings in the humanities, social sciences, and the arts, publications from all disciplines are welcome.`,
    author: `New Prairie Press`,    
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-385439773`],
        gtagConfig: {
          anonymize_ip: false,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          charset: false,
        },
      }
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        /**
         * One convention is to place your Decap CMS customization code in a
         * `src/cms` directory.
         */
        manualInit: true,
        enableIdentityWidget: false,
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: bundleCmsDependencies,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-npp.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            // options: {
            //   name: 'assets',
            // },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ]
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Lapa`,
    siteUrl: `https://www.lapa-eats.com`,
    description: `Food blog built with React and Gatsby`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lapa`,
        short_name: `Lapa`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon-lapa.png`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143287896-1",
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Lapa`,
    description: `Food blog built with React and Gatsby`
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        ],
      },
    },
  ],
}

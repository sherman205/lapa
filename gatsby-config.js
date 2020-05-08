module.exports = {
  siteMetadata: {
    title: "Lapa Eats",
    titleTemplate: "%s · Modern + global recipes to fuel your mind, body, and heart",
    description: "Making everyday food look beautiful. Your go-to place for finding creative and slightly nostalgic recipes for all occasions.",
    url: "https://www.lapa-eats.com",
    image: "/src/images/favicon-lapa.png"
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

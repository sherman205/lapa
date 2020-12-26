const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.lapa-eats.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
module.exports = {
  siteMetadata: {
    title: "Lapa Eats",
    titleTemplate: "Modern + global recipes",
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
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            host: 'https://www.lapa-eats.com',
            sitemap: 'https://www.lapa-eats.com/sitemap.xml',
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        }
      }
    }
  ]
}

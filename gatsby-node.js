const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const recipeTemplate = path.resolve("src/templates/Recipe.js")

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: recipeTemplate,
      context: {
        pathSlug: path,
      },
    })
  })
}
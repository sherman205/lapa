const path = require("path");
const _ = require("lodash");
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log("heyyyyy");
  console.log(`${__dirname}/src/templates/recipe.js`);
  const recipeTemplate = `${__dirname}/src/templates/recipe.js`;
  const tagTemplate = `${__dirname}/src/templates/category.js`;

  const result = await graphql(`
    {
      recipesRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  result.data.recipesRemark.edges.forEach(({ node }) => {
    if (node.fields.slug.startsWith('/recipes/')) {
      createPage({
        path: node.fields.slug,
        component: recipeTemplate,
        context: {
          slug: node.fields.slug
        },
      })
    }
  });

  result.data.tagsGroup.group.forEach(tag => {
    createPage({
      path: `/results/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

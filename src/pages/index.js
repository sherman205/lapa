import React from "react";
import { graphql } from "gatsby"
import Nav from '../components/nav';
import Splash from '../components/splash';
import Footer from '../components/footer';
import RecipePreview from '../components/recipePreview';
import '../styles/index.scss';

const IndexPage = ( {data} ) => {
  return (
    <>
      <div className="home">
        <Nav />
        <Splash />
        <div className="latest">
            <span className="bar" />
            <div className="category">Latest</div>   
            <span className="bar" />
        </div>
        <div className="recipe-row">
          {
            data.recipes.edges.map(edge => {
              return (
                <div className="item" key={edge.node.frontmatter.path}>
                  <RecipePreview node={edge.node} />
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export const query = graphql`
  {
    recipes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    )
    {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            description
            servingSize
            totalTime
            ingredients
            instructions
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            recipeImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;

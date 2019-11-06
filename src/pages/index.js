import React from "react";
import { graphql } from "gatsby"
import { isMobile } from "react-device-detect";
import Root from '../components/root';
import Nav from '../components/nav';
import NavMobile from '../components/navMobile';
import MobileSplash from '../components/mobileSplash';
import Splash from '../components/splash';
import Footer from '../components/footer';
import FooterSmall from '../components/footerSmall';
import RecipePreview from '../components/recipePreview';
import '../styles/index.scss';

const IndexPage = ( {data} ) => {
  if (!isMobile) {
    return (
      <>
        <Root metadata={data.metadata.siteMetadata} />
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
                  <div className="item" key={edge.node.fields.slug}>
                    <RecipePreview node={edge.node} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <Footer />
      </>
    );
  }
  else {
    return(
      <>
        <Root metadata={data.metadata.siteMetadata} />
        <NavMobile />
        <div className="mobile-home">
          <MobileSplash />
          {data.recipes.edges.map(edge => (
            <div className="recipe-row item" key={edge.node.fields.slug}>
              <RecipePreview node={edge.node} />
            </div>
          ))}
          <FooterSmall />
        </div>
      </> 
    );
  }
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
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date
            description
            featuredImage {
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
    metadata: site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;

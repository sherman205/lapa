import React from "react";
import { graphql } from "gatsby";
import { isMobile } from "react-device-detect";
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import RecipePreview from '../components/recipePreview';
import './category.scss';


const ResultCards = ( {data} ) => {
  return (
    <div className="row">
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const { title } = node.frontmatter;
        return (
          <div className="item" key={title}>
            <RecipePreview node={node} />
          </div>
        )
      })}
    </div>
  );
}

const Category = ({ pageContext, data }) => {
  const { tag } = pageContext;

  if (!isMobile) {
    return (
      <>
        <NavSmall />
        <div className="recipe-filtered">
          <div className="results">
            <p className="search nexaLight">your search results for</p>
            <p className="query playfair">{tag}</p>
            <ResultCards data={data} />
          </div>
        </div>
        <FooterSmall />
      </>
    );
  }
  else {
    return (
      <>
        <NavMobile />
        <div className="recipe-filtered-mobile">
          <div className="results">
            <p className="search nexaLight">your search results for</p>
            <p className="query playfair">{tag}</p>
            <ResultCards data={data} />
          </div>
          <FooterSmall />
        </div>
      </>
    );
  }
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
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
        }
      }
    }
  }
`

export default Category;

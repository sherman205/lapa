import React from "react";
import { graphql } from "gatsby";

const Recipe = ({ data }) => {
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    return (
      <div>
        <h1>{title}</h1>
        <div className="blog-post"></div>
      </div>
    )
  }

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
      }
    }
  }
`

export default Recipe;
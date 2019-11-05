import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';


const Results = ({ data }) => {
  const allTags = data.allMarkdownRemark.group;

  return (
    <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/results/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Results;
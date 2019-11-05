import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';
import Root from '../components/root';

const Results = ({ data }) => {
  const allTags = data.results.group;

  return (
    <div>
        <Root metadata={data.metadata.siteMetadata} />
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
  {
    results: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
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

export default Results;
import React from 'react';
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import SearchNoResults from '../components/searchNoResults';
import Root from '../components/root';

import '../styles/404.scss';

const NoResults = ( {data} ) => {
	return (
        <>
            <Root metadata={data.metadata.siteMetadata} />
            <NavSmall />
            <div className="recipe-filtered">
                <div className="results">
                    <h3>No results found -- try entering different keywords:</h3>
                    <SearchNoResults />
                </div>
            </div>
            <FooterSmall />
        </>
    );
}

export const pageQuery = graphql`
  {
    metadata: site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default NoResults;

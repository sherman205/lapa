import React from 'react';
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import SearchNoResults from '../components/searchNoResults';
import SEO from '../components/seo';
import '../styles/404.scss';

const NoResults = () => {
	return (
        <>
            <SEO title="No results found" />
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

export default NoResults;

import React from 'react';
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';

import '../styles/404.scss';

const NoResults = () => {
	return (
        <>
            <NavSmall />
            <div className="recipe-filtered">
                <div className="results">
                    <h3>No results found -- try entering different keywords:</h3>
                </div>
            </div>
            <FooterSmall />
        </>
    );
}

export default NoResults;

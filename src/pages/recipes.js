import React from 'react';
import { Link, graphql } from "gatsby";
import { isMobile } from "react-device-detect";
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import Root from '../components/root';
import '../styles/recipes.scss';

const generateCard = (category) => {
    return (
        <Link to={`/results/${category}`}>
            <div className="wrapper">
                <p>{category}</p>
                <div className="dotted-bar"></div>
                {/* <img className="image" src={CONSTANTS.BASE_URL + category.image} alt="Category" /> */}
            </div>
        </Link>
    );
}

const Recipes = ( { data}) => {
    const categories = ["breakfast", "appetizers", "salad", "soup", "entrees", "heirloom", "drinks", "dessert"];
    if (!isMobile) {
        return (
            <>
                <Root metadata={data.metadata.siteMetadata} />
                <NavSmall />
                <div className="recipe-categories">
                    <div className="categories-intro playfair">
                        <div>What are you craving?</div>
                    </div>
                    <div className="categories">
                        {categories.map((category) => (
                            <div className="card" key={category}>
                                {generateCard(category)}
                            </div>
                        ))}
                    </div>
                </div>
                <FooterSmall />
            </>
        );
    }
    else {
        return (
            <>
                <Root metadata={data.metadata.siteMetadata} />
                <NavMobile />
                <div className="recipe-categories-mobile">
                    <div className="categories-intro playfair">
                        <div>What are you craving?</div>
                    </div>
                    <div className="categories">
                        {categories.map((category) => (
                            <div className="card" key={category}>
                                {generateCard(category)}
                            </div>
                        ))}
                    </div>
                    <FooterSmall />
                </div>
            </>
        );
    }
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

export default Recipes;

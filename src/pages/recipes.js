import React from 'react';
import { Link } from "gatsby";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import '../styles/recipes.scss';

const generateCard = (category) => {
    return (
        // <Link to={`/results/${category_title}`}>
            <div className="wrapper">
                <p>{category}</p>
                <div className="dotted-bar"></div>
                {/* <img className="image" src={CONSTANTS.BASE_URL + category.image} alt="Category" /> */}
            </div>
        // </Link>
    );
}

const Recipes = () => {
    const categories = ["breakfast", "appetizers", "salad", "soup", "entrees", "heirloom", "drinks", "dessert"];
    return (
        <>
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

export default Recipes;

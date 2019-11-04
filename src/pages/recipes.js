import React from 'react';
import { Link } from "gatsby";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import '../styles/recipes.scss';

// const generateCard = (category) => {
//     let category_title = category.title;
//     return (
//         <Link to={`/results/${category_title}`}>
//             <div className="wrapper">
//                 <p>{category.title}</p>
//                 <div className="dotted-bar"></div>
//                 <img className="image" src={CONSTANTS.BASE_URL + category.image} alt="Category" />
//             </div>
//         </Link>
//     );
// }

const Recipes = () => {
    return (
        <>
            <NavSmall />
            <div className="recipe-categories">
                <div className="categories-intro playfair">
                    <div>What are you craving?</div>
                </div>
                <div className="categories">
                    {/* {this.state.categories.map((category, index) => (
                        <div className="card" key={index}>
                            {generateCard(category)}
                        </div>
                    ))} */}
                </div>
            </div>
            <FooterSmall />
        </>
    );
}

export default Recipes;

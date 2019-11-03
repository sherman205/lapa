import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";
import './styles/recipePreview.scss';

const RecipePreview = ( {frontmatter} ) => {
    const img = frontmatter.featuredImage.childImageSharp.fluid;
    return (
        <div className="recipePreview">
            <div className="image">
                <Link to={frontmatter.path}>
                    <Img className="image-1x1" fluid={img} alt="Recipe" />
                </Link>
            </div>
            <div className="details">
                <p className="title playfair">{frontmatter.title}</p>
                <p className="date nexaLight">{frontmatter.date}</p>
                <div className="border" />
                <p className="description nexaBold">{frontmatter.description}</p>
                <div className="content">{frontmatter.content}</div>
                <Link to={frontmatter.path}>
                    <p className="more nexaBold">...</p>
                </Link>
            </div>
        </div>
    );
}

export default RecipePreview;
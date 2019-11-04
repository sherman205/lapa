import React from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";
import './styles/recipePreview.scss';

const RecipePreview = ( {node} ) => {
    const img = node.frontmatter.featuredImage.childImageSharp.fluid;
    return (
        <div className="recipePreview">
            <div className="image">
                <Link to={node.frontmatter.path}>
                    <Img className="image-1x1" fluid={img} alt="Recipe" />
                </Link>
            </div>
            <div className="details">
                <p className="title playfair">{node.frontmatter.title}</p>
                <p className="date nexaLight">{node.frontmatter.date}</p>
                <div className="border" />
                <p className="description nexaBold">{node.frontmatter.description}</p>
                <div className="content" dangerouslySetInnerHTML={{ __html: node.html }} />
                <Link to={node.frontmatter.path}>
                    <p className="more nexaBold">...</p>
                </Link>
            </div>
        </div>
    );
}

export default RecipePreview;
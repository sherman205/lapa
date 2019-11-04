import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import './recipe.scss';

const Recipe = ({ data }) => {
    const { markdownRemark } = data
    const { title, date, servingSize, totalTime, ingredients, instructions, tags } = markdownRemark.frontmatter;
    const html = markdownRemark.html;
    const img = markdownRemark.frontmatter.recipeImage.childImageSharp.fluid;
    return (
        <div className="recipe">
          <div className="recipe-left">
            <NavSmall />
            <div className="recipe-content">
              <p className="title playfair">{title}</p>
              <div className="date nexaLight">{date}</div>
              <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
              <div start="md" className="recipe-info">
                <div className="pre-recipe-info">Serving Size: {servingSize}</div>
                <div className="pre-recipe-info">Total Time: {totalTime}</div>
                <br></br>
                <div className="recipe-ingredients">
                  <span className="info-title playfair">Ingredients</span>
                  <ul>
                    {ingredients && ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                  </ul>
                </div>
                <div className="recipe-instructions">
                  <span className="info-title playfair">Instructions</span>
                  <ol>
                    {instructions && instructions.map((instruction, i) => <li key={i}>{i+1}. {instruction}</li>)}
                  </ol>
                </div>
              </div>
              <div className="content tag-us">
                Did you try out this recipe? Tag @lapa.eats on Instagram
              </div>
            </div>
            <FooterSmall />
          </div>
          <div className="recipe-right">
            <Img fluid={img} alt="{title}" />
          </div>
        </div>
    );
  }

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) 
    {
      html
      frontmatter {
        title
        path
        tags
        date
        servingSize
        totalTime
        ingredients
        instructions
        recipeImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
}
`

export default Recipe;
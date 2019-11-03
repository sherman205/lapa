import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import './Recipe.scss';

const Recipe = ({ data }) => {
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const date = markdownRemark.frontmatter.date
    const content = markdownRemark.frontmatter.content
    const serving_size= markdownRemark.frontmatter.servingSize
    const total_time = markdownRemark.frontmatter.totalTime
    const ingredients = markdownRemark.frontmatter.ingredients
    const instructions = markdownRemark.frontmatter.instructions
    console.log("hi there")
    console.log(title)
    console.log(data)
    const img = markdownRemark.frontmatter.recipeImage.childImageSharp.fluid;
    return (
        <div className="recipe">
          <div className="recipe-left">
            <NavSmall />
            <div className="recipe-content">
              <p className="title playfair">{title}</p>
              <div className="date nexaLight">{date}</div>
              <div className="content">{content}</div>
              <div start="md" className="recipe-info">
                <div className="pre-recipe-info">Serving Size: {serving_size}</div>
                <div className="pre-recipe-info">Total Time: {total_time}</div>
                <br></br>
                <div className="recipe-ingredients">
                  <span className="info-title playfair">Ingredients</span>
                  <div>{ingredients}</div>
                </div>
                <div className="recipe-instructions">
                  <span className="info-title playfair">Instructions</span>
                  <div>{instructions}</div>
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
  query($pathSlug: String!) {
    markdownRemark(
        frontmatter: { path: { eq: $pathSlug } }
    ) 
    {
        frontmatter {
            title
            date
            content
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
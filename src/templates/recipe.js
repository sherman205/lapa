import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import './recipe.scss';

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    const width = typeof window !== `undefined` ? window.innerWidth : null;
    this.state = {
        width: width,
        isLoaded: false
    };
  };

  componentDidMount = () => {
    this.setState({ isLoaded: true });
  }

  componentWillMount = () => {
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
  }

  componentWillUnmount = () => {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  }

  handleWindowSizeChange = () => {
      const width = typeof window !== `undefined` ? window.innerWidth : null;
      this.setState({ width: width });
  }

  render() {
    const { width, isLoaded } = this.state;
    const { data } = this.props;
    const { markdownRemark } = data;
    const { title,
            date,
            servingSize,
            totalTime,
            list_1,
            list_2,
            ingredients,
            instructions,
            ingredients_list_2,
            instructions_list_2 
          } = markdownRemark.frontmatter;
    const html = markdownRemark.html;
    const img = markdownRemark.frontmatter.recipeImage.childImageSharp.fluid;
    const isMobile = width <= 650;

    if (isLoaded) {
      if (!isMobile) {
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
                    {list_1 && (
                      <h4>{list_1}</h4>
                    )}
                    <ul>
                      {ingredients && ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                    </ul>
                    {list_2 && (
                      <h4>{list_2}</h4>
                    )}
                    {ingredients_list_2 && (
                      <ul>
                        {ingredients_list_2 && ingredients_list_2.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                      </ul>
                    )}
                  </div>
                  <div className="recipe-instructions">
                    <span className="info-title playfair">Instructions</span>
                    {list_1 && (
                      <h4>{list_1}</h4>
                    )}
                    <ol>
                      {instructions && instructions.map((instruction, i) => <li key={i}>{i+1}. {instruction}</li>)}
                    </ol>
                    {list_2 && (
                      <h4>{list_2}</h4>
                    )}
                    {instructions_list_2 && (
                      <ol>
                        {instructions_list_2 && instructions_list_2.map((instruction, i) => <li key={i}>{instruction}</li>)}
                      </ol>
                    )}
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
      else {
        return (
          <>
            <NavMobile />
            <div className="recipe-mobile">
              <div className="recipe-preview-mobile">
                <Img className="image-1x1" fluid={img} alt="{title}" />
                <p className="title playfair">{title}</p>
                <div className="date nexaLight">{date}</div>
                <div className="content" dangerouslySetInnerHTML={{ __html: html }}  />
                <div className="recipe-info">
                  <div className="pre-recipe-info">Serving Size: {servingSize}</div>
                  <div className="pre-recipe-info">Total Time: {totalTime}</div>
                  <br></br>
                  <span className="info-title playfair">Ingredients</span>
                  <ul>
                    {ingredients && ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                  </ul>
                  <span className="info-title playfair">Instructions</span>
                  <ol>
                    {instructions && instructions.map((instruction, i) => <li key={i}>{i+1}. {instruction}</li>)}
                  </ol>
                </div>
                <div className="tag-us">
                  Did you try out this recipe? Tag @lapa.eats on Instagram
              </div>
              </div>
              <FooterSmall />
            </div>
          </>
        );
      }
    }
    else {
      return(
        <p>Loading...</p>
      );
    }
  }
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
        date
        servingSize
        totalTime
        list_1
        list_2
        ingredients
        instructions
        ingredients_list_2
        instructions_list_2
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

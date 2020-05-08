import React, {Component} from 'react';
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import SEO from '../components/seo';
import '../styles/recipes.scss';

export default class Recipes extends Component {
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

    generateCard = (category, img) => {
        return (
            <Link to={`/results/${category}`}>
                <div className="wrapper">
                    <p>{category}</p>
                    <div className="dotted-bar"></div>
                    <Img className="image" fluid={img} alt="Category" />
                </div>
            </Link>
        );
    }

    render() {
        const { width, isLoaded } = this.state;
        const { data } = this.props;
        const { title, breakfastImg, appsImg, saladImg, soupsImg, entreesImg, heirloomImg, drinksImg, dessertsImg } = (data.categories.edges)[0].node.frontmatter;
        const isMobile = width <= 650;
        const categories = {
            breakfast: breakfastImg.childImageSharp.fluid,
            appetizers: appsImg.childImageSharp.fluid,
            salad: saladImg.childImageSharp.fluid,
            soup: soupsImg.childImageSharp.fluid,
            entrees: entreesImg.childImageSharp.fluid,
            heirloom: heirloomImg.childImageSharp.fluid,
            drinks: drinksImg.childImageSharp.fluid,
            dessert: dessertsImg.childImageSharp.fluid,
        }

        if (isLoaded) {
            if (!isMobile) {
                return (
                    <>
                        <SEO title="Recipes"/>
                        <NavSmall />
                        <div className="recipe-categories">
                            <div className="categories-intro playfair">
                                <div>{title}</div>
                            </div>
                            <div className="categories">
                                {Object.entries(categories).map(([key, value]) => (
                                    <div className="card" key={key}>
                                        {this.generateCard(key, value)}
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
                        <SEO title="Recipes"/>
                        <NavMobile />
                        <div className="recipe-categories-mobile">
                            <div className="categories-intro playfair">
                                <div>{title}</div>
                            </div>
                            <div className="categories">
                                {Object.entries(categories).map(([key, value]) => (
                                    <div className="card" key={key}>
                                        {this.generateCard(key, value)}
                                    </div>
                                ))}
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

export const pageQuery = graphql`
  {
    categories: allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/categories/" } })
    {
      edges {
        node {
          frontmatter {
            title
            breakfastImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            appsImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            saladImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            soupsImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            entreesImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            heirloomImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            drinksImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dessertsImg{
                childImageSharp {
                    fluid(maxWidth: 2000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
        }
      }
    }
  }
`;

import React, { Component } from 'react';
import { Link } from "gatsby";
import Img from "gatsby-image";
import './styles/recipePreview.scss';

export default class RecipePreview extends Component {
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
        const { node } = this.props;
        const img = node.frontmatter.featuredImage.childImageSharp.fluid;
        const isMobile = width <= 650;

        if (isLoaded) {
            if (!isMobile) {
                return (
                    <div className="recipePreview">
                        <div className="image">
                            <Link to={node.fields.slug}>
                                <Img className="image-1x1" fluid={img} alt="Recipe" />
                            </Link>
                        </div>
                        <div className="details">
                            <p className="title playfair">{node.frontmatter.title}</p>
                            <p className="date nexaLight">{node.frontmatter.date}</p>
                            <div className="border" />
                            <p className="description nexaBold">{node.frontmatter.description}</p>
                            <div className="content" dangerouslySetInnerHTML={{ __html: node.html }} />
                            <Link to={node.fields.slug}>
                                <p className="more nexaBold">...</p>
                            </Link>
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="recipe-preview-mobile">
                        <Link to={node.fields.slug}>
                            <Img className="image-1x1" fluid={img} alt="Recipe" />
                            <p className="title playfair">{node.frontmatter.title}</p>
                            <p className="date nexaLight">{node.frontmatter.date}</p>
                        </Link>
                        <div className="border" />
                    </div>
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

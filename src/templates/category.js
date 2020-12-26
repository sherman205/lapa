import React, { Component } from "react";
import { graphql } from "gatsby";
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import RecipePreview from '../components/recipePreview';
import SEO from '../components/seo';
import './category.scss';

export default class Category extends Component {
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
    const { data, pageContext } = this.props;
    const { tag } = pageContext;
    const isMobile = width <= 650;

    const seoTag = "Your search results for " + tag;
    
    if (isLoaded) {
      if (!isMobile) {
        return (
          <>
            <SEO title={seoTag} pathname={this.props.location.pathname}/>
            <NavSmall />
            <div className="recipe-filtered">
              <div className="results">
                <p className="search nexaLight">your search results for</p>
                <p className="query playfair">{tag}</p>
                <ResultCards data={data} />
              </div>
            </div>
            <FooterSmall />
          </>
        );
      }
      else {
        return (
          <>
            <SEO title={seoTag} pathname={this.props.location.pathname}/>
            <NavMobile />
            <div className="recipe-filtered-mobile">
              <div className="results">
                <p className="search nexaLight">your search results for</p>
                <p className="query playfair">{tag}</p>
                <ResultCards data={data} />
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

const ResultCards = ( {data} ) => {
  return (
    <div className="row">
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const { title } = node.frontmatter;
        return (
          <div className="item" key={title}>
            <RecipePreview node={node} />
          </div>
        )
      })}
    </div>
  );
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            date
            description
            featuredImage {
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
`

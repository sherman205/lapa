import React, {Component} from 'react';
import { Link, graphql } from "gatsby";
import NavSmall from '../components/navSmall';
import NavMobile from '../components/navMobile';
import FooterSmall from '../components/footerSmall';
import Root from '../components/root';
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

    generateCard = (category) => {
        return (
            <Link to={`/results/${category}`}>
                <div className="wrapper">
                    <p>{category}</p>
                    <div className="dotted-bar"></div>
                    {/* <img className="image" src={CONSTANTS.BASE_URL + category.image} alt="Category" /> */}
                </div>
            </Link>
        );
    }

    render() {
        const { width, isLoaded } = this.state;
        const { data } = this.props;
        const isMobile = width <= 650;
        const categories = ["breakfast", "appetizers", "salad", "soup", "entrees", "heirloom", "drinks", "dessert"];

        if (isLoaded) {
            if (!isMobile) {
                return (
                    <>
                        <Root metadata={data.metadata.siteMetadata} />
                        <NavSmall />
                        <div className="recipe-categories">
                            <div className="categories-intro playfair">
                                <div>What are you craving?</div>
                            </div>
                            <div className="categories">
                                {categories.map((category) => (
                                    <div className="card" key={category}>
                                        {this.generateCard(category)}
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
                        <Root metadata={data.metadata.siteMetadata} />
                        <NavMobile />
                        <div className="recipe-categories-mobile">
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

const generateCard = (category) => {
    return (
        <Link to={`/results/${category}`}>
            <div className="wrapper">
                <p>{category}</p>
                <div className="dotted-bar"></div>
                {/* <img className="image" src={CONSTANTS.BASE_URL + category.image} alt="Category" /> */}
            </div>
        </Link>
    );
}

export const pageQuery = graphql`
  {
    metadata: site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

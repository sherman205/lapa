import React from 'react';
import Img from "gatsby-image";
import { graphql } from "gatsby";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import '../styles/about.scss';

const About = ({data}) => {
    const title = (data.allMarkdownRemark.edges)[0].node.frontmatter.title;
    const intro = (data.allMarkdownRemark.edges)[0].node.frontmatter.intro;
    const whoWeAre = (data.allMarkdownRemark.edges)[0].node.frontmatter.whoWeAre;
    const whatIsLapa = (data.allMarkdownRemark.edges)[0].node.frontmatter.whatIsLapa;
    const aboutSite = (data.allMarkdownRemark.edges)[0].node.frontmatter.aboutSite;
    const img = (data.allMarkdownRemark.edges)[0].node.frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <div className="about">
            <div className="about-left">
                <NavSmall />
                <div className="about-content">
                    <p className="title playfair">{title}</p>
                    <div>{intro}</div>
                    <h3>Who We Are</h3>
                    <div>{whoWeAre}</div>
                    <h3>What Is Lapa</h3>
                    <div>{whatIsLapa}</div>
                    <h3>The Site And Beyond</h3>
                    <div>{aboutSite}</div>
                </div>
                <FooterSmall />
            </div>
            <div className="about-right">
                <Img className="img" fluid={img} alt="About" />
            </div>
        </div>
    );
}

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            intro
            whoWeAre
            whatIsLapa
            aboutSite
            featuredImage{
                childImageSharp {
                    fluid {
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

export default About;
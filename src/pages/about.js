import React from 'react';
import Img from "gatsby-image";
import { graphql } from "gatsby";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import '../styles/about.scss';

const About = ({data}) => {
    const { title } = (data.allMarkdownRemark.edges)[0].node.frontmatter;
    const img = (data.allMarkdownRemark.edges)[0].node.frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <div className="about">
            <div className="about-left">
                <NavSmall />
                <div className="about-content">
                    <p className="title playfair">{title}</p>
                    <div dangerouslySetInnerHTML={{ __html: (data.allMarkdownRemark.edges)[0].node.html }} />
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
    allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/about/" } })
    {
      edges {
        node {
          html
          frontmatter {
            title
            path
            date
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
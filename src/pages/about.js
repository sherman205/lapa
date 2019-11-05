import React from 'react';
import Img from "gatsby-image";
import { graphql } from "gatsby";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import Root from '../components/root';
import '../styles/about.scss';

const About = ({data}) => {
    const { title } = (data.about.edges)[0].node.frontmatter;
    const img = (data.about.edges)[0].node.frontmatter.featuredImage.childImageSharp.fluid;

    return (
      <>
        <Root metadata={data.metadata.siteMetadata} />
        <div className="about">
            <div className="about-left">
                <NavSmall />
                <div className="about-content">
                    <p className="title playfair">{title}</p>
                    <div dangerouslySetInnerHTML={{ __html: (data.about.edges)[0].node.html }} />
                </div>
                <FooterSmall />
            </div>
            <div className="about-right">
                <Img className="img" fluid={img} alt="About" />
            </div>
        </div>
      </>
    );
}

export const query = graphql`
{
  about: allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/about/" } })
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
  metadata: site {
    siteMetadata {
      title
      description
      }
    }
  }
`;

export default About;
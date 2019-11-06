import React, { Component } from 'react';
// import { isMobile } from "react-device-detect";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import NavSmall from '../components/navSmall';
import FooterSmall from '../components/footerSmall';
import NavMobile from '../components/navMobile';
import Root from '../components/root';
import '../styles/about.scss';

export default class About extends Component {
  constructor(props) {
      super(props);
      const width = typeof window !== `undefined` ? window.innerWidth : null;
      this.state = {
          width: width
      };
  };

  componentWillMount = () => {
      window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount = () => {
      window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
  };

  render() {
      const { width } = this.state;
      const { data } = this.props;
      const { title, intro } = (data.about.edges)[0].node.frontmatter;
      const img = (data.about.edges)[0].node.frontmatter.featuredImage.childImageSharp.fluid;
      const isMobile = width <= 650;

      if (!isMobile) {
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
      else {
        return (
          <>
            <Root metadata={data.metadata.siteMetadata} />
            <NavMobile />
            <div className="mobile-about">
                <div className="about-content">
                  <p className="header playfair">{title}</p>
                  <div>{intro}</div>
                  <Img className="img" fluid={img} alt="About" />
                  <div dangerouslySetInnerHTML={{ __html: (data.about.edges)[0].node.html }} />
                </div>
                <FooterSmall />
            </div>
          </>
        );
      }
  }
}

// const About = ({data}) => {
//     const { title, intro } = (data.about.edges)[0].node.frontmatter;
//     const img = (data.about.edges)[0].node.frontmatter.featuredImage.childImageSharp.fluid;

//     if (!isMobile) {
//       return (
//         <>
//           <Root metadata={data.metadata.siteMetadata} />
//           <div className="about">
//               <div className="about-left">
//                   <NavSmall />
//                   <div className="about-content">
//                       <p className="title playfair">{title}</p>
//                       <div dangerouslySetInnerHTML={{ __html: (data.about.edges)[0].node.html }} />
//                   </div>
//                   <FooterSmall />
//               </div>
//               <div className="about-right">
//                   <Img className="img" fluid={img} alt="About" />
//               </div>
//           </div>
//         </>
//       );
//     }
//   else {
//     return (
//       <>
//         <Root metadata={data.metadata.siteMetadata} />
//         <NavMobile />
//         <div className="mobile-about">
//             <div className="about-content">
//               <p className="header playfair">{title}</p>
//               <div>{intro}</div>
//               <Img className="img" fluid={img} alt="About" />
//               <div dangerouslySetInnerHTML={{ __html: (data.about.edges)[0].node.html }} />
//             </div>
//             <FooterSmall />
//         </div>
//       </>
//     );
//   }  
// }

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
            intro
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

// export default About;
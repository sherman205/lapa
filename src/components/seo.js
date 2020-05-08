import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import favicon from '../images/favicon-lapa.png';

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);

  const pageTitle = `${title} | ${site.siteMetadata.title}`;
  const pageDescription = description || site.siteMetadata.description;

  return (
    <Helmet title={pageTitle} titleTemplate={site.siteMetadata.titleTemplate}>
      <meta name="description" content={pageDescription} />
      {title && <meta property="og:title" content={title} />}
      <meta property="og:description" content={pageDescription} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
      }
    }
  }
`

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import favicon from '../images/favicon-lapa.png';

const SEO = ({ title, description, pathname }) => {
  const { site } = useStaticQuery(query);

  const overrideTemplate = pathname ? true : false;
  const pageTitle = `${title} | ${site.siteMetadata.title}`;
  const pageDescription = description || site.siteMetadata.description;
  const canonical = pathname ? `${site.siteMetadata.url}${pathname}` : null;

  return (
    <Helmet 
      title={pageTitle}
      titleTemplate={overrideTemplate ? `%s` : `%s · ${site.siteMetadata.titleTemplate}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
    >
        <meta name="description" content={pageDescription} />
        {pageTitle && <meta property="og:title" content={pageTitle} />}
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content='website' />
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
        url
      }
    }
  }
`

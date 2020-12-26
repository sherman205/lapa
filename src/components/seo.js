import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, pathname, image }) => {
  const { site } = useStaticQuery(query);

  const overrideTemplate = pathname ? true : false;
  const pageTitle = `${title} | ${site.siteMetadata.title}`;
  const canonical = pathname ? `${site.siteMetadata.url}${pathname}` : null;
  const pageImage = `${site.siteMetadata.url}${image || site.siteMetadata.image}`;

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
        <meta property="og:type" content='website' />
        <meta name="image" content={pageImage} />

        {canonical && <meta property="og:url" content={canonical} />}
        {pageTitle && <meta property="og:title" content={pageTitle} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        url
        image
      }
    }
  }
`

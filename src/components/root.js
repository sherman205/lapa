import React from 'react';
import { Helmet } from 'react-helmet'
import favicon from '../images/favicon-lapa.png';

const Root = ({ metadata }) => (
    <Helmet>
      <html lang="en" />
      <title itemProp="name" lang="en">
        {metadata.title}
      </title>
      <link rel="shortcut icon" href={favicon} />
      <meta name="description" content={metadata.description} />
      <meta itemProp="name" content={metadata.title} />
      <meta itemProp="description" content={metadata.description} />
    </Helmet>
  );
  
  export default Root;
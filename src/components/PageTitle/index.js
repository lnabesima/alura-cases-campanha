import React from 'react';
import Head from 'next/head';

const PageTitle = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
};

export default PageTitle;

import React from 'react';
import Head from 'next/head';
import Root from './Root';
import Footer from './Footer';

const TemplatePage = ({ page: data }) => (
  <Root>
    <Head>
      <title>commerce</title>
    </Head>
    <div className="py-5 my-5 text-center" style={{minHeight:'100vh'}}>
      <h4 className="mt-8 py-5">{ data.message }</h4>
    </div>
    <Footer />
  </Root>
)

export default TemplatePage;
import React from 'react';
import Head from 'next/head';
import Root from '../../components/common/Root';
import Footer from '../../components/common/Footer';
import ShippingReturns from '../../components/help/shippingReturns';

const ShippingAndReturns = () => (
  <Root transparentHeader={false}>
    <Head>
      <title>ALLES - Shipping & Returns</title>
    </Head>
    <ShippingReturns />
    <Footer />
  </Root>
);

export default ShippingAndReturns;

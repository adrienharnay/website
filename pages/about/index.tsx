import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import MainLayout from '../../layouts/main-layout/MainLayout';

const AboutPage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainLayout>
        <div>About</div>
      </MainLayout>
    </>
  );
};

export default AboutPage;

import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import MainLayout from '../../layouts/main-layout/MainLayout';

const LinksPage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <MainLayout>
        <div>Links</div>
      </MainLayout>
    </>
  );
};

export default LinksPage;

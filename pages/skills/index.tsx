import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import MainLayout from '../../components/layouts/main-layout/MainLayout';

const SkillsPage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainLayout>
        <div>Skills</div>
      </MainLayout>
    </>
  );
};

export default SkillsPage;

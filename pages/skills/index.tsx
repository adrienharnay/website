import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import MainLayout from '../../layouts/main-layout/MainLayout';

const SkillsPage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <MainLayout>
        <div>Skills</div>
      </MainLayout>
    </>
  );
};

export default SkillsPage;
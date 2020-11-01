import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import BioSection from './components/BioSection';

const SkillsPage: FunctionComponent = () => {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Skills</title>
      </Head>
      <MainLayout>
        <BioSection />
      </MainLayout>
    </>
  );
};

export default SkillsPage;

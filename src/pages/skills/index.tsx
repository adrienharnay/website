import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import BioSection from './components/BioSection';
import SkillsShortSection from './components/SkillsShortSection';
import SkillsLongSection from './components/SkillsLongSection';

import styles from './index.module.scss';

const SkillsPage: FunctionComponent = () => {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Skills</title>
      </Head>
      <MainLayout>
        <div className={styles.container}>
          <BioSection />
          <SkillsShortSection />
          <SkillsLongSection />
        </div>
      </MainLayout>
    </>
  );
};

export default SkillsPage;

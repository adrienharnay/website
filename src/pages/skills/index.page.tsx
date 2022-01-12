import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import BioSection from './components/BioSection';
import SkillsShortSection from './components/SkillsShortSection';
import SkillsLongSection from './components/SkillsLongSection';

import styles from './index.module.scss';
import MetaTitle from 'src/components/meta/MetaTitle';
import MetaDescription from 'src/components/meta/MetaDescription';
import MetaImage from 'src/components/meta/MetaImage';
import ServicesSection from './components/ServicesSection';

const SkillsPage: FunctionComponent = () => {
  return (
    <>
      <MetaTitle title="Skills • Adrien Harnay" />
      <MetaDescription description="7 years as a JavaScript developer. 6 years with React and React Native. Lead / Staff Frontend Engineer for 4 years. I am available for contract work!" />
      <MetaImage src="/images/posts/laptop-code.jpeg" />
      <MainLayout>
        <div className={styles.container}>
          <BioSection />
          <ServicesSection />
          <SkillsShortSection />
          <SkillsLongSection />
        </div>
      </MainLayout>
    </>
  );
};

export default SkillsPage;

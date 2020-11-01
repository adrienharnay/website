import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import BioSection from './components/BioSection';
import SkillsShortSection from './components/SkillsShortSection';
import SkillsLongSection from './components/SkillsLongSection';

import styles from './index.module.scss';
import MetaTitle from 'src/components/meta/MetaTitle';
import MetaDescription from 'src/components/meta/MetaDescription';
import MetaImage from 'src/components/meta/MetaImage';

const SkillsPage: FunctionComponent = () => {
  return (
    <>
      <MetaTitle title="Skills • Adrien Harnay" />
      <MetaDescription description="5 years experience as a JavaScript developer, 4 years with React, Lead Front-End Engineer for 3 years. I am available for contract work!" />
      <MetaImage src="/images/posts/laptop-code.jpeg" />
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

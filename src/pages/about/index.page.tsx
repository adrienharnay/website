import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import MarkdownPage from 'src/components/markdown-page/MarkdownPage';

import { getAboutData } from 'src/utils/about';

export const getStaticProps = async () => {
  const about = await getAboutData();
  return {
    props: {
      about,
    },
  };
};

type AboutPageProps = {
  about: UnwrapPromise<ReturnType<typeof getAboutData>>;
};

const AboutPage: FunctionComponent<AboutPageProps> = ({ about }) => {
  return (
    <MainLayout>
      <MarkdownPage {...about} />
    </MainLayout>
  );
};

export default AboutPage;

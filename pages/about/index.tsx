import React, { FunctionComponent } from 'react';

import MainLayout from 'layouts/main-layout/MainLayout';

import MarkdownPage from 'components/markdown-page/MarkdownPage';

import { getAboutData } from 'utils/about';

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

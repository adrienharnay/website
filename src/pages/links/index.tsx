import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import MarkdownPage from 'src/components/markdown-page/MarkdownPage';

import { getLinksData } from 'src/utils/links';

export const getStaticProps = async () => {
  const links = await getLinksData();
  return {
    props: {
      links,
    },
  };
};

type LinksPageProps = {
  links: UnwrapPromise<ReturnType<typeof getLinksData>>;
};

const LinksPage: FunctionComponent<LinksPageProps> = ({ links }) => {
  return (
    <MainLayout>
      <MarkdownPage {...links} />
    </MainLayout>
  );
};

export default LinksPage;

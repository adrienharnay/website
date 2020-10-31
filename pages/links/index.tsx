import React, { FunctionComponent } from 'react';

import MainLayout from '../../layouts/main-layout/MainLayout';
import MarkdownPage from '../../components/markdown-page/MarkdownPage';

import { getLinksData } from '../../utils/links';

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

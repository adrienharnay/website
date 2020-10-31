import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import MainLayout from '../../layouts/main-layout/MainLayout';
import { getLinksData } from '../../utils/links';

import styles from '../[postId]/index.module.scss';

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
    <>
      <Head>
        <title>Links</title>
      </Head>
      <MainLayout>
        <section className={`${styles.content} ${styles.noImg}`}>
          <div
            className={styles.markdownContainer}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: links.html }}
          />
        </section>
      </MainLayout>
    </>
  );
};

export default LinksPage;

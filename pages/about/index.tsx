import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import MainLayout from '../../layouts/main-layout/MainLayout';
import { getAboutData } from '../../utils/about';

import styles from '../[postId]/index.module.scss';

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
    <>
      <Head>
        <title>About</title>
      </Head>
      <MainLayout>
        <section className={`${styles.content} ${styles.noImg}`}>
          <div
            className={styles.markdownContainer}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: about.html }}
          />
        </section>
      </MainLayout>
    </>
  );
};

export default AboutPage;

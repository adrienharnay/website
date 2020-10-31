import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import MainLayout from '../../layouts/main-layout/MainLayout';
import { getAllPostsIds, getPostData } from '../../utils/posts';

import styles from './index.module.scss';

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();
  console.log(paths);

  return {
    paths: paths.map((path) => ({
      params: {
        postId: path,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const post = await getPostData(params.postId);
  return {
    props: {
      post,
    },
  };
};

type PostPageProps = {
  post: UnwrapPromise<ReturnType<typeof getPostData>>;
};

const PostPage: FunctionComponent<PostPageProps> = ({
  post: { date, title, cover, html },
}) => {
  const Date = date && <time className={styles.date}>{date}</time>;
  const Metadata = Date && (
    <section className={styles.metadata}>{Date}</section>
  );
  const Cover = cover && (
    <div className={styles.coverContainer}>
      <Image src={cover} width={1500} height={1000} />
    </div>
  );
  // const MetaCover = cover && (
  //   <MetaImage src={cover.childImageSharp.fluid.src} />
  // );

  return (
    <MainLayout>
      {/* <MetaTitle title={title} />
      <MetaDescription description={excerpt} />
      {MetaCover} */}
      <header className={styles.header}>
        {Metadata}
        <h1 className={styles.title}>{title}</h1>
      </header>
      {Cover}
      <section className={`${styles.content} ${!cover ? styles.noImg : ''}`}>
        <div
          className={styles.markdownContainer}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </MainLayout>
  );
};

export default PostPage;

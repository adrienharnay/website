import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import MetaTitle from 'src/components/meta/MetaTitle';
import MetaDescription from 'src/components/meta/MetaDescription';
import MetaImage from 'src/components/meta/MetaImage';

import styles from './MarkdownPage.module.scss';

type MarkdownPageProps = {
  date?: string;
  cover?: string;
  title: string;
  excerpt: string;
  html: string;
};

const MarkdownPage: FunctionComponent<MarkdownPageProps> = ({
  date,
  cover,
  title,
  excerpt,
  html,
}) => {
  const Date = date && <time>{date}</time>;
  const Metadata = Date && (
    <section className={styles.metadata}>{Date}</section>
  );
  const Cover = cover && (
    <div className={styles.coverContainer}>
      <Image
        src={cover}
        width={1500}
        height={1000}
        alt={cover.split('/').slice(-1)[0].split('.')[0]}
      />
    </div>
  );
  const MetaCover = cover && <MetaImage src={cover} />;

  return (
    <div>
      <MetaTitle title={`${title} • Adrien Harnay`} />
      <MetaDescription description={excerpt} />
      {MetaCover}
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
    </div>
  );
};

export default MarkdownPage;

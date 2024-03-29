import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import styles from './index.module.scss';

import StrangerThingsGif from 'public/images/pages/404/stranger-things.gif';

const NotFoundPage = () => (
  <MainLayout>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={StrangerThingsGif}
          width={480}
          height={236}
          alt="mike found pudding"
        />
      </div>
      <p>
        Unfortunately, Dustin didn&#39;t find the page you were looking for.
      </p>
      <p>
        <span>Let&#39;s get you back </span>
        <Link href="/">home</Link>
        <span>!</span>
      </p>
    </div>
  </MainLayout>
);

export default NotFoundPage;

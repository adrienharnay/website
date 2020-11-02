import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavLinks from './common/NavLinks';
import SocialMediaIcons from './common/SocialMediaIcons';

import styles from './PostsListHeader.module.scss';

const PostsListHeader: FunctionComponent = () => {
  return (
    <header className={styles.container}>
      <div className={styles.coverContainer}>
        <Image
          src="/images/layouts/main-layout-cover.jpg"
          priority
          layout="responsive"
          width={2738}
          height={1779}
          className={styles.cover}
          alt="sky full of stars"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Adrien Harnay</h1>
        <h2 className={styles.subTitle}>
          <div>Front-end developer working with React & React Native.</div>
          <div>Passionate about technology. Drummer.</div>
          <Link href="/skills">
            <a className={styles.link}>Available for contract work.</a>
          </Link>
        </h2>
      </div>
      <nav className={styles.navContainer}>
        <div className={styles.nav}>
          <div>
            <NavLinks />
          </div>
          <div>
            <SocialMediaIcons />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PostsListHeader;

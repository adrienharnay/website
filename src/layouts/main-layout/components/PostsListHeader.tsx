import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import NavLinks from './common/NavLinks';
import SocialMediaIcons from './common/SocialMediaIcons';

import styles from './PostsListHeader.module.scss';

const PostsListHeader: FunctionComponent = () => {
  return (
    <header className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/layouts/main-layout-cover.jpg"
          alt="sky full of stars"
          priority
          quality={85}
          layout="fill"
        />
        <div className={styles.veil} />
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

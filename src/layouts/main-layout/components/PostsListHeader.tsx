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
          src="https://images.unsplash.com/photo-1532562066470-f6f5f6d47924?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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

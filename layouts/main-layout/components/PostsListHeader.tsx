import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import NavLinks from './common/NavLinks';
import SocialMediaIcons from './common/SocialMediaIcons';

import styles from './PostsListHeader.module.scss';

const HOME_TITLE = 'Adrien Harnay';
const HOME_SUB_TILE =
  'Front-end developer working with React / React Native.\nPassionate about technology. Drummer.';

const PostsListHeader: FunctionComponent = () => {
  const Title = HOME_TITLE;
  const SubTitle = HOME_SUB_TILE;

  return (
    <header className={styles.container}>
      <div className={styles.coverContainer}>
        <Image
          src="/images/layouts/main-layout-cover.jpg"
          width={2738}
          height={1779}
          className={styles.cover}
          priority
          alt="cover"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{Title}</h1>
        <h2 className={styles.subTitle}>{SubTitle}</h2>
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

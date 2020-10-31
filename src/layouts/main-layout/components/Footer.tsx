import React, { FunctionComponent } from 'react';

import SocialMediaIcons from './common/SocialMediaIcons';

import styles from './Footer.module.scss';

const YEAR = new Date().getFullYear();

const Footer: FunctionComponent = () => (
  <footer className={styles.container}>
    <div className={styles.content}>
      <div className={styles.copyright}>Adrien Harnay © {YEAR}</div>
      <SocialMediaIcons />
    </div>
  </footer>
);

export default Footer;

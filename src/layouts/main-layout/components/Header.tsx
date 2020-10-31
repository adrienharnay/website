import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import NavLinks from './common/NavLinks';

import styles from './Header.module.scss';

const HOME_LINK_NAME = 'Adrien Harnay';

const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.homeLinkDiv}>
        <Link href="/">
          <a className={styles.homeLink}>{HOME_LINK_NAME}</a>
        </Link>
      </div>
      <NavLinks />
    </nav>
  </header>
);

export default Header;

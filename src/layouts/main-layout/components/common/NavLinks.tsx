import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import styles from './NavLinks.module.scss';

const LINKS = [
  {
    name: 'skills',
    path: '/skills',
  },
  {
    name: 'links',
    path: '/links',
  },
  {
    name: 'about',
    path: '/about',
  },
];

const NavLinks: FunctionComponent = () => {
  const Links = LINKS.map(({ name, path }) => (
    <span key={name} className={styles.linkDiv}>
      <Link href={path}>
        <a className={styles.link}>{name.toUpperCase()}</a>
      </Link>
    </span>
  ));

  return <div>{Links}</div>;
};

export default NavLinks;

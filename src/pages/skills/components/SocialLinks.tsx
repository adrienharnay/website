import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import styles from './SocialLinks.module.scss';

const SocialLinks: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      Please send work enquiries through my{' '}
      <Link href="mailto:adrien@harnay.me">email</Link>,{' '}
      <Link href="https://twitter.com/AdrienHarnay">Twitter</Link>, or{' '}
      <Link href="https://www.linkedin.com/in/adrien-harnay/">LinkedIn</Link>.
    </div>
  );
};

export default SocialLinks;

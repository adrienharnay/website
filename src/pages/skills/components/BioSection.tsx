import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './BioSection.module.scss';

const BioSection: FunctionComponent = () => {
  return (
    <section>
      <div className={styles.bioPictureContainer}>
        <div className={styles.pictureContainer}>
          <Image
            src="/images/pages/adrien.jpg"
            width={220}
            height={220}
            alt="Adrien Harnay"
            className={styles.picture}
          />
        </div>
        <div className={styles.bioContainer}>
          <div className={styles.name}>
            Adrien Harnay<span className={styles.separator}>,</span>{' '}
            <br className={styles.breakline} />
            <span className={styles.jobTitle}>Lead Front-End Engineer</span>
          </div>
          <div className={styles.bio}>
            5 years experience as a <b>JavaScript developer</b>
            <br />4 years experience with <b>React and React Native</b>
            <br />
            <b>Lead Front-End Engineer</b> for 3 years
            <br />
            <br />I have faced countless challenges while working on several
            different products, and I keep learning everyday. What I enjoy most
            is helping others grow as developers.
          </div>
        </div>
      </div>
      <div className={styles.plugContainer}>
        I am available for contract work. If you need:
        <ul className={styles.prestations}>
          <li>a MVP for your start-up;</li>
          <li>a new product for your organization;</li>
          <li>a new feature on your product;</li>
          <li>
            a formation on a new concept or technology with concrete examples
            and implementation;
          </li>
        </ul>
        Please reach out to me via{' '}
        <Link href="mailto:adrien@harnay.me">email</Link>,{' '}
        <Link href="https://twitter.com/AdrienHarnay">Twitter</Link>, or{' '}
        <Link href="https://www.linkedin.com/in/adrien-harnay/">LinkedIn</Link>.
      </div>
    </section>
  );
};

export default BioSection;

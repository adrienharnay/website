import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './BioSection.module.scss';
import SocialLinks from './SocialLinks';

const BioSection: FunctionComponent = () => {
  return (
    <section>
      <div className={styles.bioPictureContainer}>
        <div className={styles.pictureContainer}>
          <Image
            src="/images/pages/skills/adrien.jpg"
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
        I am available for contract work.
        <div className={styles.prestations}>
          <div>
            <div>
              <b>MVP</b> for your start-up
            </div>
          </div>
          <div>
            <div>
              <b>New product</b> for your organization
            </div>
          </div>
          <div>
            <div>
              <b>New feature</b> on your product
            </div>
          </div>
          <div>
            <div>
              Introduction of a <b>new technology or library</b> to your
              organization
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </section>
  );
};

export default BioSection;

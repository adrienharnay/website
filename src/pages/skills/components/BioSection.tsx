import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './BioSection.module.scss';
import SocialLinks from './SocialLinks';

import AdrienImage from 'public/images/pages/skills/adrien.jpg';

const BioSection: FunctionComponent = () => {
  return (
    <section>
      <div className={styles.bioPictureContainer}>
        <div className={styles.pictureContainer}>
          <Image
            src={AdrienImage}
            width={220}
            height={220}
            layout="fixed"
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
            7 years as a <b>JavaScript developer</b>
            <br />6 years with <b>React and React Native</b>
            <br />
            <b>Lead / Staff Frontend Engineer</b> for 4 years
            <br />
            <br />
            Throughout my career, I have worked on many projects and faced
            various challenges. Today, I want to{' '}
            <b>
              share my expertise with you and help your company get a head start
            </b>
            .
          </div>
        </div>
      </div>
      <div className={styles.plugContainer}>
        <b>I am available for contract work.</b>
        <div className={styles.services}>
          <div>
            <div>
              <b>MVP</b> for your start-up
            </div>
          </div>
          <div>
            <div>
              <b>New features</b> on your product
            </div>
          </div>
          <div>
            <div>
              <b>New project</b> for your organization
            </div>
          </div>
          <div>
            <div>
              <b>Mentor your team</b> through a migration
            </div>
          </div>
        </div>
      </div>
      <SocialLinks />
    </section>
  );
};

export default BioSection;

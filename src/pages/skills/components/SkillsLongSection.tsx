import React from 'react';

import styles from './SkillsLongSection.module.scss';

const SkillsLongSection = () => {
  return (
    <section>
      <h2 className={styles.title}>In depth</h2>
      <p>
        <em>
          Each skill listed here has been used in a professional setting, for
          several years for the vast majority. I like to try new things on side
          projects so that I can later on introduce them in my work, but I stick
          to my area of expertise when working on professional projects.
        </em>
      </p>
    </section>
  );
};

export default SkillsLongSection;

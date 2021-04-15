import Image from 'next/image';
import React, { FunctionComponent } from 'react';

import prestations from '../prestations.json';
import ContactMeGradientButton from './ContactMeGradientButton';

import styles from './PrestationsSection.module.scss';

const PrestationsSection: FunctionComponent = () => {
  return (
    <section>
      <h2 className={styles.title}>Most common prestations</h2>
      <div>
        {prestations.map((prestation) => (
          <div key={prestation.title} className={styles.prestation}>
            <div className={styles.prestationHeader}>
              <div className={styles.prestationTitle}>{prestation.title}</div>
              <div className={styles.skills}>
                {prestation.skills.map((skill) => (
                  <Image
                    key={skill}
                    src={skill}
                    width={26}
                    height={26}
                    alt={skill.split('/').slice(-1)[0].split('.')[0]}
                  />
                ))}
              </div>
            </div>
            <div
              className={styles.prestationDescription}
              dangerouslySetInnerHTML={{ __html: prestation.description }}
            />
            <div className={styles.featuresSection}>
              <ul>
                {prestation.features.map((feature) => (
                  <li key={feature}>
                    <div className={styles.icon}>
                      <Image
                        src="/images/pages/skills/check-mark.svg"
                        width={18}
                        height={13}
                        alt="check-mark"
                      />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
              <div>
                <ContactMeGradientButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrestationsSection;

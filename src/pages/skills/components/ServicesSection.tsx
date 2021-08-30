import Image from 'next/image';
import React, { FunctionComponent } from 'react';

import services from '../services.json';
import ContactMeGradientButton from './ContactMeGradientButton';

import styles from './ServicesSection.module.scss';

import CheckMarkIcon from 'public/images/pages/skills/check-mark.svg';

const ServicesSection: FunctionComponent = () => {
  return (
    <section>
      <h2 className={styles.title}>Most common services</h2>
      <div>
        {services.map((service) => (
          <div key={service.title} className={styles.service}>
            <div className={styles.serviceHeader}>
              <div className={styles.serviceTitle}>{service.title}</div>
              <div className={styles.skills}>
                {service.skills.map((skill) => (
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
              className={styles.serviceDescription}
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
            <div className={styles.featuresSection}>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <div className={styles.icon}>
                      <Image
                        src={CheckMarkIcon}
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

export default ServicesSection;

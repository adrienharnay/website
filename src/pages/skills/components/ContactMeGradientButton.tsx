import React from 'react';

import styles from './ContactMeGradientButton.module.scss';

const ContactMeGradientButton = () => {
  return (
    <a
      className={styles.link}
      href="mailto:adrien@harnay.me?subject=[Project proposition]&body=Hello and nice to meet you!%0D%0A%0D%0APlease fill the information you deem relevant so we can start discussing your project.%0D%0A%0D%0AName:%0D%0ASize of the company:%0D%0APhone number (if you wish me to call you back):%0D%0ADescription of the project:"
    >
      <button className={styles.button}>Contact me</button>
    </a>
  );
};

export default ContactMeGradientButton;

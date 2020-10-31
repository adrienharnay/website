import React, { FunctionComponent } from 'react';

import styles from './Body.module.scss';

type BodyProps = {
  showHeader?: boolean;
};

const Body: FunctionComponent<BodyProps> = ({ children, showHeader }) => (
  <div className={`${styles.container} ${showHeader ? styles.showHeader : ''}`}>
    {children}
  </div>
);

export default Body;

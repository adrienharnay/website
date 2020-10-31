import React, { FunctionComponent } from 'react';

import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import PostsListHeader from './components/PostsListHeader';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  showHeader?: boolean;
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  showHeader,
}) => {
  const HeaderSection = showHeader ? <PostsListHeader /> : <Header />;

  return (
    <div className={styles.container}>
      <div>{HeaderSection}</div>
      <div className={styles.body}>
        <Body showHeader={showHeader}>{children}</Body>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

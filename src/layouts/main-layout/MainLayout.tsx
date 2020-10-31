import React, { FunctionComponent } from 'react';

import Body from './components/Body';
import Footer from './components/Footer';
import Head from './components/Head';
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
      <Head />
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

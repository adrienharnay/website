import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import MainLayout from '../layouts/main-layout/MainLayout';

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Adrien Harnay</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainLayout showHeader>
        <div>Home</div>
        <Link href="/skills">To skills</Link>
      </MainLayout>
    </>
  );
};

export default HomePage;

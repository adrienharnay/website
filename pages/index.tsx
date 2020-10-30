import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
      <Link href="/skills">To skills</Link>
    </>
  );
};

export default HomePage;

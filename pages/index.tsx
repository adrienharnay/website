import React, { FunctionComponent } from 'react';

import MainLayout from '../layouts/main-layout/MainLayout';
import PostCard from './home/components/PostCard';

import { getSortedPostsData } from '../utils/posts';

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

type HomePageProps = {
  posts: ReturnType<typeof getSortedPostsData>;
};

const HomePage: FunctionComponent<HomePageProps> = ({ posts }) => {
  return (
    <MainLayout showHeader>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </MainLayout>
  );
};

export default HomePage;

import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import PostCard from 'src/components/post-card/PostCard';

import { getSortedPostsData } from 'src/utils/posts';

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

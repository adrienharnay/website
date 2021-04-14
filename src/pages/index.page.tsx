import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import PostCard from 'src/components/post-card/PostCard';

import { getSortedPostsData } from 'src/utils/posts';

const availableForContractWorkPost: ReturnType<
  typeof getSortedPostsData
>[number] = {
  id: 'skills',
  cover: '/images/posts/laptop-code.jpeg',
  date: '',
  title: "I'm available for contract work!",
  excerpt:
    "Do you need to build a MVP for your start-up? A new project critical to your organization? Do you an app for your business but don't know where to start? Reach out to me!",
};

export const getStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts: [...posts, availableForContractWorkPost],
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

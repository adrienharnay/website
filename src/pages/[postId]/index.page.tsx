import React, { FunctionComponent } from 'react';

import MainLayout from 'src/layouts/main-layout/MainLayout';

import MarkdownPage from 'src/components/markdown-page/MarkdownPage';

import { getAllPostsIds, getPostData } from 'src/utils/posts';

export const getStaticPaths = async () => {
  const paths = getAllPostsIds();

  return {
    paths: paths.map((path) => ({
      params: {
        postId: path,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const post = await getPostData(params.postId);
  return {
    props: {
      post,
    },
  };
};

type PostPageProps = {
  post: UnwrapPromise<ReturnType<typeof getPostData>>;
};

const PostPage: FunctionComponent<PostPageProps> = ({ post }) => {
  return (
    <MainLayout>
      <MarkdownPage {...post} />
    </MainLayout>
  );
};

export default PostPage;

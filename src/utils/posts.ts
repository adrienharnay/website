import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { getSyntaxHighlightedHTMLFromMarkdown } from './markdown';

const postsDirectory = path.join(process.cwd(), 'posts');

type PostMetadata = {
  date: string;
  title: string;
  excerpt: string;
  cover: string;
};

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as PostMetadata),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostsIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  const { html, frontmatter } = await getSyntaxHighlightedHTMLFromMarkdown(
    fullPath,
  );

  return {
    id,
    html,
    ...(frontmatter as PostMetadata),
  };
};

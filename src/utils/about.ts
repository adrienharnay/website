import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { getHTMLFromMarkdown } from './markdown';

type AboutMetadata = {
  title: string;
  excerpt: string;
};

export const getAboutData = async () => {
  const fullPath = path.join(process.cwd(), 'src/pages/about/about.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    html: await getHTMLFromMarkdown(matterResult.content),
    ...(matterResult.data as AboutMetadata),
  };
};

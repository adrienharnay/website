import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { getHTMLFromMarkdown } from './markdown';

type LinksMetadata = {
  title: string;
  excerpt: string;
};

export const getLinksData = async () => {
  const fullPath = path.join(process.cwd(), 'src/pages/links/links.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    html: await getHTMLFromMarkdown(matterResult.content),
    ...(matterResult.data as LinksMetadata),
  };
};

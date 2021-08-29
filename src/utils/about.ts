import path from 'path';

import { getHTMLFromMarkdown } from './markdown';

type AboutMetadata = {
  title: string;
  excerpt: string;
};

export const getAboutData = async () => {
  const fullPath = path.join(process.cwd(), 'src/pages/about/about.md');

  const { html, frontmatter } = await getHTMLFromMarkdown(fullPath);

  return {
    html,
    ...(frontmatter as AboutMetadata),
  };
};

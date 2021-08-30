import path from 'path';

import { getHTMLFromMarkdown } from './markdown';

type LinksMetadata = {
  title: string;
  excerpt: string;
};

export const getLinksData = async () => {
  const fullPath = path.join(process.cwd(), 'src/pages/links/links.md');

  const { html, frontmatter } = await getHTMLFromMarkdown(fullPath);

  return {
    html,
    ...(frontmatter as LinksMetadata),
  };
};

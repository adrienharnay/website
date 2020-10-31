import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
// @ts-expect-error
import prism from 'remark-prism';
// @ts-expect-error
import slug from 'remark-slug';
// @ts-expect-error
import headings from 'remark-autolink-headings';

export const getLinksData = async () => {
  const fullPath = path.join(process.cwd(), 'pages/links/links.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(slug)
    .use(headings)
    .use(html)
    .use(prism)
    .process(matterResult.content);
  const content = processedContent.toString();

  return {
    html: content,
  };
};

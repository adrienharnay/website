import remark from 'remark';
import html from 'remark-html';
// @ts-expect-error
import prism from 'remark-prism';
// @ts-expect-error
import slug from 'remark-slug';
// @ts-expect-error
import headings from 'remark-autolink-headings';
// @ts-expect-error
import behead from 'remark-behead';

export const getSyntaxHighlightedHTMLFromMarkdown = async (content: string) => {
  const processedContent = await remark()
    .use(slug)
    .use(headings)
    .use(behead, { depth: 1 })
    .use(html)
    .use(prism)
    .process(content);

  return processedContent.toString();
};

export const getHTMLFromMarkdown = async (content: string) => {
  const processedContent = await remark()
    .use(slug)
    .use(headings)
    .use(html)
    .process(content);

  return processedContent.toString();
};

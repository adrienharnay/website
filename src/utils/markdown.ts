import { readSync } from 'to-vfile';
import { reporter } from 'vfile-reporter';
import { unified } from 'unified';
// @ts-expect-error
import remarkBehead from 'remark-behead';
import remarkExtractFrontmatter from 'remark-extract-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
// @ts-expect-error (no types)
import rehypeShiki from 'rehype-shiki';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { parse as parseYaml } from 'yaml';
import { VFile } from 'vfile/lib';

const preprocessRemarkRehype = () =>
  unified()
    .use(remarkParse)
    .use(remarkBehead, { depth: 1 })
    .use(remarkFrontmatter)
    .use(remarkExtractFrontmatter, { yaml: parseYaml, name: 'frontmatter' })

    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify);

export const getSyntaxHighlightedHTMLFromMarkdown = async (path: string) => {
  let processedContent: VFile | undefined;

  try {
    processedContent = await preprocessRemarkRehype()
      .use(rehypeShiki)
      .process(readSync(path));
  } catch (error) {
    throw new Error(reporter(error as VFile));
  }

  return {
    html: processedContent.toString(),
    frontmatter: processedContent.data?.frontmatter,
  };
};

export const getHTMLFromMarkdown = async (path: string) => {
  let processedContent;

  try {
    processedContent = await preprocessRemarkRehype().process(readSync(path));
  } catch (error) {
    throw new Error(reporter(error as VFile));
  }

  return {
    html: processedContent.toString(),
    frontmatter: processedContent.data?.frontmatter,
  };
};

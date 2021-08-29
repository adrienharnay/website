import { readSync } from 'to-vfile';
import { reporter } from 'vfile-reporter';
import { unified } from 'unified';
// @ts-expect-error
import remarkBehead from 'remark-behead';
import remarkExtractFrontmatter from 'remark-extract-frontmatter';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
// @ts-expect-error
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
// @ts-expect-error (no types)
import rehypePrism from '@mapbox/rehype-prism';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { parse as parseYaml } from 'yaml';
import { VFile } from 'vfile/lib';

export const getSyntaxHighlightedHTMLFromMarkdown = async (path: string) => {
  let processedContent: VFile | undefined;

  try {
    processedContent = await unified()
      .use(remarkParse)
      .use(remarkBehead, { depth: 1 })
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypeDocument)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypePrism)
      .use(remarkFrontmatter)
      .use(remarkExtractFrontmatter, { yaml: parseYaml, name: 'frontmatter' })
      .process(readSync(path));
  } catch (error) {
    console.error(reporter(error as VFile));
  }

  return {
    html: processedContent?.toString(),
    frontmatter: processedContent?.data?.frontmatter,
  };
};

export const getHTMLFromMarkdown = async (path: string) => {
  let processedContent;

  try {
    processedContent = await unified()
      .use(remarkParse)
      .use(remarkBehead, { depth: 1 })
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypeDocument)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(remarkFrontmatter)
      .use(remarkExtractFrontmatter, { yaml: parseYaml, name: 'frontmatter' })
      .process(readSync(path));
  } catch (error) {
    console.error(reporter(error as VFile));
  }

  return {
    html: processedContent?.toString(),
    frontmatter: processedContent?.data?.frontmatter,
  };
};

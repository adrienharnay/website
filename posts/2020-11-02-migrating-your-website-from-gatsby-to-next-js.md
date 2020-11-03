---
date: '2020-11-02'
title: 'Migrating your website from Gatsby to Next.js'
excerpt: 'Gatsby and Next.js are two tools that get praised a lot for personal blogs and static websites, and each year there is more and more stars and contributions on Github. I recently migrated my website from Gatsby to Next.js, and I will list the differences I have noticed.'
cover: '/images/posts/birds-migrating.jpeg'
---

Gatsby and Next.js are two tools that get praised a lot for personal blogs and static websites, and each year there is more and more stars and contributions on Github. Why would you choose one over the other? I recently migrated my website from Gatsby to Next.js, and I will list the differences I have noticed.

I wanted to try the new features of Next.js for quite some time now, after using it for a small project a year ago. I figured it would be a nice experiment to migrate my whole website to Next.js over the week-end, and that I could still revert if I was not happy with the end result. Now that it's done, what are the key differences between the two frameworks?

# Image component

One of the most important things to me when I browse the web is the way images load. I like how Medium loads image, with a low-fi preview that transitions to the full image when it's loaded.

[gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) does the same, and actually I love it so much I wrote a webpack loader so that I could use it on any project ([@brigad/ideal-image-loader](https://github.com/Brigad/ideal-image-loader)). Next.js also has an [image component](https://nextjs.org/docs/api-reference/next/image) since v10, which is the latest version to date.

I have tried migrating to the new component, <strike>but either the images ended up blurry on the screen, or were not optimized (600kb vs 200kb for my hero picture, Next.js VS Gatsby).</strike>

Edit: I have used the new `layout` prop, and it is working great! I have also set the `images.deviceSizes` property in `next.config.js`. You can read my PR on upgrading to the new `layout` prop [here](https://github.com/adrienharnay/website/pull/5/files).

One downside though, next/image doesn't have the same progressive loading feature as gatsby-image.

# Static assets

When working with static assets (e.g. images), some libraries require that you `import` your assets, and others let you specify paths as strings.

Gatsby lets you use absolute paths, so you can use `import` statements. Next.js will accept string paths relative to your `public` folder, because it will optimize its content.

I prefer using `import` statements because TypeScript can then check I didn't make any typos, and I don't have any surprise at runtime.

# Errors

Frameworks provide abstractions to make your life easier, but it also means they're taking away control. When things don't work like they're supposed to, good errors message can make the difference between a one minute bug and a day of suffering.

I find Gatsby's error messages can be really opaque, and I need to browse the GitHub issues (and luck) to understand what they are about. For what I have seen, Next.js provides clear error messages with a clear path on the actions you need to take to make the error go away.

# Ecosystem

A framework's ecosystem can define if and how people will use it. I think frameworks need to fine a balance between magic and verbose code.

Gatsby will do everything for you. You want to integrate Google Analytics? there's a one-line plugin for that. You want your app to be a PWA? There's also a plugin for that.

```js
module.exports = {
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'UA-XXXXXXXXX-X',
    },
  },
  'gatsby-plugin-offline',
};
```

_Gatsby: `gatsby.config.js` to enable Google ANalytics and make your app work offline_

Next.js has less built-ins and plugins, but the [tutorial](https://nextjs.org/learn/basics/create-nextjs-app) is impressively good and it is very quick to read all the docs and to know what Next.js is all about.

I love everything I can do with Gatsby, but it kind of feels like magic, and when it doesn't work, well I don't know how to fix it and it takes a lot of time. I don't really like the ecosystem of [starters](https://www.gatsbyjs.com/starters/?v=2) because it just ends up being a graveyard of outdated repositories (I'm guilty at charge as I have some myself...). Next.js doesn't provide all of that for you, but it means that you can just do it as you would without a framework, and you have no vendor lock-in.

I have always found that tweaking the webpack config of Gatsby and generating page was complicated. The API is dense, and doesn't feel natural to me. I love GraphQL, but it seems to me that using it to do everything is taking it a bit too far.

```js
const createPostPages = (createPage, edges) => {
  const postTemplate = path.resolve(
    'src/templates/post-template/js/PostTemplate.js',
  );

  edges.forEach((post, index) => {
    const previous = index === edges.length - 1 ? null : edges[index + 1].node;
    const next = index === 0 ? null : edges[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.createPages = ({ actions: { createPage }, graphql }) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.log(result.errors);
          reject(result.errors);
        }

        createPostPages(createPage, result.data.allMarkdownRemark.edges);
      }),
    );
  });

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            excerpt
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 2400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
```

_Gatsby: generating a page for each post in my `posts` folder, and feeding the data to the component_

With Next.js and [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation), querying data is "just" JavaScript! I write the same code as I would in a Node script or a useEffect hook, and I like it.

```ts
export const getAllPostsIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
};

export const getPostData = async (id: string) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    id,
    html: await getSyntaxHighlightedHTMLFromMarkdown(matterResult.content),
    ...(matterResult.data as PostMetadata),
  };
};

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
```

_Next.js: generating a page for each post in my `posts` folder, and feeding the data to the component_

# Conclusion

The migration has not been too difficult, even though some features were harder to replicate with Next.js. Some features are not yet at the level of Gatsby's, but the developer experience and ecosystem feel less like a black box. I'm feeling more of a React developer and less like a Gatsby developer when working on my website.

---
date: '2021-01-22'
title: 'Using Next.js API Routes as a back-end for your Next.js app'
excerpt: 'In my previous post, I explained how I migrated my blog to Next.js. Today, I wanted to explore Next.js API Routes and how they can help us build a back-end for our front-end application.'
cover: '/images/posts/nextjs-routes.jpg'
---

In my [previous post](/2020-11-02-migrating-your-website-from-gatsby-to-next-js), I explained how I migrated my blog to Next.js. Today, I wanted to explore Next.js API Routes and how they can help us build a back-end for our front-end application.

_You can find the demo project [here](https://github.com/adrienharnay/cocktails-app-nextjs-api-routes)_

# Introduction

This post is part of a series which aim is to compare back-end solutions for Next.js. It is the first one and will be a reference for other implementations.

For the test to be relevant, the app should support the following features:

- Authentication (content will be protected behind authentication)
- List of cocktails (list querying), search by ingredient (search), and access a cocktail details (item querying)
- Like cocktails (simple write)
- Display a cocktail at random (custom logic)

The tools I am interested in testing should support all these use cases, and also a GraphQL interface and/or type generation from the database model.

At the end of the test, I will outline relevant differences between all the solutions tested.

# Next.js API Routes

[Next.js API routes](https://nextjs.org/docs/api-routes/introduction) are a built-in feature of Next.js. On top of serving your content, your server can also be used as a REST API! Let's try it out.

## Prior configuration

Since the feature is built into Next.js, we don't need any account or configuration, and will only need to code our API routes alongside our pages.

## Integration

One great upside of Next.js API Routes is that they are Just JavaScript™️! You don't have to learn a specific syntax and can be proficient instantly if you know Express (and particularly the `req` and `req` objects).

Next.js API routes do not support GraphQL, but as this solution is only meant to be a reference for our future tests, this won't be a problem.

Here are the steps to implement a REST API using Next.js API Routes:

- Create a `/pages/api` folder
- For each request, create a `[requestName].ts` file in the `pages/api` folder
- Implement logic as you would in a regular Express app (examples [here](https://github.com/adrienharnay/cocktails-app-nextjs-api-routes/blob/master/src/pages/api/cocktails/index.api.ts))
- Call the routes you have created in your React code, pointing to `/api/[requestName]` (example [here](https://github.com/adrienharnay/cocktails-app-nextjs-api-routes/blob/master/src/pages/index/js/CocktailsPage.tsx#L27-L41))

And that's it! No need to host your back-end, it will be hosted on the same server as your front-end!

## Next steps

As mentioned in the repository, the back-end implementation is quite naive, and the next steps will be to try other solutions such as MongoDB Realm, Amplify, Firebase, Prisma, ... You can [follow me on Twitter](https://twitter.com/AdrienHarnay) to be notified once every new test comes out!

---
title: 'Curated list of links'
excerpt: 'I have gathered this list of links over the time, made of resources I have found helpful or worth remembering.'
---

Everytime I find a new resource and think I might need it in the future, it gets added to this list. I hope it can help you as much as it helps me.

## Table of content

- [Developer toolbox](#developer-toolbox)

  - [Shell](#shell)
  - [Git / Github](#git--github)
  - [Package managers](#package-managers)
  - [Web development tools](#web-development-tools)

- [Programming languages](#programming-languages)

  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
  - [Reason](#reason)
  - [HTML](#html)

    - [Semantics](#semantics)
    - [HTML accessibility](#html-accessibility)

  - [CSS](#css)

    - [CSS base features](#css-base-features)
    - [Flexbox](#flexbox)
    - [Grid](#grid)
    - [Transitions / Animations](#transitions--animations)
    - [Data visualization](#data-visualization)
    - [Cool demos](#cool-demos)
    - [SCSS](#scss)
    - [CSS Modules](#css-modules)
    - [CSS-in-JS](#css-in-js)
    - [JS-in-CSS (because why not)](#js-in-css-because-why-not)
    - [Other CSS frameworks](#other-css-frameworks)
    - [Common CSS bugs](#common-css-bugs)

- [Frameworks](#frameworks)

  - [NodeJS](#nodejs)
  - [React](#react)
  - [React Native](#react-native)
  - [Native Mobile Development](#native-mobile-development)

- [React frameworks](#react-frameworks)

  - [Gatsby.js](#gatsbyjs)
  - [Next.js](#nextjs)
  - [Astro](#astro)
  - [Electron](#electron)

- [State management libraries](#state-management-libraries)

  - [Redux](#redux)
  - [Recoil](#recoil)
  - [GraphQL](#graphql)
  - [Apollo client](#apollo-client)
  - [Apollo server](#apollo-server)
  - [SWR](#swr)

- [Animations libraries](#animations-libraries)

  - [D3.js](#d3js)
  - [Framer Motion](#framer-motion)
  - [React-spring](#react-spring)
  - [React-native-reanimated](#react-native-reanimated)

- [Code quality](#code-quality)

  - [Linters](#linters)

    - [Eslint](#eslint)

  - [Test frameworks](#test-frameworks)

    - [Jest](#jest)
    - [Cypress](#cypress)

- [Bundling](#bundling)

  - [Bundlers](#bundlers)

    - [Webpack](#webpack)
    - [Rollup](#rollup)
    - [Parcel](#parcel)

  - [Transpilers and optimizers](#transpilers-and-optimizers)

    - [Babel](#babel)
    - [Prepack](#prepack)

- [Hosting providers](#hosting-providers)

  - [Netlify](#netlify)
  - [Vercel](#vercel)

- [Continuous development platforms](#continuous-development-platforms)

- [SaaS useful to front-end developers](#saas-useful-to-front-end-developers)

  - [BaaS (Back-end as a service)](#baas-back-end-as-a-service)

    - [AWS Amplify](#aws-amplify)
    - [Google Firebase](#google-firebase)
    - [Supabase](#supabase)
    - [Prisma](#prisma)

- [CMS](#cms)

  - [Strapi](#strapi)

- [Website generators](#website-generators)

  - [Styleguide generators](#styleguide-generators)

    - [Styleguidist](#styleguidist)
    - [Storybook](#storybook)

  - [Documentation generators](#documentation-generators)
  - [Presentation generators](#presentation-generators)

- [Advanced concepts](#advanced-concepts)

  - [Design systems](#design-systems)
  - [State machines](#state-machines)
  - [Server Side Rendering](#server-side-rendering)

    - [SSR Boilerplates](#ssr-boilerplates)
    - [SSR Frameworks](#ssr-frameworks)

  - [Performance](#performance)

    - [Illusion of speed](#illusion-of-speed)
    - [Network](#network)
    - [Input / Throughput](#input--throughput)
    - [Core Web Vitals](#core-web-vitals)
    - [Performance accessibility](#performance-accessibility)
    - [Progressive Web Apps](#progressive-web-apps)
    - [Performance benchmarks](#performance-benchmarks-)

  - [SEO](#seo)
  - [Security](#security)

- [Misc. tools](#misc-tools)

  - [Images, videos, assets, colors, fonts](#images-videos-assets-colors-fonts)
  - [Productivity](#productivity)
  - [Mock APIs](#mock-apis)
  - [Regex testers](#regex-testers)
  - [IDEs](#ides)

    - [Visual Studio Code](#visual-studio-code)
    - [Online IDEs](#online-ides)

  - [Design tools](#design-tools)

    - [Sketch](#sketch)
    - [Framer X](#framer-x)

  - [Presentation tools](#presentation-tools)

- [Developer insights](#developer-insights)

  - [Software insights](#software-insights)
  - [Product insights](#product-insights)
  - [Being a developer](#being-a-developer)
  - [Being a Staff-Plus Engineer](#being-a-staff-plus-engineer)
  - [Technical decision making](#technical-decision-making)
  - [Engineering strategies](#engineering-strategies)
  - [Leadership / Mentoring / Teaching](#leadership--mentoring--teaching)
  - [Management](#management)
  - [Career ladders](#career-ladders)
  - [OSS](#oss)
  - [Remote working](#remote-working)
  - [Communicating](#communicating)
  - [Writing articles](#writing-articles)
  - [Speaking at events](#speaking-at-events)
  - [Job interviews](#job-interviews)
  - [Coding interviews](#coding-interviews)
  - [Resumes](#resumes)
  - [Compensation](#compensation)
  - [Startups](#startups)
  - [Freelance](#freelance)

    - [Freelance advice](#freelance-advice)
    - [Job hunting / Freelancing (mainly for French people)](#job-hunting--freelance-platforms-mainly-for-french-people)

- [Personal achievements](#personal-achievements)

  - [Talks](#talks)

## Developer toolbox

### Shell

- [tldr pages](https://tldr.sh/) - Simplified and community-driven man pages
- [Explainshell](https://explainshell.com/) - Write down a command-line to see the help text that matches each argument
- [ShellCheck](https://marketplace.visualstudio.com/items?itemName=timonwong.shellcheck) - VSCode extension
- [Shell-format](https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format) - VSCode extension

### Git / Github

- [Git flight rules](https://github.com/k88hudson/git-flight-rules) - Flight rules for git
- [Tell Me When it Closes](https://tellmewhenitcloses.com/) - Get only 1 email when an issue or PR closes
- [GitHub Contributions Chart Generator](https://github-contributions.now.sh/)
- [8 Productivity Tips for GitHub](https://dev.to/_darrenburns/8-productivity-tips-for-github-44kn)

### Package managers

#### Yarn

- [Running Yarn offline](https://yarnpkg.com/blog/2016/11/24/offline-mirror/)
- [Welcome to JS Dependency Hell](https://medium.com/swlh/welcome-to-dependency-hell-754a896f0440)
- [Creating a Monorepo with Lerna & Yarn Workspaces](https://leerob.io/blog/monorepo-lerna-yarn-workspaces)
- [Yarn-deduplicate](https://github.com/atlassian/yarn-deduplicate) - Cleans up yarn.lock by removing duplicates
- [Yarn Lock Changes](https://github.com/Simek/yarn-lock-changes) - Creates a comment inside Pull Request with the human-readable summary of changes to the Yarn lock file

#### Tools

- [Path-package](https://github.com/ds300/patch-package) - Fix broken node modules with no fuss
- [Npkill](https://github.com/voidcosmos/npkill) - List any node_modules directories in your system, as well as the space they take up. You can then select which ones you want to erase to free up space
- [Npm semver calculator](https://semver.npmjs.com/)
- [Visualization of npm dependencies](https://npm.anvaka.com/#/)
- [pkg](https://github.com/vercel/pkg) - Package your Node.js project into an executable
- [Bundlephobia](https://bundlephobia.com/) - Find the cost of adding a npm package to your bundle
- [Packagephobia](https://packagephobia.com/) - Find the cost of adding a new dev dependency to your project

### Web development tools

- [Eruda](https://eruda.liriliri.io/) - Console for Mobile Browsers

## Programming languages

### JavaScript

#### Documentation / News 📚

- [Mozilla re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [EcmaScript 6 Features](http://es6-features.org/)
- [Asynchronous JS Cheatsheet](https://frontarm.com/async-cheatsheet.pdf)
- [Flavio Copes JavaScript tutorials](https://flaviocopes.com/tags/js/)

#### Concepts / Articles 💡

##### JavaScript features

- [Modern Javascript: Everything you missed over the last 10 years (ECMAScript 2020)](https://turriate.com/articles/modern-javascript-everything-you-missed-over-10-years)
- [ES6: Default Arguments](https://remysharp.com/2017/10/25/es6-default-arguments)
- [Taming the asynchronous beast with ES7](https://pouchdb.com/2015/03/05/taming-the-async-beast-with-es7.html)
- [Property order is predictable in JavaScript objects since ES2015](https://www.stefanjudis.com/today-i-learned/property-order-is-predictable-in-javascript-objects-since-es2015/)
- [Working With Strings in Modern JavaScript](https://www.baseclass.io/guides/string-handling-modern-js)

##### JavaScript patterns

- [A Beginner’s Guide to Currying in Functional JavaScript](https://www.sitepoint.com/currying-in-functional-javascript/)
- [Awesome one-liners you might find useful while coding](https://mobile.twitter.com/coderitual/status/1112297299307384833)
- [The shortest way to conditional insert properties into an object literal](https://dev.to/jfet97/the-shortest-way-to-conditional-insert-properties-into-an-object-literal-4ag7)
- [Applying a timeout to your promises](https://italonascimento.github.io/applying-a-timeout-to-your-promises/)
- [Listify a JavaScript array](https://kentcdodds.com/blog/listify-a-java-script-array)
- [9 single-statement JS algorithms for common data transformations](https://www.benmvp.com/blog/9-single-statement-javascript-algorithms-common-data-transformations/)
- [Refactoring cascading conditionals in favor of readability](https://blog.logrocket.com/refactoring-cascading-conditionals-favor-readability/)
- [Naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet) - Comprehensive language-agnostic guidelines on variables naming

##### Functional / Declarative programming

- [Imperative vs Declarative Programming](https://ui.dev/imperative-vs-declarative-programming/)
- [JavaScript Without Loops](https://jrsinclair.com/articles/2017/javascript-without-loops/)
- [How I rediscovered my love for JavaScript after throwing 90% of it in the trash](https://hackernoon.com/how-i-rediscovered-my-love-for-javascript-after-throwing-90-of-it-in-the-trash-f1baed075d1b)

##### Others

- [The increasing nature of frontend complexity](https://blog.logrocket.com/the-increasing-nature-of-frontend-complexity-b73c784c09ae)
- [Contrarian idea: JS doesn't move too fast](https://mobile.twitter.com/dceddia/status/1036807827547930624) - Twitter thread
- [This year in JavaScript: 2018 in review and npm’s predictions for 2019](https://blog.npmjs.org/post/180868064080/this-year-in-javascript-2018-in-review-and-npms)
- [You don't need MomentJS](https://github.com/you-dont-need/You-Dont-Need-Momentjs) - List of date-fns or native functions which you can use to replace moment.js + ESLint Plugin
- [Is postMessage slow?](https://dassur.ma/things/is-postmessage-slow/)
- [JavaScript Pass By Value Function Parameters](https://kentcdodds.com/blog/javascript-pass-by-value-function-parameters)
- [End-to-End Encryption in the Browser](https://blog.excalidraw.com/end-to-end-encryption/)
- [How To Use Vibration API In Your Website](https://blog.bibekkakati.me/how-to-use-vibration-api-in-your-website)
- [Browsers decode images differently](https://bien.ee/image-decoding-differences-between-browsers/)

#### Related tools 🛠️

- [Operator Lookup](https://www.joshwcomeau.com/operator-lookup/) - Enter a JavaScript operator to learn more about it
- [DOM Events](https://domevents.dev/) - Learn about the DOM Event system through exploration
- [Does it mutate?](https://doesitmutate.xyz/) - Learn which functions of the language mutate and which do not
- [Airbnb JavaScript styleguide](https://github.com/airbnb/javascript)

#### Useful libraries 💾

- [Tippy.js](https://atomiks.github.io/tippyjs/) - A highly customizable vanilla JS tooltip & popover library
- [NProgress.js](http://ricostacruz.com/nprogress/) - A nanoscopic progress bar. With realistic trickle animations to tell your users that something's happening
- [Guess.js](https://guess-js.github.io/) - Libraries & tools for enabling Machine Learning driven user-experiences on the web
- [Progress-estimator](https://github.com/bvaughn/progress-estimator) - Logs a progress bar and estimation for how long a Promise will take to complete
- [Quicklink](https://github.com/GoogleChromeLabs/quicklink) - Faster subsequent page-loads by prefetching in-viewport links during idle time
- [FBT](https://facebookincubator.github.io/fbt/) - An internationalization framework by Facebook
- [Date-fns](https://github.com/date-fns/date-fns) - Modern date utility library
- [Date-fns-tz](https://github.com/marnusw/date-fns-tz) - Complementary library for date-fns v2 adding IANA time zone support
- [PullToRefresh.js](https://www.boxfactura.com/pulltorefresh.js/) - A small, but powerful JavaScript library crafted to power your webapp's pull to refresh feature
- [Exponential-backoff](https://github.com/coveooss/exponential-backoff) - A utility that allows retrying a function with an exponential delay between attempts
- [party.js](https://partyjs.yiliansource.dev/) - A JavaScript library to brighten up your user's site experience with visual effects!
- [WinBox.js](https://github.com/nextapps-de/winbox) - Professional HTML5 window manager for the web
- [Zx](https://github.com/google/zx) - A tool for writing better scripts
- [Elementary](https://www.elementary.audio/) - Finally, write audio apps in JavaScript

#### Games 🎲

- [Yare](https://yare.io/) - Real-Time Strategy game where you control your units by writing JavaScript code

### TypeScript

#### Documentation / News 📚

- [TypeScript docs](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Evolution](https://mariusschulz.com/blog/series/typescript-evolution)
- [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
- [TypeScript and Babel 7](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/)

#### Concepts / Articles 💡

- [Understanding TypeScript’s type notation](http://2ality.com/2018/04/type-notation-typescript.html)
- [The TypeScript Tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b) - A Cost vs Benefit Analysis
- [The unknown Type in TypeScript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)
- [Understanding TypeScript Generics](https://seanbarry.dev/posts/understanding-typescript-generics)
- [Starting a TypeScript Project in 2021](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/)

#### Migration stories 📖

- [DevTools architecture refresh: migrating DevTools to TypeScript](https://developer.chrome.com/blog/migrating-to-typescript/)
- [Slow and Steady: Converting Sentry’s Entire Frontend to TypeScript](https://blog.sentry.io/2021/04/12/slow-and-steady-converting-sentrys-entire-frontend-to-typescript)
- [The continual evolution of Airtable’s codebase: Migrating a million lines of code to TypeScript](https://medium.com/airtable-eng/the-continual-evolution-of-airtables-codebase-migrating-a-million-lines-of-code-to-typescript-612c008baf5c)

#### Related tools 🛠️

- [TypeScript Playground](https://www.typescriptlang.org/play/)
- [Type challenges](https://github.com/type-challenges/type-challenges)
- [Typescript-cheatsheet](https://github.com/typescript-cheatsheets/utilities) - A list of typescript helper libraries
- [New ESLint / TypeScript Configuration](https://calendee.com/2019/04/12/new-eslint-typescript-configuration/)

#### Useful libraries 💾

- [React-javascript-to-typescript-transform](https://github.com/lyft/react-javascript-to-typescript-transform) - Convert React JavaScript code to TypeScript with proper typing
- [Flow2ts](https://github.com/microsoft/flow2dts) - Flow declarations to TypeScript declarations transpiler
- [Typedoc](https://github.com/TypeStrong/typedoc) - Documentation generator for TypeScript projects
- [Type-fest](https://github.com/sindresorhus/type-fest) - A collection of essential TypeScript types
- [Ts-pattern](https://github.com/gvergnaud/ts-pattern) - An exhaustive Pattern Matching library for TypeScript, with smart type inference

### Reason

- [ReasonML docs](https://reasonml.github.io/docs/en/installation)
- [Reason React Playground](https://astrada.github.io/reason-react-playground/?reason=LYewJgrgNgpgBAcQE4xgFwJYDsDmcC8cA3gFBxyxpwDGIwADiFjFlYQEowCGAzk512poAdDzRc0MWDx4BhOo2asAFACJkqTLlUBKANxkK6OMC4BreIWUB9agAsMUMCiw6CAPmKHyw37QZMLGgANN5wLmAwSABccMo8UgBmbvieADwARhBoaEyeygJ8WAJComhI2DgAKiAAorDAQWoAElJQIACEum5pAPRZOXmGAL4GoyQkJWgAIgDyALKcwhFRNfUwjawA6hhodgCSYMppGuiVcL3uwXCq9CgAbhgwAO66ekA)

### HTML

#### Semantics

- [HTML & CSS is hard](https://internetingishard.com/html-and-css/) - Course to learn HTML & CSS
- [Understanding why Semantic HTML is important, as told by TypeScript](https://medium.com/@mandy.michael/understanding-why-semantic-html-is-important-as-told-by-typescript-bd71ad41e6c4)

#### HTML accessibility

- [Practical ARIA Examples](http://heydonworks.com/practical_aria_examples/)

### CSS

#### CSS base features

- [Pseudo-classes MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Margin or padding?](https://hackernoon.com/margin-or-padding-f5252562313)
- [Float labels with CSS](https://css-tricks.com/float-labels-css)
- [Don’t Use The Placeholder Attribute](https://www.smashingmagazine.com/2018/06/placeholder-attribute/)
- [Keys to maintainable CSS: Order](https://pyx.space/post/keys-to-maintainable-css-order)
- [4 reasons your z-index isn’t working (and how to fix it)](https://medium.freecodecamp.org/4-reasons-your-z-index-isnt-working-and-how-to-fix-it-coder-coder-6bc05f103e6c)
- [Overflow In CSS](https://ishadeed.com/article/overflow-css/)
- [What the heck, z-index??](https://www.joshwcomeau.com/css/stacking-contexts/)
- [Diving into the ::before and ::after Pseudo-Elements](https://codersblock.com/blog/diving-into-the-before-and-after-pseudo-elements/)
- [Did You Know About the :has CSS Selector?](https://css-tricks.com/did-you-know-about-the-has-css-selector/)
- [Sticky Headers: 5 Ways to Make Them Better](https://www.nngroup.com/articles/sticky-headers/)
- [A Guide To Newly Supported, Modern CSS Pseudo-Class Selectors](https://www.smashingmagazine.com/2021/04/guide-supported-modern-css-pseudo-class-selectors/?ck_subscriber_id=1233693650)
- [CSS Tips](https://markodenic.com/css-tips/) - CSS tips and tricks you won’t see in most of the tutorials
- [Practical CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/)
- [Easing Gradients](https://larsenwork.com/easing-gradients/)

#### Others

- ["last 2 versions" considered harmful](https://jamie.build/last-2-versions)
- [How to force restart any iOS device with just CSS?](https://mobile.twitter.com/pwnsdx/status/1040944750973595649) - Twitter thread
- [CSS hack to show elements depth on a page](https://dev.to/gajus/my-favorite-css-hack-32g3)
- [Avoiding jagged edges on gradients](https://medium.com/pixel-and-ink/avoiding-jagged-edges-on-gradients-f485cc7401f5)
- [The Just in Case Mindset in CSS](https://ishadeed.com/article/the-just-in-case-mindset-css/)
- [Thoughts on CSS frameworks and stylized component libraries](https://www.joshwcomeau.com/newsletter-issues/012/#thoughts-on-css-frameworks-and-stylized-component-libraries) - From Josh Comeau's newsletter

#### Flexbox

- [Flexbox Zombies](https://mastery.games/p/flexbox-zombies) - Free course on flexboxes
- [Flex Box Adventure](https://codingfantasy.com/games/flexboxadventure) - Free course on flexboxes
- [Test CSS Flexbox Rules](http://flexbox.help/)

#### Grid

- [Grid critters](http://www.gridcritters.com/) - Free course on grid
- [CSS Grid Layout Interface](https://www.layoutit.com/grid)

#### Transitions / animations

- [10 principles for smooth web animations](https://blog.gyrosco.pe/smooth-css-animations-7d8ffc2c1d29)
- [How to create fancy revealing animations with these simple CSS tricks](https://hackernoon.com/how-to-create-fancy-revealing-animations-with-these-simple-css-tricks-5b34614ae69a)
- [Lottie](https://airbnb.design/lottie/)
- [Lottie Files](https://www.lottiefiles.com/) - An online community to find, test, and share striking animations
- [The ultimate guide to proper use of animation in UX](https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9)
- [An Interactive Guide to CSS Transitions](https://www.joshwcomeau.com/animation/css-transitions/)
- [A whimsical twist on hover transitions](https://www.joshwcomeau.com/react/boop/)
- [Transition.css](https://github.com/argyleink/transition.css) - Drop-in CSS transitions

#### Data visualization

- [Charts.css](https://chartscss.org/) - CSS data visualization framework

#### Cool demos

- [Moving letters](http://tobiasahlin.com/moving-letters/)
- [Single element CSS spinners](https://projects.lukehaas.me/css-loaders/)
- [30 Seconds of CSS](https://atomiks.github.io/30-seconds-of-css/)
- [Responsive animated progress bar to donut](https://codepen.io/ainalem/details/zJeyxo/)
- [CSS Stripes Generator](https://stripesgenerator.com/)
- [CSS Gradient](https://cssgradient.io/)
- [Keyframes](https://keyframes.app/) - Dead simple visual tools to help you generate CSS for your projects
- [CSS Accordion Slider Generator](https://accordionslider.com/)
- [Cube Life](https://codepen.io/vasighm/full/QWdvrKb) - The game of life on a cube
- [ui.wtf](https://uiw.tf/)
- [The Hero Generator](https://hero-generator.netlify.app/) - Hero cover generator

#### SCSS

- [Advanced SCSS, or, 16 cool things you may not have known your stylesheets could do](https://gist.github.com/jareware/4738651)
- [Linting SCSS files with settings for orders in logical chunks](https://gist.github.com/samuells/8915a1d32ac93f5c904893663f399218)
- [Where is the source of Autoprefixer data?](https://mobile.twitter.com/autoprefixer/status/1168232858114244608) - Twitter thread

#### CSS Modules

- [CSS Modules](https://github.com/css-modules/css-modules)
- [CSS Modules - Welcome to the future](https://glenmaddern.com/articles/css-modules)

#### CSS-in-JS

- [Stop using CSS in JavaScript for web development](https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)
- [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
- [Emotion](https://emotion.sh/) - The Next Generation of CSS-in-JS
- [Announcing Emotion 10!](https://medium.com/emotion-js/announcing-emotion-10-f1a4b17b8ccd)
- [Linaria](https://github.com/callstack/linaria) - Zero-runtime CSS in JS library
- [Treat](https://seek-oss.github.io/treat/) - Themeable, statically extracted CSS‑in‑JS with near‑zero runtime
- [vanilla-extract](https://vanilla-extract.style/) - Zero-runtime Stylesheets-in-TypeScript
- [Sprinkles](https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles) - Zero-runtime atomic CSS framework for vanilla-extract

#### JS-in-CSS (because why not)

- [React-native-css-modules](https://github.com/kristerkari/react-native-css-modules) - Use CSS modules in React Native
- [React-native-sass-transformer](https://github.com/kristerkari/react-native-sass-transformer) - Load Sass files to react native style objects

#### Other CSS frameworks

- [Why Tailwind Isn't for Me](https://dev.to/jaredcwhite/why-tailwind-isn-t-for-me-5c90)

#### Common CSS bugs

- [Internet Explorer Hacks](https://medium.com/codeart-mk/internet-explorer-hacks-796200e5741c)

## Frameworks

### NodeJS

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Node best practices](https://github.com/i0natan/nodebestpractices) - The largest Node.JS best practices list. Curated from the top ranked articles and always updated
- [Super Simple Start to ESModules in Node.js](https://kentcdodds.com/blog/super-simple-start-to-es-modules-in-node-js)
- [fnm](https://github.com/Schniz/fnm) - Fast and simple Node.js version manager, built in Rust

### Deno

- [Deno](https://deno.land/) - A secure runtime for JavaScript and TypeScript

### React

#### Documentation / News 📚

- [React docs](https://facebook.github.io/react/docs/hello-world.html)
- [Behind the Scenes: Improving the Repository Infrastructure](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html) - React 16 release retrospective
- [Sneak Peek: Beyond React 16](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html)
- [Update on Async Rendering](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
- [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Versioning Policy](https://reactjs.org/docs/faq-versioning.html)
- [React 16.x Roadmap](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html)
- [Building the New facebook.com with React, GraphQL and Relay](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/)

#### Concepts / Articles 💡

##### React features

- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)
- [Typescript-cheatsheets-react](https://github.com/typescript-cheatsheets/react) - Cheatsheets for experienced React developers getting started with TypeScript

##### React functional components & hooks

- [React Stateless Functional Components: Nine Wins You Might Have Overlooked](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)
- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [A Simple Intro to React Hooks](https://daveceddia.com/intro-to-hooks/)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- [How to implement useState with useReducer](https://kentcdodds.com/blog/how-to-implement-usestate-with-usereducer)
- [The State Reducer Pattern with React Hooks](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks)
- [React hook flow diagram](https://github.com/donavon/hook-flow/blob/master/hook-flow.pdf)

##### React patterns

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [React-bits](https://github.com/vasanthk/react-bits) - React patterns, techniques, tips and tricks
- [Reusable State with Higher Order Components](https://daveceddia.com/extract-state-with-higher-order-components/)
- [Headless User Interface Components](https://medium.com/merrickchristensen/headless-user-interface-components-565b0c0f2e18)
- [Using Composition and Render Props instead of Context API](https://medium.com/@barisozcetin/using-composition-and-render-props-instead-of-context-api-e431b1cbbc3b)
- [The Suspense is Killing Redux](https://medium.com/@ryanflorence/the-suspense-is-killing-redux-e888f9692430)
- [Avoiding unnecessary renders with React context](https://frontarm.com/articles/react-context-performance/)
- [Guide To Async Components](https://github.com/stereobooster/guide-to-async-components)
- [Lazy-loading components in React 16.6](https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52?gi=6cc88f71d9d9)
- [Lazy loading (and preloading) components in React 16.6](https://medium.com/@pomber/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d)
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [How to optimize your context value](https://kentcdodds.com/blog/how-to-optimize-your-context-value)
- [Authentication in React Applications](https://kentcdodds.com/blog/authentication-in-react-applications/)
- [One simple trick to optimize React re-renders](https://kentcdodds.com/blog/optimize-react-re-renders)
- [Fix the slow render before you fix the re-render](https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render)
- [State Colocation will make your React app faster](https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster)
- [Don't Sync State. Derive It!](https://kentcdodds.com/blog/dont-sync-state-derive-it)
- [Understanding React's key prop](https://kentcdodds.com/blog/understanding-reacts-key-prop)
- [The Latest Ref Pattern in React](https://epicreact.dev/the-latest-ref-pattern-in-react/)

##### Others

- [What is React: A Visual Introduction For Beginners](https://learnreact.design/posts/what-is-react)
- [The React Handbook](https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795)
- [Profile a React App for Performance](https://kentcdodds.com/blog/profile-a-react-app-for-performance)
- [How Concurrent React changes the game for data-heavy UI](https://medium.com/@winwardo/how-concurrent-react-changes-the-game-for-data-heavy-ui-a0f432655625)
- [Don't call a React function component](https://kentcdodds.com/blog/dont-call-a-react-function-component)
- [Initializing focus state in React: you might be doing it wrong](https://exogen.github.io/blog/focus-state/)
- [The Fault in Our Tolerance: Accounting for Failures in React](https://aweary.dev/fault-tolerance-react/)
- [Stop using client-side route redirects](https://kentcdodds.com/blog/stop-using-client-side-route-redirects)
- [Everything About React Server Components](https://vercel.com/blog/everything-about-react-server-components)
- [Why I Love React by Kent C. Dodds](https://epicreact.dev/why-i-love-react/)
- [Memoization and React](https://epicreact.dev/memoization-and-react/)
- [React 18 Alpha is out! Now what?](https://dev.to/cassidoo/react-18-alpha-is-out-now-what-2apj)
- [Not All Components Are Created Equal](https://formidable.com/blog/2021/react-components/)

#### Related tools 🛠️

- [Lifecycle Simulators](https://reactarmory.com/guides/lifecycle-simulators)
- [Use React DevTools - Youtube](https://www.youtube.com/watch?v=DQjMiKEwl_E&feature=youtu.be)
- [Create-react-app](https://github.com/facebookincubator/create-react-app) - Create React apps with no build configuration
- [React-codemod](https://github.com/reactjs/react-codemod) - React codemod scripts
- [SVGR : The SVG to JSX transformer](https://svgr.now.sh/)

#### Useful libraries 💾

- [React components & libraries](https://devarchy.com/react)
- [JS.coach](https://js.coach/)
- [Awesome-react-render-props](https://github.com/jaredpalmer/awesome-react-render-props) - Awesome list of React components with render props
- [React-dnd](https://github.com/react-dnd/react-dnd) - Drag and Drop for React
- [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Beautiful, accessible drag and drop for lists with React.js
- [React-trend](https://github.com/unsplash/react-trend) - Simple, elegant spark lines
- [React-perimeter](https://github.com/aweary/react-perimeter) - Create an invisible perimeter around an element and respond when its breached
- [React-blur-image-loader](https://github.com/MarkoCen/react-blur-image-loader) - Blurred progressive image loader for React
- [React-log](https://github.com/diegomura/react-log) - React for the Console
- [React-mosaic](https://github.com/palantir/react-mosaic) - A React tiling window manager
- [React-detect-offline](https://github.com/chrisbolin/react-detect-offline) - Offline and Online components for React
- [Upload](https://github.com/navjobs/upload) - Higher order React components for file uploading (with progress) react file upload
- [React-markings](https://github.com/Thinkmill/react-markings) - **Markdown** in `<Components/>`, `<Components/>` in **Markdown**
- [React-slidez](https://github.com/pau1fitz/react-slidez) - React Slideshow Component
- [React-virtualised](https://github.com/bvaughn/react-virtualized) - React components for efficiently rendering large lists and tabular data
- [React-reveal](https://github.com/rnosov/react-reveal) - Easily add reveal on scroll animations to your React app
- [React-ab-test](https://github.com/pushtell/react-ab-test) - A/B testing React components and debug tools. Isomorphic with a simple, universal interface
- [React-component-benchmarl](https://github.com/paularmstrong/react-component-benchmark) - A component to help benchmark React components and their trees
- [React-chartkick](https://github.com/ankane/react-chartkick) - Create beautiful JavaScript charts with one line of React
- [React-flip-move](https://github.com/joshwcomeau/react-flip-move) - Effortless animation between DOM changes (eg. list reordering) using the FLIP technique
- [React-show](https://github.com/react-tools/react-show) - React-Show - A 3kb show/hide component for React
- [React-preload](https://github.com/fubhy/react-preload) - Preload a React component tree in the background before rendering it
- [React-fns](https://react-fns.netlify.com/) - React Components for common Web APIs
- [Immer](https://github.com/mweststrate/immer) - Create the next immutable state by mutating the current one
- [React-window](https://github.com/bvaughn/react-window) - React components for efficiently rendering large lists and tabular data
- [React-flip-toolkit](https://github.com/aholachek/react-flip-toolkit) - A React FLIP animation helper library for highly configurable transitions
- [Css-suspense](https://github.com/threepointone/css-suspense) - CSS loading for react
- [React-filepond](https://github.com/pqina/react-filepond) - A handy FilePond (file uploader) adapter component for React
- [React-credit-cards](https://github.com/amarofashion/react-credit-cards) - Beautiful credit cards for your payment forms
- [Loadable-components](https://github.com/smooth-code/loadable-components) - React code splitting made easy
- [React-lazyload](https://github.com/jasonslyvia/react-lazyload) - Lazy load your component, image or anything matters the performance
- [React-waypoint](https://github.com/brigade/react-waypoint) - A React component to execute a function whenever you scroll to an element
- [React-rewards](https://github.com/thedevelobear/react-rewards) - Reward your users for little things and make them smile!
- [React-content-loader](https://github.com/danilowoz/react-content-loader) - SVG component to create placeholder loading, like Facebook cards loading
- [React-table](https://github.com/react-tools/react-table) - A lightweight, fast and extendable datagrid for React
- [React-chaos](https://github.com/jchiatt/react-chaos) - Chaos Engineering for your React apps
- [Remotion](https://www.remotion.dev/) - Create motion graphics in React
- [Vocab](https://github.com/seek-oss/vocab) - Strongly typed internationalization framework for React
- [React-hook-form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation
- [React-ux-form](https://github.com/swan-io/react-ux-form) - A simple, fast and opinionated form library for React & React Native focusing on UX
- [React-gui](https://ixrvy.sse.codesandbox.io/docs/) - React GUI is designed as the foundation for React design systems and component libraries
- [React-joyride](https://github.com/gilbarbara/react-joyride) - Create guided tours in your apps

#### Hooks

- [The-platform](https://github.com/palmerhq/the-platform) - Web API's turned into React Hooks and Suspense-friendly React components
- [Hooks.guide](https://www.hooks.guide/)
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
- [Rehooks](https://rehooks.com/) - Collection of React Hooks
- [useHooks](https://usehooks.com/) - Easy to understand React Hook recipes
- [React-use-local-storage](https://github.com/illinois/react-use-local-storage) - React hook that persists and syncs state with local storage
- [How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data/)
- [5 Tips to Help You Avoid React Hooks Pitfalls](https://kentcdodds.com/blog/react-hooks-pitfalls)
- [React-adaptive-hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks) - Deliver experiences best suited to a user's device and network constraints

### React Native

#### Documentation / News 📚

- [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html)
- [State of React Native 2018](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018)
- [Open Source Roadmap](http://facebook.github.io/react-native/blog/2018/11/01/oss-roadmap)
- [Hermes: An open source JavaScript engine optimized for mobile apps, starting with React Native](https://code.fb.com/android/hermes/)
- [React Native's Many Platform Vision](https://reactnative.dev/blog/2021/08/26/many-platform-vision)

#### Concepts / Articles 💡

- [Know React? Try React Native.](https://shift.infinite.red/know-react-try-react-native-48f459f36675)
- [Why Choose React Native?](https://formidable.com/blog/2021/choose-react-native/)
- [Awesome React Native](http://www.awesome-react-native.com/) - An awesome style list that curates the best React Native libraries, tools, tutorials, articles and more
- [Typescript-cheatsheets-react-native](https://github.com/typescript-cheatsheets/react-native) - Cheatsheets for experienced React Native developers getting started with TypeScript
- [Hunting JS memory leaks in React Native apps](https://blog.swmansion.com/hunting-js-memory-leaks-in-react-native-apps-bd73807d0fde?gi=84508c8ef0c7)
- [Bridging React Native Back to its Roots](https://www.youtube.com/watch?v=aOWIJ4Mgb2k&amp=&feature=youtu.be) - Vincent Riemer (@vincentriemer) at @ReactEurope 2018
- [Shipping React Native apps with Fastlane and Travis](https://dev.to/carloscuesta/shipping-react-native-apps-with-fastlane-and-travis-1aea)
- [Progressive Image Loading in React Native](https://medium.com/react-native-training/progressive-image-loading-in-react-native-e7a01827feb7)
- [Using SVG in Latest React Native Version 0.57](https://medium.com/@prathik_63905/using-svg-in-latest-react-native-version-0-57-e04aa8ea7dd8)
- [Testing Mobile Applications Across Hundreds of Real Devices with Appium, Node.js & AWS Device Farm](https://medium.com/@dabit3/testing-mobile-applications-across-hundreds-of-real-devices-with-appium-node-js-aws-device-farm-b749aefd651a)
- [React Native's new architecture - Glossary of terms](http://blog.nparashuram.com/2019/01/react-natives-new-architecture-glossary.html?m=1)
- [You can now use Expo APIs in any React Native app](https://blog.expo.io/you-can-now-use-expo-apis-in-any-react-native-app-7c3a93041331)
- [How to convince your boss to use React Native](http://frantic.im/how-to-convince-your-boss-to-use-react-native)
- [The New React Native Architecture Explained](https://formidable.com/blog/2019/react-codegen-part-1/)
- [React Native Performance: Do and Don't](https://hackernoon.com/react-native-performance-do-and-dont-1198e97b730a)
- [Stack Navigator Transitions | React Navigation 5](https://www.youtube.com/watch?v=PvjV96CNPqM) - YouTube video
- [Setup your React Native splash screen in 15 minutes](https://blog.bam.tech/developer-news/set-up-your-react-native-splash-screen-in-15-minutes)
- [How I improved my React Native app 50x faster](https://blog.inkdrop.info/how-i-improved-my-react-native-app-50x-faster-13d566061e84)
- [ELI5: Yoga - Cross-Platform Layout Engine](https://developers.facebook.com/blog/post/2021/02/01/eli5-yoga-cross-platform-layout-engine/)
- [Best Build Platforms for React Native Apps in 2021](https://javascript.plainenglish.io/best-build-platforms-for-react-native-apps-in-2021-24c511451bac)
- [Bringing Hermes to iOS in React Native 0.64](https://callstack.com/blog/bringing-hermes-to-ios-in-react-native/)
- [Hermes Performance on iOS](https://callstack.com/blog/hermes-performance-on-ios/)
- [Navigating Xcode for React Native Developers (with a web background)](https://medium.com/react-native-school/navigating-xcode-for-react-native-developers-with-a-web-background-a1ee4d6ae4a8)
- [Coinbase’s animated TabBar in React Native](https://blog.coinbase.com/coinbases-animated-tabbar-in-react-native-4b3fdd4473e)
- [Optimizing React Native](https://blog.coinbase.com/optimizing-react-native-7e7bf7ac3a34)
- [How Discord achieves native iOS performance with React Native](https://blog.discord.com/how-discord-achieves-native-ios-performance-with-react-native-390c84dcd502)
- [React-native-mmkv](https://github.com/mrousavy/react-native-mmkv) - ⚡An extremely fast key/value storage library for React Native. ~30x faster than AsyncStorage!

#### Migration stories 📖

- [React Native at Airbnb](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c)
- [React Native is the Future of Mobile at Shopify](https://engineering.shopify.com/blogs/engineering/react-native-future-mobile-shopify)
- [Announcing Coinbase’s successful transition to React Native](https://blog.coinbase.com/announcing-coinbases-successful-transition-to-react-native-af4c591df971)

#### Related tools 🛠️

- [Create-react-native-app](https://github.com/react-community/create-react-native-app) - Create a React Native app on any OS with no build config
- [Flipper](https://fbflipper.com/) - Extensible mobile app debugger
- [RN diff purge](https://pvinis.github.io/purge-web/) - Upgrade your React Native apps (and get diffs between versions)
- [App Icon Generator](https://appicon.co/)
- [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/)
- [Android-capture](https://github.com/ds300/android-capture) - Capture video and screenshots from Android devices and emulators
- [Don't kill my app!](https://dontkillmyapp.com/) - Android manufacturers prefer battery life over proper functionality of your apps. See how you can fix it

#### Useful libraries 💾

- [Babel-plugin-functional-hmr](https://github.com/bvic23/babel-plugin-functional-hmr) - Babel plugin enables HMR for functional components in React Native
- [React-native-sideswipe](https://github.com/kkemple/react-native-sideswipe) - Simple React Native carousel with sensible defaults
- [React-native-fast-image](https://github.com/DylanVann/react-native-fast-image) - FastImage, performant React Native image component
- [Swr-react-native](https://github.com/nandorojo/swr-react-native) - React Native/React Navigation compatibility for Vercel's useSWR hook
- [React-native-quick-base64](https://github.com/craftzdog/react-native-quick-base64) - A fast base64 module for React Native
- [React-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) - A performant interactive bottom sheet with fully configurable options
- [React-native-portal](https://github.com/gorhom/react-native-portal) - A simplified portal implementation for ⭕️ React Native & Web ⭕️
- [RNUI](https://wix.github.io/react-native-ui-lib/) - UI Toolset & Components Library for React Native
- [Ignite](https://github.com/infinitered/ignite) - Infinite Red's cutting edge React Native project boilerplate, along with a CLI, component/model generators, and more!
- [Recylerlistview](https://github.com/Flipkart/recyclerlistview) - High performance listview for React Native and web!
- [Stripe-react-native](https://github.com/stripe/stripe-react-native) - React Native library for Stripe

### Native Mobile Development

#### Useful libraries 💾

- [Litho](https://fblitho.com/) - A declarative UI framework for Android
- [ComponentKit](https://componentkit.org/) - A React-Inspired View Framework for iOS
- [Shard](https://shardlib.com/) - Dynamic alerts in mobile apps

## React frameworks

### Gatsby.js

#### Documentation / News 📚

- [Gatsby.js docs](https://github.com/gatsbyjs/gatsby)
- [Why GraphQL for Gatsby 1.0](https://github.com/gatsbyjs/gatsby/issues/420) - Github issue
- [Gatsby + Contentful + Netlify (and Algolia)](https://www.gatsbyjs.org/blog/2017-12-06-gatsby-plus-contentful-plus-netlify/)
- [Announcing Gatsby 2.0.0](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/)
- [Web Performance 102: Keeping Gatsby Sites Blazing Fast](https://www.gatsbyjs.org/blog/2019-10-03-gatsby-perf/)
- [Beyond Static: Building Dynamic Apps with Gatsby](https://www.gatsbyjs.org/blog/2018-10-15-beyond-static-intro/)
- [Gatsby for Apps](https://www.gatsbyjs.org/blog/2018-11-07-gatsby-for-apps/)
- [Youfit uses Gatsby to increase lead generation by 60%](https://www.gatsbyjs.org/blog/2018-11-16-youfit-case-study/)
- [How to Talk about Gatsby to Clients and Your Team](https://www.gatsbyjs.org/blog/2019-03-07-sell-gatsby-to-clients/)
- [Gatsby: Why We Write](https://www.gatsbyjs.org/blog/2019-04-19-gatsby-why-we-write/)

#### Concepts / Articles 💡

- [Gatsby.js: How to set up and use the React Static Site Generator](https://medium.freecodecamp.org/setting-up-and-getting-used-to-gatsby-1fc27985ae8a)
- [Practical Gatsby.js](https://blog.scottnonnenberg.com/practical-gatsby-js/)
- [Using CSS Modules](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-css-modules)
- [Image Optimization Made Easy with Gatsby.js](https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e)

#### Useful libraries 💾

- [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)

### Next.js

#### Documentation / News 📚

- [Learning Next.js to build server rendered JS web apps with React](https://nextjs.org/learn/)
- [Vercel raises $102M Series C for its front-end development platform](https://techcrunch.com/2021/06/23/vercel-raises-102m-series-c-for-its-next-js-based-front-end-development-platform/amp/?guccounter=1)

#### Concepts / Articles 💡

- [Lessons Learned Building in Next.js](https://medium.com/@diamondgfx/nextjs-lessons-learned-part-1-a5a8d442450f)
- [Using Feature Flags in Next.js](https://medium.com/frontend-digest/using-feature-flags-in-next-js-c5c8d0795a2)
- [Using Mapbox with Next.js (Instead of Google Maps)](https://leerob.io/blog/using-mapbox-with-next-js)
- [Things I've Learned Building Next.js Apps](https://leerob.io/blog/things-ive-learned-building-nextjs-apps)
- [Configuring Sentry for Next.js Apps](https://leerob.io/blog/configuring-sentry-for-nextjs-apps)
- [Going Serverless with Next.js and Firebase](https://leerob.io/blog/nextjs-firebase-serverless)
- [Static Sites with Next.js 9.3 and Prisma](https://leerob.io/blog/next-prisma)
- [Which Back End Should I Use As A Front-End Developer?](https://leerob.io/blog/backend)
- [Authentication Patterns for Next.js](https://leerob.io/blog/nextjs-authentication)
- [10 Next.js Tips You Might Not Know](https://vercel.com/blog/10-next-js-tips-you-might-not-know)
- [Building Forms with Next.js](https://nextjs.org/blog/forms)
- [Thread on security headers and Next.js](https://twitter.com/leeerob/status/1381605537742254082?s=20) - Here's how to take your Next.js site to an A
- [Refreshing Server-Side Props](https://www.joshwcomeau.com/nextjs/refreshing-server-side-props/)
- [A Complete Guide To Incremental Static Regeneration (ISR) With Next.js](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/)
- [ISR vs DPR: Big Words, Quick Explanation](https://www.smashingmagazine.com/2021/07/isr-dpr-explained/)
- [How we reduced Next.js page size by 3.5x and achieved a 98 Lighthouse score](https://papyrus.dev/@PapyrusBlog/how-we-reduced-next.js-page-size-by-3.5x-and-achieved-a-98-lighthouse-score)
- [Migrating a Blog to Next.js from Gatsby](https://blog.eyas.sh/2021/08/gatsby-to-next-js/)
- [Using the Next.js Image Component with MDX](https://kylepfromer.com/blog/nextjs-image-component-blog)

#### Related tools 🛠️

- [Code elimination preview](https://next-code-elimination.now.sh/) - Understand what parts of your Next.js code will be trimmed before being sent to the client

#### Useful libraries 💾

- [Create-react-next-app](https://github.com/segmentio/create-next-app) - Create Next.js apps in one command
- [Happykit/flags](https://github.com/happykit/flags) - Feature Flags for Next.js
- [Nookies](https://github.com/maticzav/nookies) - A set of cookie helpers for Next.js
- [Next-stripe](https://github.com/ynnoj/next-stripe) - Simplified server-side Stripe workflows in Next.js
- [Next-optimized-images](https://github.com/cyrilwanner/next-optimized-images) - next-optimized-images automatically optimizes images used in next.js projects (jpeg, png, svg, webp and gif)

### Astro

#### Documentation / News 📚

- [Introduction article](https://astro.build/blog/introducing-astro)
- [Astro docs](https://github.com/snowpackjs/astro)

### Electron

- [From React to an Electron app ready for production](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
- [Building Electron Apps with Next.js](https://leo.im/2017/electron-next)

## State management libraries

- [React State Management Libraries and How to Choose](https://daveceddia.com/react-state-management/)

### Redux

#### Documentation / News 📚

- [Redux docs](http://redux.js.org/docs/introduction/index.html)
- [Getting Started with Redux - Course by @dan_abramov @eggheadio](https://egghead.io/series/getting-started-with-redux)
- [Building React Applications with Idiomatic Redux - Course by @dan_abramov @eggheadio](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

#### Concepts / Articles 💡

- [Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)
- [Idiomatic Redux: The Tao of Redux, Part 2 - Practice and Philosophy](http://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)
- [Avoiding Accidental Complexity When Structuring Your App State](https://hackernoon.com/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a#.jda35b1n3)
- [Dissecting Twitter’s Redux Store](https://medium.com/statuscode/dissecting-twitters-redux-store-d7280b62c6b1)
- [Redux isn't slow, you're just doing it wrong - An optimization guide](http://reactrocket.com/post/react-redux-optimization/)
- [Scaling your Redux App with ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)
- [Redux vs. The React Context API](https://daveceddia.com/context-api-vs-redux/)
- [Goodbye Redux](https://hackernoon.com/goodbye-redux-26e6a27b3a0b)
- [Escaping Redux pitfalls in React Native world](https://blog.swmansion.com/escaping-redux-pitfalls-in-react-native-world-e151c008c97a)
- [Using Redux DevTools in production](https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f#.oznhybgta)

#### Useful libraries 💾

- [Redux-ecosystem-links](https://github.com/markerikson/redux-ecosystem-links) - A categorized list of Redux-related addons, libraries, and utilities
- [Awesome-redux](https://github.com/xgrommx/awesome-redux) - Awesome list of Redux examples and middlewares
- [Introducing Redux-rest-easy: A library to generate your Redux code](https://engineering.brigad.co/introducing-redux-rest-easy-6e9a91af4f59)
- [Introducing Redux Offline: Offline-First Architecture for Progressive Web Applications and React](https://hackernoon.com/introducing-redux-offline-offline-first-architecture-for-progressive-web-applications-and-react-68c5167ecfe0)
- [Introducing Redux VCR](https://medium.com/@joshuawcomeau/introducing-redux-vcr-cad57b37540a)
- [Redux-bug-reporter](https://github.com/dtschust/redux-bug-reporter) - A bug reporter and bug playback tool for redux

### Recoil

#### Documentation / News 📚

- [Recoil](https://recoiljs.org/)

### GraphQL

#### Documentation / News 📚

- [GraphQL docs](http://graphql.org/learn/)
- [Apollo Odyssey](https://odyssey.apollographql.com/) - Learn GraphQL with Apollo

#### Concepts / Articles 💡

- [Awesome-graphql](https://github.com/chentsulin/awesome-graphql) - Awesome list of GraphQL & Relay
- [A Front-End Developer's Guide to GraphQL](https://css-tricks.com/front-end-developers-guide-graphql/)
- [Adding GraphQL into Existing Express APIs](https://encryption.io/blog/adding-graphql-into-existing-express-apis/)
- [GraphQL vs REST: Caching](https://philsturgeon.uk/api/2017/01/26/graphql-vs-rest-caching/)
- [Why not use a JSON DSL instead of GraphQL?](https://blog.hasura.io/why-not-use-a-json-dsl-instead-of-graphql-d29f20cc97d2)
- [Is GraphQL The Future?](http://artsy.github.io/blog/2018/05/08/is-graphql-the-future/)
- [Reconciling GraphQL and Thrift at Airbnb](https://medium.com/airbnb-engineering/reconciling-graphql-and-thrift-at-airbnb-a97e8d290712)
- [The GraphQL Stack](https://www.graphqlstack.com/) - Ecosystem links, layer by layer
- [Why GraphQL: Advantages, Disadvantages & Alternatives](https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives/)
- [GraphQL: A success story for PayPal Checkout](https://medium.com/paypal-engineering/graphql-a-success-story-for-paypal-checkout-3482f724fb53)
- [Building a GraphQL API by Example: Restaurant Reviews](https://medium.com/open-graphql/building-a-graphql-api-by-example-restaurant-reviews-acd80d60ec77)
- [Lessons Learned Migrating APIs to GraphQL](https://mobile.twitter.com/swcarlosrj/status/1067288761585799169) - Twitter thread
- [GraphQL Stitching 101](http://artsy.github.io/blog/2018/12/11/GraphQL-Stitching/)
- [GraphQL Resolvers: Best Practices](https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55)
- [Our learnings from adopting GraphQL](https://medium.com/netflix-techblog/our-learnings-from-adopting-graphql-f099de39ae5f)
- [Lessons Learned Migrating APIs to GraphQL](https://medium.com/open-graphql/lessons-learned-migrating-apis-to-graphql-8a015d08b163)
- [Generate Javascript static types from GraphQL: TypeScript and Flow](https://medium.com/graphql-mastery/generate-javascript-static-types-from-graphql-typescript-and-flow-4d28b46b8d13)
- [Series of articles by Marc-André Giroux](https://medium.com/@__xuorig__)
- [Sofa — The best way to REST (is GraphQL)](https://medium.com/the-guild/sofa-the-best-way-to-rest-is-graphql-d9da6e8e7693)
- [The Problems of "Schema-First" GraphQL Server Development](https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3)
- [Principled GraphQL](https://principledgraphql.com/)
- [The rise of GraphQL “Overambitious API gateways”](https://medium.com/@__xuorig__/the-rise-of-graphql-overambitious-api-gateways-2c6f054e80a1)
- [The tension between data & use-case driven GraphQL APIs](https://medium.com/@__xuorig__/the-tension-between-data-use-case-driven-graphql-apis-8f982198653b)
- [A year of large scale GraphQL - the biggest takeaways](https://dev.to/peternycander/a-year-of-large-scale-graphql-the-biggest-takeaways-3d5n)
- [GraphQL & Caching: The Elephant in the Room](https://medium.com/@__xuorig__/graphql-caching-the-elephant-in-the-room-11a3df0c23ad)
- [GraphQL API Design Pitfall ](https://mobile.twitter.com/__xuorig__/status/1146073879540064256) - Twitter thread
- [The GraphQL Dataloader Pattern: Visualized](https://medium.com/@__xuorig__/the-graphql-dataloader-pattern-visualized-3064a00f319f)
- [Is GraphQL Still Relevant in an HTTP2 World?](https://medium.com/@__xuorig__/is-graphql-still-relevant-in-an-http2-world-64964f207b8)
- [How GraphQL can improve your development workflow](https://engineering.brigad.co/how-graphql-can-improve-your-development-workflow-d471f883778d)
- [Why We Don’t See Many Public GraphQL APIs](https://medium.com/@__xuorig__/why-we-dont-see-many-public-graphql-apis-ad972bcb201e)
- [Scaling GraphQL at PayPal](https://medium.com/paypal-engineering/scaling-graphql-at-paypal-b5b5ac098810)
- [Why You Can't Select All Fields on a Type in GraphQL](https://productionreadygraphql.com/why-you-cant-select-all-fields-on-a-type-in-graphql/amp/)
- [Hhow should we version GraphQL APIs?](https://productionreadygraphql.com/how-to-version-graphql/)
- [Handling GraphQL errors like a champ with unions and interfaces](https://blog.logrocket.com/handling-graphql-errors-like-a-champ-with-unions-and-interfaces/)
- [GraphQL in 2020: What's next?](https://productionreadygraphql.com/graphql-2020/)
- [gqless or gqlful?](https://medium.com/@__xuorig__/gqless-or-gqlful-ec36fe588a4b)
- [GraphQL Weekly](https://www.graphqlweekly.com/) - A weekly newsletter of the best news, articles and projects about GraphQL
- [Try GraphQL](https://trygql.formidable.dev/) - Purpose-built Demo APIs for GraphQL

#### Useful libraries 💾

- [Graphql-doctor](https://github.com/cap-collectif/graphql-doctor) - Prevent Breaking Changes in a GraphQL API with GitHub Checks
- [Eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql) - Check your GraphQL query strings against a schema
- [Gest](https://github.com/mfix22/gest) - A sensible GraphQL testing tool - test your GraphQL schema locally and in the cloud
- [graphql-request](https://github.com/prisma-labs/graphql-request) - Minimal GraphQL client supporting Node and browsers for scripts or simple apps

#### Related tools 🛠️

- [GraphiQL](http://graphql.org/swapi-graphql/) - In-browser IDE for writing, validating, and testing GraphQL queries
- [Introducing GraphQL for Visual Studio Code](https://www.prisma.io/blog/vscode-thieghu7shoo/)
- [DocQL](https://docql.io/) - Beautiful documentation & guides for your GraphQL APIs
- [GraphQL Nexus](https://nexus.js.org/) - Declarative, Code-First GraphQL Schemas for JavaScript/TypeScript
- [GraphQL Code Generator](https://graphql-code-generator.com/) - Generate code from your GraphQL schema with a single function call
- [GraphCDN](https://graphcdn.io/) - The fastest way to cache GraphQL
- [Envelop](https://www.envelop.dev/) - The missing GraphQL plugin system

### Apollo client

#### Documentation / News 📚

- [Apollo docs](https://www.apollographql.com/docs/react/index.html)
- [Apollo Client 2.0: Beyond GraphQL APIs](https://dev-blog.apollodata.com/apollo-client-2-0-beyond-graphql-apis-888807b53afe)
- [The future of state management](https://dev-blog.apollodata.com/the-future-of-state-management-dd410864cae2)
- [What's next - Query components](https://dev-blog.apollodata.com/whats-next-for-react-apollo-4d41ba12c2cb)
- [Write Queries, Not Code](https://agentconf-apollo.surge.sh/#/) - Slides by @peggyrayzis
- [Improved Apollo Client Devtools](https://dev-blog.apollodata.com/improved-apollo-client-devtools-eb43258f103f)
- [Zero-config GraphQL state management](https://dev-blog.apollodata.com/zero-config-graphql-state-management-27b1f1b3c2c3)
- [Introducing React Apollo 2.1](https://dev-blog.apollodata.com/introducing-react-apollo-2-1-c837cc23d926)
- [A first look at Async React + Apollo](https://dev-blog.apollodata.com/a-first-look-at-async-react-apollo-10a82907b48e)
- [Reducing our Redux code with React Apollo](https://dev-blog.apollodata.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a)
- [GraphQL Schema Design: Building Evolvable Schemas](https://dev-blog.apollodata.com/graphql-schema-design-building-evolvable-schemas-1501f3c59ed5)
- [Full Stack Error Handling with GraphQL and Apollo](https://dev-blog.apollodata.com/full-stack-error-handling-with-graphql-apollo-5c12da407210)
- [Using nullability in GraphQL](https://dev-blog.apollodata.com/using-nullability-in-graphql-2254f84c4ed7)
- [Testing Apollo’s Query Component](https://dev-blog.apollodata.com/testing-apollos-query-component-d575dc642e04)
- [GraphQL state management for React Native](http://chain-react-apollo.surge.sh/)
- [Introducing @defer in Apollo Server](https://blog.apollographql.com/introducing-defer-in-apollo-server-f6797c4e9d6e?gi=a5bebab9591)
- [Batching Client GraphQL Queries](https://blog.apollographql.com/batching-client-graphql-queries-a685f5bcd41b)
- [Introducing the Apollo GraphQL Platform](https://blog.apollographql.com/introducing-the-apollo-graphql-platform-8ef34bb269e5)
- [Announcing Apollo Client 2.5](https://blog.apollographql.com/announcing-apollo-client-2-5-c12230cabbb7)
- [A new Apollo docs experience](https://blog.apollographql.com/a-new-apollo-docs-experience-5645b9d56260)
- [Apollo Federation](https://blog.apollographql.com/apollo-federation-f260cf525d21)
- [What’s new in Apollo Client 2.6](https://blog.apollographql.com/whats-new-in-apollo-client-2-6-b3acf28ecad1)
- [Announcing managed federation](https://blog.apollographql.com/announcing-managed-federation-265c9f0bc88e)
- [Apollo Client, now with React Hooks](https://blog.apollographql.com/apollo-client-now-with-react-hooks-676d116eeae2)

#### Concepts / Articles 💡

- [React Native with Apollo— Part 1, Apollo Server](https://medium.com/react-native-training/react-native-with-apollo-server-and-client-part-1-efb7d15d2361)
- [React Native with Apollo — Part 2, Apollo Client](https://medium.com/react-native-training/react-native-with-apollo-part-2-apollo-client-8b4ad4915cf5#.wnfqtzsn6)
- [Apollo Client - the stuff no-one ever told ya](http://slides.com/alexeykureev/apollo-stuff-no-one-told-ya-4#/)
- [Why Apollo: Advantages, Disadvantages & Alternatives](https://www.robinwieruch.de/why-apollo-advantages-disadvantages-alternatives/)
- [How Airbnb is Moving 10x Faster at Scale with GraphQL and Apollo](https://medium.com/airbnb-engineering/how-airbnb-is-moving-10x-faster-at-scale-with-graphql-and-apollo-aa4ec92d69e2)
- [Automatically Generate TypeScript Definitions for GraphQL Queries with Apollo Codegen](https://medium.com/open-graphql/automatically-generate-typescript-definitions-for-graphql-queries-with-apollo-codegen-e73eae72b561)
- [A new approach to mocking GraphQL data](https://medium.freecodecamp.org/a-new-approach-to-mocking-graphql-data-1ef49de3d491)
- [Basics of Caching Data in GraphQL Apollo React client](https://levelup.gitconnected.com/basics-of-caching-data-in-graphql-7ce9489dac15?gi=b09e71c870ce)

#### Useful libraries 💾

- [React-apollo](https://github.com/apollographql/react-apollo) - React higher-order component for Apollo Client
- [Apollo Community Links](https://www.apollographql.com/docs/link/links/community.html)
- [Apollo-link-state](https://github.com/apollographql/apollo-link-state) - Manage your application state with Apollo!
- [Apollo-link-rest](https://github.com/apollographql/apollo-link-rest) - Use existing REST endpoints with GraphQL
- [Apollo-cache-persist](https://github.com/apollographql/apollo-cache-persist) - Simple persistence for all Apollo Cache implementations
- [Apollo-cache-control](https://github.com/apollographql/apollo-cache-control-js) - A GraphQL extension for cache control (for Node.js)
- [Apollo-codegen](https://github.com/apollographql/apollo-codegen) - Generate API code or type annotations based on a GraphQL schema and query documents
- [Apollo-tracing](https://github.com/apollographql/apollo-tracing-js) - A GraphQL extension for performance tracing
- [Yaba-social](https://github.com/allpwrfulroot/yaba-social) - Yet Another Boilerplate App showing off react-navigation and the excellent new tools from Apollo
- [Next-apollo](https://github.com/adamsoffer/next-apollo) - React higher-order component for integrating Apollo Client with Next.js

### Apollo server

#### Documentation / News 📚

- [Caching Strategies in a Federated GraphQL Architecture](https://www.apollographql.com/blog/caching-strategies-in-a-federated-graphql-architecture/)
- [Schema Services: Transitioning Towards a Federated Architecture](https://www.apollographql.com/blog/schema-services-transitioning-towards-a-federated-graphql-architecture/)
- [How Netflix Scales its API with GraphQL Federation (Part 1)](https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-1-ae3557c187e2)
- [How Netflix Scales its API with GraphQL Federation (Part 2)](https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-2-bbe71aaec44a)
- [Securing Your GraphQL API from Malicious Queries](https://www.apollographql.com/blog/securing-your-graphql-api-from-malicious-queries-16130a324a6b/)

### Gqless

#### Documentation / News 📚

- [Gqless docs](https://gqless.com/)
- [What's new in 2.0](https://gqless.com/intro/new-in-2) - Mutations, subscriptions, hooks, ...

### SWR

#### Documentation / News 📚

- [SWR docs](https://swr.vercel.app/) - React Hooks library for data fetching
- [Announcing SWR 1.0](https://swr.vercel.app/blog/swr-v1)

#### Useful libraries 💾

- [Swr-sync-storage](https://github.com/sergiodxa/swr-sync-storage) - Synchronize SWR cache with localStorage or sessionStorage to get offline cache

## Animations libraries

### D3.js

#### Documentation / News 📚

- [D3.js documentation](https://d3js.org/)

#### Concepts / Articles 💡

- [How to learn D3.js](https://wattenberger.com/blog/d3)
- [React + D3.js](https://wattenberger.com/blog/react-and-d3)

### Framer Motion

#### Concepts / Articles 💡

- [Learn Framer Motion in 10 tweets](https://mobile.twitter.com/willjohnsonio/status/1396857844973064202?s=12)

### React-spring

#### Documentation / News 📚

- [React-spring documentation](https://www.react-spring.io/)

### React-native-reanimated

#### Documentation / News 📚

- [React-native-reanimated documentation](https://docs.swmansion.com/react-native-reanimated/)
- [Animations in React Native: Performance and Reason-about-ability with Reanimated 2](https://formidable.com/blog/2021/reanimated-two/)

#### Useful libraries 💾

- [Moti](https://moti.fyi/) - Moti is the universal animation package for React Native (based on react-native-reanimated)

## Code quality

### Linters

#### Eslint

##### Useful libraries 💾

- [Eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers) - ESLint plugin to help with imports
- [Eslint-plugin-clean-regex](https://github.com/RunDevelopment/eslint-plugin-clean-regex) - ESLint plugin for writing better regular expressions

### Test frameworks

#### Jest

##### Documentation / News 📚

- [Jest docs](https://facebook.github.io/jest/)
- [Jest 27: New Defaults for Jest, 2021 edition](https://jestjs.io/blog/2021/05/25/jest-27)

##### Concepts / Articles 💡

- [How to Test React Components Using Jest](https://www.sitepoint.com/test-react-components-jest/)
- [The Right Way to test React Components](https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22#.bjitu9xkf)
- [How to Snapshot Test Everything in Your Redux App With Jest](https://hackernoon.com/how-to-snapshot-test-everything-in-your-redux-app-with-jest-fde305ebedea)
- [Unit Testing a React Redux App](https://giamir.com/unit-testing-a-react-redux-app)
- [Low effort, high value. Integration tests in Redux apps](https://hackernoon.com/low-effort-high-value-integration-tests-in-redux-apps-d3a590bd9fd5#.pya7gx9fr)
- [Redux Testing Step by Step: A Simple Methodology for Testing Business Logic](https://medium.com/@talkol/redux-testing-step-by-step-a-simple-methodology-for-testing-business-logic-8901670756ce)
- [So you think you don’t need unit tests? Think again](https://mobile.twitter.com/frontstuff_io/status/1050809148751925250) - Twitter thread
- [Data-driven Unit Tests with Jest](https://dev.to/flyingdot/data-driven-unit-tests-with-jest-26bh)
- [How to add testing to an existing project](https://kentcdodds.com/blog/how-to-add-testing-to-an-existing-project)
- [Make Your Jest Tests up to 20% Faster by Changing a Single Setting](https://ivantanev.com/make-jest-faster/)

##### Useful libraries 💾

- [Jest-codemods](https://github.com/skovhus/jest-codemods) - Codemods for migrating to Jest
- [React-fake-props](https://github.com/typicode/react-fake-props) - Automatically generate fake props for your React tests (Jest, Enzyme, ...)
- [Jest-watch-master](https://github.com/rickhanlonii/jest-watch-master) - Jest watch plugin for checking changes since master
- [Jest-in-case](https://github.com/atlassian/jest-in-case) - Jest utility for creating variations of the same test

#### Cypress

##### Documentation / News 📚

- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser
- [We're officially out of beta!](https://www.cypress.io/blog/2018/09/20/cypress-is-officially-out-of-beta/)
- [Visual testing for Cypress](https://go.percy.io/visual-testing/cypress)
- [Introducing the Cypress Component Test Runner– new in 7.0.0](https://cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner)

#### React-testing-library

##### Documentation / News 📚

- [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro/)

##### Concepts / Articles 💡

- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

##### Useful libraries 💾

- [React-native-testing-library](https://github.com/callstack/react-native-testing-library) - Simple React Native testing utilities helping you write better tests with less effort

#### Others

- [Sizzy](http://sizzy.co/) - Test your website on different device sizes at once
- [Stryker](https://stryker-mutator.io/) - Test your tests with mutation testing

## Bundling

### Bundlers

#### Webpack

##### Documentation / News 📚

- [Webpack docs](https://webpack.js.org/concepts/)
- [Webpack 4: Code Splitting, chunk graph and the splitChunks optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)
- [link rel=”prefetch/preload” in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)

##### Concepts / Articles 💡

- [Long-term caching of static assets with Webpack](https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95)
- [Why would I use a Webpack?](http://tinselcity.net/whys/packers)
- [Keep webpack Fast: A Field Guide for Better Build Performance](https://slack.engineering/keep-webpack-fast-a-field-guide-for-better-build-performance-f56a5995e8f1)
- [Put Your Webpack Bundle On A Diet - Part 1](https://www.contentful.com/blog/2017/10/10/put-your-webpack-on-a-diet-part-1/)
- [How to Fully Optimize Webpack 4 Tree Shaking](https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038)

##### Related tools 🛠️

- [BundlePhobia](https://bundlephobia.com/) - Find the cost of adding a npm package to your bundle
- [PackagePhobia](https://github.com/styfle/packagephobia) - Find the cost of adding a new dependency to your project

##### Useful libraries 💾

- [Webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap
- [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) - Visualize your bundles
- [Source-map-explorer](https://github.com/danvk/source-map-explorer) - Analyze and debug space usage through source maps
- [Easy Offline First Apps With Webpack's Offline Plugin](https://dev.to/kayis/easy-offline-first-apps-with-webpacks-offline-plugin)
- [Sw-precache-webpack-plugin](https://github.com/goldhand/sw-precache-webpack-plugin) - Webpack plugin that generates a service worker using sw-precache that will cache webpack's bundles' emitted assets
- [Webpackmonitor](https://github.com/webpackmonitor/webpackmonitor) - A tool for monitoring webpack optimization metrics through the development process
- [Image-trace-loader](https://github.com/EmilTholin/image-trace-loader) - Loads images and exports traced outlines as image/svg+xml URL-encoded data
- [Guess.js](https://github.com/guess-js/guess) - Libraries & tools for enabling Machine Learning driven user-experiences on the web
- [Webpackbar](https://github.com/nuxt/webpackbar) - Elegant ProgressBar and Profiler for Webpack 3 and 4
- [Webpack-notifier](https://github.com/Turbo87/webpack-notifier) - webpack + node-notifier = build status system notifications
- [Imagemin-webpack-plugin](https://github.com/Klathmon/imagemin-webpack-plugin) - Plugin to compress images with imagemin
- [Webpack-merge](https://github.com/survivejs/webpack-merge) - Merge designed for Webpack (MIT)
- [Terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) - Terser plugin
- [Static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin) - Minimal, unopinionated static site generator powered by webpack
- [Emoji-favicon-webpack-plugin](https://github.com/trevorblades/emoji-favicon-webpack-plugin) - Let webpack generate an emoji favicon for you
- [Bundlesize](https://github.com/siddharthkp/bundlesize) - Keep your bundle size in check

#### Rollup

##### Documentation / News 📚

- [Rollup docs](https://rollupjs.org/) - Next-generation ES6 module bundler

##### Concepts / Articles 💡

- [Introducing Preconstruct 🎁](https://medium.com/the-thinkmill/introducing-preconstruct-26996f23de2a)

#### Parcel

##### Documentation / News 📚

- [Parcel docs](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Parcel v1.9.0 — Tree Shaking, 2x faster watcher, and more!](https://medium.com/@devongovett/parcel-v1-9-0-tree-shaking-2x-faster-watcher-and-more-87f2e1a70f79)
- [Parcel v1.10.0 — Babel 7, Flow, Elm, and more!](https://medium.com/@devongovett/parcel-v1-10-0-babel-7-flow-elm-and-more-c20736553573)

##### Concepts / Articles 💡

- [ParcelJS: How simple really is it?](https://itnext.io/parceljs-how-simple-really-is-it-679a4feba69d?gi=12888863d7c7)
- [Switching to Parcel from Webpack](https://logrocket.com/blog/switching-to-parcel-from-webpack/)

#### Others

- [Comparing the New Generation of Build Tools](https://css-tricks.com/comparing-the-new-generation-of-build-tools/)

### Transpilers and optimizers

#### Babel

##### Documentation / News 📚

- [Babel docs](https://babeljs.io/)
- [Babel 7 released](https://babeljs.io/blog/2018/08/27/7.0.0)

##### Useful libraries 💾

- [Babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) - Enables zero-config, importable babel plugins

#### Prepack

##### Concepts / Articles 💡

- [A Gentle Introduction to Prepack (Part 1)](https://gist.github.com/gaearon/d85dccba72b809f56a9553972e5c33c4)

## Hosting providers

### Netlify

- [Netlify docs](https://www.netlify.com/docs/)
- [10 Netlify features to surprise and delight](https://medium.com/netlify/10-netlify-features-to-surprise-and-delight-225e846b7b21)
- [Incremental Static Regeneration: Its Benefits and Its Flaws](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/)
- [Distributed Persistent Rendering (DPR)](https://github.com/jamstack/jamstack.org/discussions/549) - RFC
- [Faster builds for large sites on Netlify with On-demand Builders: Now in early access](https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/)

### Vercel

- [Vercel docs](https://vercel.com/home)
- [Firebase vs. Vercel](https://medium.com/better-programming/firebase-vs-vercel-aka-zeit-now-2020-7f5ab18d865f)
- [Enable Suspect Commits, Unminify JS, and Track Releases with Vercel and Sentry](https://blog.sentry.io/2020/08/04/enable-suspect-commits-unminify-js-and-track-releases-with-vercel-and-sentry)

### Others

- [Fleek](https://fleek.co/)

## Continuous development platforms

- [CircleCI](https://circleci.com/)
- [Drone](https://www.drone.io/)
- [BuildKite](https://buildkite.com/)

## SaaS useful to front-end developers

### BaaS (Back-end as a service)

#### AWS Amplify

##### Documentation / News 📚

- [AWS Amplify docs](https://docs.amplify.aws/)
- [AWS Amplify Sandbox](https://sandbox.amplifyapp.com/getting-started)

##### Concepts / Articles 💡

- [How to Design Almost Any Backend and Deploy It to AWS with No Code](https://www.freecodecamp.org/news/design-and-deploy-backend-with-amplify-sandbox/)
- [Introducing the AWS Amplify Admin UI: Create an Application Backend in Clicks](https://welearncode.com/intro-amplify-admin-ui/)
- [Next.js-amplify-workshop](https://github.com/dabit3/next.js-amplify-workshop)
- [Nextjs-aws-dynamodb](https://github.com/leerob/nextjs-aws-dynamodb)

##### Useful libraries 💾

- [AWS Amplify SDK](https://github.com/aws-amplify/amplify-js)

#### Google Firebase

##### Documentation / News 📚

- [Google Firebase docs](https://firebase.google.com/docs)

##### Concepts / Articles 💡

- [Authenticated server-side rendering with Next.js and Firebase](https://colinhacks.com/essays/nextjs-firebase-authentication)
- [Next-firebase-ssr](https://github.com/colinhacks/next-firebase-ssr)

##### Useful libraries 💾

- [Google Firebase SDK](https://github.com/firebase/firebase-js-sdk)

#### Supabase

##### Concepts / Articles 💡

- [Firebase vs. Supabase: Which is better?](https://blog.logrocket.com/firebase-vs-supabase-which-is-better/)

#### Prisma

##### Documentation / News 📚

- [Prisma docs](https://www.prisma.io/)

##### Concepts / Articles 💡

- [Productive Development With Prisma’s Zero-Cost Type Safety](https://dev.to/prisma/productive-development-with-prisma-s-zero-cost-type-safety-4od2)

#### Others

- [@databases](https://www.atdatabases.org/) - Query SQL Databases using Node.js and TypeScript

### Others

- [Magic - Auth simplified](https://magic.link/) - One SDK for passwordless, WebAuthn, and social login - fully customizable
- [Insights](https://getinsights.io/) - Privacy-Focused Analytics Platform For Developers
- [Cusdis](https://cusdis.com/) - Lightweight, privacy-first, open-source comment system

## CMS

### Strapi

#### Documentation / News 📚

- [Strapi docs](https://strapi.io/)
- [Announcing Strapi v3.6 with Internationalization](https://strapi.io/blog/announcing-content-internationalization-v3-6)

## Website generators

### Styleguide generators

#### Styleguidist

- [React Styleguidist docs](https://react-styleguidist.js.org/) - Isolated React component development environment with a living style guide

#### Storybook

- [Storybook docs](https://storybook.js.org/) - The UI development environment you'll love to use
- [React Native + Storybook = ❤️](https://medium.com/@erinfoox/react-native-storybook-%EF%B8%8F-f22fa8676333)
- [Chroma articles](https://blog.hichroma.com/?gi=cd867eb8a58d) - Storybook tutorials by Chroma

#### Others

- [Playroom](https://github.com/seek-oss/playroom) - Design with JSX, powered by your own component library
- [a11y-color-tokens](https://github.com/5t3ph/a11y-color-tokens) - Generate accessible UI colors from your base color tokens

### Documentation generators

- [GitBook](https://www.gitbook.com/) - Documentation your users will love!
- [Docz](https://www.docz.site/) - It has never been so easy to document your things!
- [React-docgen](https://github.com/reactjs/react-docgen) - A CLI and toolbox to extract information from React component files for documentation generation purposes
- [Nextra](https://nextra.vercel.app/) - Nextra is a Next.js based static site generator. 0 lines of code needed.

### Presentation generators

#### Spectacle

- [Spectacle docs](https://github.com/FormidableLabs/spectacle)
- [Spectacle-code-slide](https://github.com/jamiebuilds/spectacle-code-slide)
- [Spectacle-terminal](https://github.com/elijahmanor/spectacle-terminal)
- [Spectacle-image-slide](https://github.com/FezVrasta/spectacle-image-slide)
- [Presentations With Spectacle — How I Modularize My Deck](https://hackernoon.com/presentations-with-spectacle-how-i-modularize-my-deck-775c082cef08)

#### Others

- [MDX](https://mdxjs.com/) - Markdown for the component era
- [Mdx-deck docs](https://github.com/jxnblk/mdx-deck)
- [Code-surfer](https://github.com/pomber/code-surfer) - React component for scrolling, zooming and highlighting code
- [Shiki-twoslash](https://shikijs.github.io/twoslash/) - You take some Shiki, add a hint of TypeScript compiler, and tada! incredible static code samples

## Advanced concepts

### Design Systems

#### Concepts / Articles 💡

- [Living Design System](https://medium.com/salesforce-ux/living-design-system-3ab1f2280ef7)
- [Design tokens for dummies](https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71)
- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [What is a Design System?](https://medium.muz.li/what-is-a-design-system-1e43d19e7696)
- [Welcome to Design Systems](https://www.designsystems.com/)
- [Accessibility, a powerful design tool](https://slack.design/accessibility-a-powerful-design-tool-22f5e6d46278)
- [Design System in Figma](https://designcode.io/design-system-in-figma)
- [Everything you need to know about Design Systems](https://medium.com/ideas-by-idean/everything-you-need-to-know-about-design-systems-f6e82982be27)
- [ReactiveConf 2019 - Mark Dalgleish: Rethinking Design Practices](https://www.youtube.com/watch?feature=youtu.be&v=jnV1u67_yVg)
- [Everything I Know About Style Guides, Design Systems, and Component Libraries](https://leerob.io/blog/style-guides-component-libraries-design-systems)

#### Useful libraries 💾

- [Zeroheight](https://zeroheight.com/) - Document your design system, together
- [Design System Playground](https://design-system-playground.netlify.com/)

#### Design Systems in the wild 🌈

- [Design Systems France](https://www.designsystems.fr/liste-des-designs-systems-francais) - Liste des Design Systems français
- [Awesome-design-systems](https://github.com/alexpate/awesome-design-systems) - A collection of awesome design systems
- [Introducing Base Web, Uber’s New Design System for Building Websites in React](https://eng.uber.com/introducing-base-web/)
- [Braid design system](https://github.com/seek-oss/braid-design-system) - Themeable design system for the SEEK Group

### State machines

#### Concepts / Articles 💡

- [Welcome to the world of Statecharts](https://statecharts.github.io/)
- [Implementing a simple state machine library in JavaScript](https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript)
- [The FaceTime Bug and the Dangers of Implicit State Machines](https://medium.com/@DavidKPiano/the-facetime-bug-and-the-dangers-of-implicit-state-machines-a5f0f61bdaa2)

#### Useful libraries 💾

- [XState](https://github.com/davidkpiano/xstate) - State machines and statecharts for the modern web
- [XState catalogue](https://xstate-catalogue.com/) - Collection of professionally designed state machines you can drop into your projects

### Server Side Rendering

#### Concepts / Articles 💡

- [You might (not) need a Server Side Rendering framework](https://adrien.harnay.me/you-might-not-need-a-server-side-rendering-framework/)
- [Server-Side Rendering and Code Splitting with React-Router 4 and Webpack 2](https://blog.emilecantin.com/web/react/javascript/2017/05/16/ssr-react-router-4-webpack-code-split.html)
- [An Almost Static Stack](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319)
- [Code Cracked for Code-Splitting + SSR in Reactlandia: React Universal Component + Webpack Flush Chunks and more](https://medium.com/faceyspacey/code-cracked-for-code-splitting-ssr-in-reactlandia-react-loadable-webpack-flush-chunks-and-1a6b0112a8b8)
- [Server-Render like a Pro /w Redux-First Router in 10 steps](https://medium.com/faceyspacey/server-render-like-a-pro-w-redux-first-router-in-10-steps-b27dd93859de)
- [ReactCasts #13 - Server Side Rendering: Data Fetching & Routing](https://www.youtube.com/watch?feature=youtu.be&v=duhudXkHRf4&a=&app=desktop)
- [Server Rendering - Redux](http://redux.js.org/docs/recipes/ServerRendering.html)
- [What’s New With Server-Side Rendering in React 16](https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67)
- [What’s Server Side Rendering and do I need it?](https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38)
- [Rendering on the Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
- [Server-Rendering Responsively](https://artsy.github.io/blog/2019/05/24/server-rendering-responsively/)

#### SSR Boilerplates

- [Ssr-starter-pack](https://github.com/Brigad/ssr-starter-pack) - A starter pack to help you implement your handmade solution for SSR
- [React-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example) - A starter boilerplate for a universal webapp using express, react, redux, webpack, and react-transform
- [React-isomorphic-render (notes on performances)](https://github.com/catamphetamine/react-isomorphic-render/blob/master/PERFORMANCE.md) - Isomorphic rendering with React, Redux, React-router

#### SSR Frameworks

- [Gatsby.js](https://github.com/gatsbyjs/gatsby) - Blazing fast static site generator for React
- [Razzle](https://github.com/jaredpalmer/razzle) - Create server-rendered universal JavaScript applications with no configuration
- [React-server](https://github.com/redfin/react-server) - Blazing fast page load and seamless navigation
- [After.js](https://github.com/jaredpalmer/after.js) - Next.js-like framework for server-rendered React apps built with React Router 4
- [Next.js vs. Gatsby vs. Create React App](https://leerob.io/blog/nextjs-gatsby-create-react-app)

### Performance

- [Front-end-checklist](https://github.com/thedaviddias/Front-End-Checklist) - The perfect Front-End Checklist for modern websites and meticulous developers

#### Illusion of speed

- [The Illusion of Speed](https://paulbakaus.com/tutorials/performance/the-illusion-of-speed/)
- [Designing for the Appearance of Speed](https://medium.com/mobify-design-team/designing-for-the-appearance-of-speed-aaabc7f568c2)
- [Speed is the killer feature](https://bdickason.com/posts/speed-is-the-killer-feature/)

#### Network

- [Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [The Critical Request](https://css-tricks.com/the-critical-request/)
- [Performance Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference)
- [How to Simulate Mobile Devices with Device Mode in Chrome](https://www.sitepoint.com/how-to-simulate-mobile-devices-with-device-mode-in-chrome/)
- [Using the Paint Timing API](https://css-tricks.com/paint-timing-api/)
- [Optimising the front end for the browser](https://dev.to/sanjsanj/optimising-the-front-end-for-thebrowser)
- [Measuring web performance; it’s really quite simple](https://hackernoon.com/measuring-web-performance-its-really-quite-simple-adeda8f7f39e)
- [Web fonts: when you need them, when you don’t](https://hackernoon.com/web-fonts-when-you-need-them-when-you-dont-a3b4b39fe0ae)
- [HTTP/2 push is tougher than I thought](https://jakearchibald.com/2017/h2-push-tougher-than-i-thought/)
- [Why you should be focusing on the 99th percentile when tracking request performance](https://spectrum.chat/thread/964ae5c3-1b82-47e9-b8b2-23ee7a5954e5)
- [Measuring Wikipedia page load times](https://phabricator.wikimedia.org/phame/live/7/post/83/measuring_wikipedia_page_load_times/)
- [Converting Images To WebP](https://www.smashingmagazine.com/2018/07/converting-images-to-webp/)
- [The three browsers holding JavaScript back the most](https://mobile.twitter.com/jamiebuilds/status/1022568918949408768)
- [Brotli Compression – How Much Will It Reduce Your Content?](https://paulcalvano.com/index.php/2018/07/25/brotli-compression-how-much-will-it-reduce-your-content/)
- [Web performance basics](https://www.learnperf.com/)
- [How Image Optimization Decreased my Website’s Page Weight by 62%](https://medium.freecodecamp.org/image-optimization-558d9f449e3)
- [The Low Hanging Fruit of Web Performance](http://mediatemple.net/blog/tips/low-hanging-fruit-web-performance/)
- [The Cost Of JavaScript In 2018](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)
- [Fast By Default: Modern Loading Best Practices (Chrome Dev Summit 2017)](https://www.youtube.com/watch?feature=youtu.be&v=_srJ7eHS3IM)
- [Why Performance Matters](https://developers.google.com/web/fundamentals/performance/why-performance-matters/)
- [Speed is now a landing page factor for Google Search and Ads](https://developers.google.com/web/updates/2018/07/search-ads-speed)
- [10 things I learned making the fastest site in the world](https://hackernoon.com/10-things-i-learned-making-the-fastest-site-in-the-world-18a0e1cdf4a7)
- [Idle Until Urgent](https://philipwalton.com/articles/idle-until-urgent/)
- [Improving Client-Side Performance](https://tj.ie/improving-client-side-performance/)
- [Automating image optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/)
- [State of the Web: Top Image Optimization Strategies](https://dev.to/dougsillars/state-of-the-web-top-image-optimization-strategies-k0e)
- [Start Performance Budgeting](https://medium.com/@addyosmani/start-performance-budgeting-dabde04cf6a3)
- [ImgBot](https://github.com/marketplace/imgbot)
- [A Netflix Web Performance Case Study](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9)
- [CSS and Network Performance](https://csswizardry.com/2018/11/css-and-network-performance)
- [Fast load times by web.dev](https://web.dev/fast)
- [Reducing CSS bundle size 70% by cutting the class names and using scope isolation](https://medium.freecodecamp.org/reducing-css-bundle-size-70-by-cutting-the-class-names-and-using-scope-isolation-625440de600b)
- [Your Choice of Image formats for Websites and Web Apps](https://medium.com/swlh/your-choice-of-image-formats-for-websites-and-web-apps-73856e15305f)
- [How to Load Multiple Google Fonts in One URL Request](https://shellcreeper.com/how-to-load-multiple-google-font-in-one-url-request/)
- [The Font Loading Checklist](https://www.zachleat.com/web/font-checklist/)
- [ImageOptim](https://imageoptim.com/)
- [Essential Image Optimization](https://images.guide/)
- [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
- [The Complete Guide to Lazy Loading Images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/)
- [Load Scripts in Your React Bundle Asynchronously](http://blog.theodo.fr/2017/07/load-scripts-react-bundle-asynchronously-win-seo/)
- [Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/)
- [Modern Asynchronous CSS Loading](https://www.filamentgroup.com/lab/async-css.html)
- [Async and defer, the difference](https://dev.to/thomasbnt/async-and-defer-the-difference-1542)
- [Hard Costs of Third-Party Scripts](https://daverupert.com/2018/10/hard-costs-of-third-party-scripts/)
- [How we reduced our initial JS/CSS size by 67%](https://dev.to/goenning/how-we-reduced-our-initial-jscss-size-by-67-3ac0)
- [Polyfill as needed with polyfill-service](https://blog.kentcdodds.com/polyfill-as-needed-with-polyfill-service-35f0ff306a26)
- [An introduction to HTTP/2 for SEOs](https://www.distilled.net/resources/an-introduction-to-http2-for-seos/)
- [Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
- [Reduce JavaScript Payloads with Code Splitting](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/)
- [Brotli compression delivered from AWS](https://medium.com/@felice.geracitano/brotli-compression-delivered-from-aws-7be5b467c2e1)
- [AWS CloudFront Compression using Lambda@Edge - where is brotli?!](https://medium.com/@kazaz.or/aws-cloudfront-compression-using-lambda-edge-where-is-brotli-6d296f41f784)
- [To push, or not to push?!](https://noti.st/patrickhamann/y2sScd/to-push-or-not-to-push) - A journey of resource loading in the browser
- [Can You Afford It?: Real-world Web Performance Budgets](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)
- [Inline SVG... Cached](https://css-tricks.com/inline-svg-cached/)
- [Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)
- [Improving third-party web performance at The Telegraph](https://medium.com/the-telegraph-engineering/improving-third-party-web-performance-at-the-telegraph-a0a1000be5)
- [Extract critical CSS](https://web.dev/extract-critical-css?authuser=1)
- [Trim the Fat From Your Bundles Using Webpack Analyzer & React Lazy/Suspense](https://www.wix.engineering/post/trim-the-fat-from-your-bundles-using-webpack-analyzer-react-lazy-suspense)
- [The Fastest Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)
- [AVIF and WebP encoding quality settings](https://www.industrialempathy.com/posts/avif-webp-quality-settings/)
- [AVIF has landed](https://jakearchibald.com/2020/avif-has-landed/)
- [Time for Next-Gen Codecs to Dethrone JPEG](https://cloudinary.com/blog/time_for_next_gen_codecs_to_dethrone_jpeg)
- [How to Convince Your Boss to Care About Speed](https://calibreapp.com/blog/convince-your-boss-about-performance)

#### Input / Throughput

- [Deploying ES2015+ Code in Production Today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)
- [JavaScript Start-up Performance](https://medium.com/reloading/javascript-start-up-performance-69200f43b201)
- [Performance-tuning a React application](https://codeburst.io/performance-tuning-a-react-application-f480f46dc1a2)
- [Infinite List and React](http://itsze.ro/blog/2017/04/09/infinite-list-and-react.html)
- [Rearchitecting Airbnb’s Frontend](https://medium.com/airbnb-engineering/rearchitecting-airbnbs-frontend-5e213efc24d2)
- [React is Slow, React is Fast: Optimizing React Apps in Practice](https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba)
- [React at Light Speed](https://blog.vixlet.com/react-at-light-speed-78cd172a6411?gi=3765f3a19d80)
- [Using Purecomponent To Prevent Wasted Renders In React](https://ashishchaudhary.in/using-purecomponent-to-prevent-wasted-renders-in-react)
- [Optimize React Performance](https://www.quora.com/Is-there-any-difference-between-optimization-and-optimisation)
- [High Performance React: 3 New Tools to Speed Up Your Apps](https://medium.freecodecamp.org/make-react-fast-again-tools-and-techniques-for-speeding-up-your-react-app-7ad39d3c1b82)
- [Two Tips to Improve Performance by 30% With React and Webpack](http://engineering.teacherspayteachers.com/2017/08/16/two-tips-to-improve-performance-by-30-with-react-and-webpack.html)
- [Introducing React Loadable](https://medium.com/@thejameskyle/react-loadable-2674c59de178)
- [Perf-hoc](https://github.com/viktorbergehall/perf-hoc) - Visualize and detect unnecessary rendering and performance issues in React
- [Performance tests between several styling libraries](http://necolas.github.io/react-native-web/benchmarks/)
- [Deploying ES2015+ Code in Production Today](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)
- [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)
- [Things that should not end up in production clientside code](https://mobile.twitter.com/henrikjoreteg/status/1032879748387459072) - Twitter thread
- [Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)
- [React Performance Fixes on Airbnb Listing Pages](https://medium.com/airbnb-engineering/recent-web-performance-fixes-on-airbnb-listing-pages-6cd8d93df6f4)
- [Progressive React](https://houssein.me/progressive-react) - Want to make your React site more performant? Here's a quick checklist
- [Are long JavaScript tasks delaying your Time to Interactive?](https://web.dev/long-tasks-devtools/?authuser=1)
- [Making Instagram.com faster: Part 1](https://instagram-engineering.com/making-instagram-com-faster-part-1-62cc0c327538)
- [Making Instagram.com faster: Part 3 - cache first](https://instagram-engineering.com/making-instagram-com-faster-part-3-cache-first-6f3f130b9669)
- [Making Instagram.com faster: Part 4 - code size and execution optimizations](https://instagram-engineering.com/making-instagram-com-faster-code-size-and-execution-optimizations-part-4-57668be796a8)
- [Google Metrics](https://web.dev/metrics/) - Measure and optimize performance and user experience
- [Estimator.dev](https://estimator.dev/) - Find out how much turning on modern JS could save
- [How We Improved SmashingMag Performance](https://www.smashingmagazine.com/2021/01/smashingmag-performance-case-study/)
- [Making GitHub’s new homepage fast and performant](https://github.blog/2021-01-29-making-githubs-new-homepage-fast-and-performant/)
- [The Best Font Loading Strategies and How to Execute Them](https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/)
- [Improve Page Rendering Speed Using Only CSS](https://blog.bitsrc.io/improve-page-rendering-speed-using-only-css-a61667a16b2)
- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91)

#### Core Web Vitals

- [Google Web Vitals best practices for single-page apps](https://blog.logrocket.com/google-web-vitals-single-page-apps/)
- [How Core Web Vitals Will Impact Google Rankings in 2021](https://vercel.com/blog/core-web-vitals)
- [How We Improved Our Core Web Vitals (Case Study)](https://www.smashingmagazine.com/2021/05/core-web-vitals-case-study/)

#### Performance accessibility

- [Building the most inaccessible site possible with a perfect Lighthouse score](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/)

#### Progressive Web Apps

- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
- [How to turn your website into a PWA](https://mxb.at/blog/how-to-turn-your-website-into-a-pwa/)
- [Service Workers](https://flaviocopes.com/service-workers/)
- [A React And Preact Progressive Web App Performance Case Study: Treebo](https://medium.com/dev-channel/treebo-a-react-and-preact-progressive-web-app-performance-case-study-5e4f450d5299)
- [Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)
- [Progressive Web App with Webpack](https://dev.to/remejuan/progressive-web-app-with-webpack-87p)
- [Why Progressive Web Apps Should Be Your Business Choice Over a Native App](https://love2dev.com/pwa/progressive-web-app-vs-native/)
- [Every website deserves a service worker](https://dev.to/bnevilleoneill/every-website-deserves-a-service-worker-3gbj?fbclid=IwAR2WfZnoVwgDX4yMcyOwzYWKzJsSj-LZkZdMawrWi8tPYclPmXsWbxkOSFI)
- [Speed up your App with Web Workers](https://kentcdodds.com/blog/speed-up-your-app-with-web-workers)
- [Workerize](https://github.com/developit/workerize) - Run a module in a Web Worker
- [Workerize-loader](https://github.com/developit/workerize-loader) - Automatically move a module into a Web Worker (Webpack loader)

#### Performance benchmarks 💯

- [How To Think About Speed Tools](https://developers.google.com/web/fundamentals/performance/speed-tools/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Lighthouse-ci](https://github.com/ebidel/lighthouse-ci) - Run Lighthouse in CI using Docker
- [Test My Site With Google](https://testmysite.withgoogle.com/)
- [Winning on Mobile by Google](https://www.thinkwithgoogle.com/feature/mobile/)
- [Google Mobile Optimisation Test](https://search.google.com/test/mobile-friendly)
- [Real User Experience Test](https://ruxt.dexecure.com/)
- [Website Speed Test Image Analysis Tool](https://webspeedtest.cloudinary.com/)
- [Page Weight by Imgx](https://pageweight.imgix.com/)
- [Custom site performance reports with the CrUX Dashboard](https://developers.google.com/web/updates/2018/08/chrome-ux-report-dashboard)
- [Lightest.app](https://lightest.app/) - Visualize web performance against competitors
- [Sitespeed](https://www.sitespeed.io/)
- [Instant Vitals](https://vitals.dev/) - Open source tools to track Web Vitals metrics in the field

### SEO

#### Concepts / Articles 💡

- [Step Your Meta Game Up](https://dev.to/rpalo/step-your-meta-game-up)
- [How To Use H1-H6 HTML Elements Properly](https://www.hobo-web.co.uk/headers/)
- [ContentKing Academy](https://www.contentkingapp.com/academy/)
- [The Definitive Guide To SEO In 2019](https://backlinko.com/seo-this-year)
- [SEO component for structured data](https://mobile.twitter.com/signalnerve/status/1098691569362849799)
- [The End of AMP](https://www.lafoo.com/the-end-of-amp/)

#### SEO benchmarks 💯

- [SEO Checker](https://suite.seotesteronline.com/seo-checker)
- [Hey Meta](http://www.heymeta.com/) - Quickly check & build your meta tags
- [Checkbot](https://www.checkbot.io/) - Find broken links, duplicate titles, insecure pages, invalid HTML/CSS/JS & more

### Security

#### Concepts / Articles 💡

- [Please Stop Using Local Storage](https://dev.to/rdegges/please-stop-using-local-storage-1i04)
- [Third party CSS is not safe](https://jakearchibald.com/2018/third-party-css-is-not-safe/)
- [Here's Why Your Static Website Needs HTTPS](https://www.troyhunt.com/heres-why-your-static-website-needs-https/)
- [ScottHelme.uk](https://scotthelme.co.uk/) - Blog about web security
- [Security checklist](https://securitycheckli.st/) - Be safe on the internet
- [Microsoft security chief: IE is not a browser, so stop using it as your default](https://www.zdnet.com/article/microsoft-security-chief-ie-is-not-a-browser-so-stop-using-it-as-your-default/)

#### Security benchmarks 💯

- [Security headers](https://securityheaders.com/) - Audit your website for performances
- [Observatory by Mozilla](https://observatory.mozilla.org/)

## Misc. Tools

### Images, videos, assets, colors, fonts

- [Unsplash](https://unsplash.com/) - Collection of beautiful, high resolution, free (and free of rights) images
- [Coverr](https://coverr.co/) - Beautiful Free Stock Video Footage
- [Carbon](https://carbon.now.sh/) - Create and share beautiful images of your source code
- [Fontstorage](https://fontstorage.com/) - Collection of free fonts for your websites
- [Terminalizer](https://github.com/faressoft/terminalizer) - Record your terminal and generate animated gif images
- [unDraw](https://undraw.co/) - Open-source illustrations for every project you can imagine and create
- [DrawKit](https://www.drawkit.io/) - Beautiful, free illustrations. Updated weekly
- [Emoji-as-a-service](https://emoji.veryfunparty.com/) - Service that returns a high-res, predictable emoji image for a given URL
- [Image Color Picker](https://image-color.com/) - Find your perfect color palette by uploading an image you like
- [Coolors](https://coolors.co/) - Create the perfect palette or get inspired by thousands of beautiful color schemes
- [Remove.bg](https://www.remove.bg) - Remove image background
- [Unscreen](https://www.unscreen.com/) - Remove video background
- [Material Icons](https://fonts.google.com/icons) - Free (and free of right) icons from Google
- [Iconic](https://iconic.app/) - Free, “do wtf you want with” pixel-perfect icons
- [SuperTinyIcons](https://github.com/edent/SuperTinyIcons) - Under 1KB each! Super Tiny Icons are miniscule SVG versions of your favourite website and app logos
- [Boring avatars](https://boringavatars.com/) - Generates custom, SVG-based, round avatars from any username and color palette

### Productivity

- [A Soft Murmur](http://asoftmurmur.com/) - Ambient sounds to wash away distraction
- [Quick terminal tip](https://dev.to/voter101/quick-terminal-tip-1can)
- [Linear](https://linear.app/) - The issue tracking tool you'll enjoy using
- [Raycast](https://raycast.com/) - Raycast lets you control your tools with a few keystrokes

### Mock APIs

- [Reqres](https://reqres.in/) - A hosted REST-API ready to respond to your AJAX requests.
- [Mocky](https://www.mocky.io/) - Easily test your REST-powered web services with an HTTP responses generator
- [Kanye.rest](https://kanye.rest/) - A free REST API for random Kanye West quotes (Kanye as a Service)

### Regex testers

- [Regexr](https://regexr.com/) - Regex validator / tutorials
- [Regex101](https://regex101.com/) - Regex validator / tutorials

### IDEs

#### Visual Studio Code

- [Visual Studio Code](https://code.visualstudio.com/)
- [VSCode Themes](https://vscodethemes.com/)
- [Snipsnap Templates](https://github.com/snipsnapdev/snipsnap/tree/master/templates) - Manage, share and use code templates with cloud UI and VS Code Extension
- [GitHub Copilot](https://github.com/github/copilot-preview)

#### Online IDEs

- [Awesome-online-ide](https://github.com/styfle/awesome-online-ide) - A list of awesome online development environments
- [CodeSandbox](https://codesandbox.io/) - The online code editor for React
- [Stackblitz](https://stackblitz.com/) - Online VS Code IDE for Modern Web Applications
- [Demoboard: a live editor with every package on NPM](https://frontarm.com/articles/announcing-demoboard/)

### Design tools

#### Sketch

- [Sketching in the Browser](https://medium.com/seek-blog/sketching-in-the-browser-33a7b7aa0526)
- [React-sketchapp](https://github.com/airbnb/react-sketchapp) - Render React components to Sketch
- [Html-sketchapp](https://github.com/brainly/html-sketchapp) - HTML to Sketch export solution

#### Framer X

- [Bringing Design System Components from Production into Framer X](https://blog.prototypr.io/bringing-design-system-components-from-production-into-framer-x-786e89be2250)

#### Others

- [ColorBox by Lyft Design](https://www.colorbox.io/)
- [Visly](https://visly.app/blogposts/visly--build-react-components-visually) - Build React components visually

### Presentation tools

- [Kap](https://getkap.co/) - Capture your screen
- [KeyCastr](https://github.com/keycastr/keycastr) - An open-source keystroke visualizer
- [Codetour](https://github.com/microsoft/codetour) - VS Code extension that allows you to record and playback guided tours of codebases, directly within the editor

### Others

- [Flycut](https://github.com/TermiT/Flycut) - Clean and simple clipboard manager for developers
- [Transfer.sh](https://transfer.sh/) - Easy file sharing from the command line
- [Snapdrop](https://snapdrop.net/) - Like Airdrop, but on the web
- [Wormhole](https://wormhole.app/) - Simple, private file sharing
- [IFTTT](https://ifttt.com/) - Applets linked to the services you love
- [ConferCal](https://www.confercal.com/calendars/code) - A conference calendar for developers and other people in tech
- [jsonmatic](https://jsonmatic.com/) - Transform a CSV into a JSON
- [FracturedJson](https://j-brooke.github.io/FracturedJson/) - A JSON formatter that produces human-readable but fairly compact output
- [How HTTPS Works](https://howhttps.works/)
- [How DNS works](https://howdns.works/)
- [OutFrontJS](https://github.com/paanSinghCoder/OutFrontJS) - Console for mobile browsers

## Developer insights

### Software insights

- [Buggy Software, Loyal Users: Why Bug Reporting is Key To User Retention](https://dev.to/itamarst/buggy-software-loyal-users-why-bug-reporting-is-key-to-user-retention)
- [User Tests Will Make You a Better Developer](https://dev.to/aprilwensel/user-tests-will-make-you-a-better-developer)
- [Don't leave broken windows](https://dev.to/raulavila/dont-leave-broken-windows)
- [Code Rot](https://henrikwarne.com/2017/04/28/code-rot/)
- [Web Caching Explained by Buying Milk at the Supermarket](https://dev.to/kbk0125/web-caching-explained-by-buying-milk-at-the-supermarket-9k4)
- [Falsehoods programmers believe about time](https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time)
- [Big-O Notation: Beginners Guide](https://dev.to/metcoder95/big-o-notation-beginners-guide-1h38)
- [Imperative vs Declarative Programming](https://tylermcginnis.com/imperative-vs-declarative-programming/)
- [Tech Choices I Regret at Spectrum](https://mxstbr.com/thoughts/tech-choice-regrets-at-spectrum/)
- [STAR Apps: A New Generation of Front-End Tooling for Development Workflows](https://css-tricks.com/star-apps-a-new-generation-of-front-end-tooling-for-development-workflows/)
- [Too DRY - The Grep Test](http://jamie-wong.com/2013/07/12/grep-test/)
- [Avoid the Test User](https://kentcdodds.com/blog/avoid-the-test-user/)
- [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html)
- [Colocation](https://kentcdodds.com/blog/colocation/)
- [No, disabling a button is not app logic.](https://dev.to/davidkpiano/no-disabling-a-button-is-not-app-logic-598i)
- [Inversion of Control](https://kentcdodds.com/blog/inversion-of-control)
- [Building resilient frontend architecture — Monica Lent](https://www.youtube.com/watch?v=brMZLmZ1HR0)
- [De Morgan's Laws](https://erikmhsiao.github.io/de-morgans-laws/)
- [Why users care about how you write code](https://kentcdodds.com/blog/why-users-care-about-how-you-write-code)
- [Uber migration from Objective C to Swift](https://mobile.twitter.com/stantwinb/status/1336890442768547845?s=12) (Twitter thread)
- [The joy of deleting code](https://www.rockandnull.com/joy-of-deleting-code/)
- [WTF is JAMstack](https://jamstack.wtf/)
- [The Case for Lower Code](https://aspittel.hashnode.dev/the-case-for-lower-code)
- [No Code VS Low Code. What’s the Difference? It. Doesn't. Matter.](https://www.freecodecamp.org/news/no-code-vs-low-code-defined/)
- [How we ship code faster and safer with feature flags](https://github.blog/2021-04-27-ship-code-faster-safer-feature-flags/) - From the GitHub blog
- [Notion's page load and navigation times just got faster](https://www.notion.so/blog/faster-page-load-navigation)
- [Chaotic good](https://increment.com/reliability/chaos-engineering/)
- [Computers can be understood](https://blog.nelhage.com/post/computers-can-be-understood/)
- [Systems that defy detailed understanding](https://blog.nelhage.com/post/systems-that-defy-understanding/)
- [Migrations: the sole scalable fix to tech debt](https://lethain.com/migrations/)
- [What I learned from Software Engineering at Google](https://swizec.com/blog/what-i-learned-from-software-engineering-at-google/)
- [Testing in Production, the safe way](https://copyconstruct.medium.com/testing-in-production-the-safe-way-18ca102d0ef1)
- [Managing Complex Waiting Experiences on Web UIs](https://medium.com/@fkadev/managing-complex-waiting-experiences-on-web-uis-29534d2d92a8)

### Product insights

- [How to Manufacture Design](https://medium.com/behavior-design/how-to-manufacture-desire-3011c82a2b28)
- [How to Design an Addictive Product](https://medium.com/swlh/how-to-design-an-addicting-product-29b948c427de)
- [Mobile First, Desktop Never](https://dev.to/redbassett/mobile-first-desktop-never-2cfd)
- [Design Better Forms](https://uxdesign.cc/design-better-forms-96fadca0f49c)
- [Breaking the Deadlock Between User Experience and Developer Experience](https://alistapart.com/article/breaking-the-deadlock-between-user-experience-and-developer-experience)
- [Ever wonder why the most popular apps are starting to look the same? It might be a good thing](https://uxdesign.cc/ever-wonder-why-the-most-popular-apps-are-starting-to-look-the-same-it-might-be-a-good-thing-e54aadd50fd5)
- [Your Body Text Is Too Small](https://blog.marvelapp.com/body-text-small/)
- [What comes after product market fit?](https://www.youtube.com/watch?v=SaOeoCTJkXI&app=desktop) - Talk from Intercom co-founder at WebSummit 2018
- [The 8-second rule in UX](https://uxdesign.cc/the-8-second-rule-ef2a60c5813c)
- [7 UX Quick Wins from Airbnb](https://medium.com/women-make/7-ux-quick-wins-from-airbnb-8e483ea71954)
- [How we prioritize features at Brigad — The SIEVE checklist](https://engineering.brigad.co/how-we-prioritize-features-at-brigad-the-sieve-checklist-de8c2b18d12a)
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Foundations to build on: Intercom’s principles for building product](https://www.intercom.com/blog/intercom-product-principles/)
- [When a rewrite isn’t: rebuilding Slack on the desktop](https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4)
- [7 Practical Tips for Cheating at Design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)
- [How things "look" in a user interface isn't just aesthetic](https://mobile.twitter.com/lukew/status/1159142972836872193?s=21) - Twitter thread
- [The Evolution of Material Design’s Text Fields](https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03)
- [Margin considered harmful](https://mxstbr.com/thoughts/margin)
- [Chasing the Pixel-Perfect Dream](https://www.joshwcomeau.com/css/pixel-perfection/)
- [How to Report Errors in Forms: 10 Design Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [How Stripe Designs Beautiful Websites](https://leerob.io/blog/how-stripe-designs-beautiful-websites)
- [How To Write Great Microcopy](https://theproductperson.substack.com/p/-how-to-write-great-microcopy)
- [How to Negotiate & Persuade](https://theproductperson.substack.com/p/-how-to-negotiate-and-persuade)
- [Why I'm losing faith in UX](https://creativegood.com/blog/21/losing-faith-in-ux.html)
- [Launch an app that people actually want to use](https://shift.infinite.red/launch-an-app-that-people-actually-want-to-use-fb4a5d9d8a76)
- [Why You Should Include Your Developer In The Design Process](https://www.smashingmagazine.com/2014/11/why-you-should-include-your-developer-in-the-design-process/)
- [How Frontend Developers Can Empower Designer’s Work](https://www.smashingmagazine.com/2019/10/frontend-developers-empower-designers-work/)
- [Everything you need to know about skeleton screens](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a)
- [Tiny Wins](https://joelcalifa.com/blog/tiny-wins/)
- [Optimal Placement for Mobile Call to Action Buttons](https://uxmovement.com/mobile/optimal-placement-for-mobile-call-to-action-buttons/)

### Being a developer

- [Give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes)
- [When programming was no longer fun](https://dev.to/carlhembrough/programming-used-to-be-fun)
- [Rituals of Shaming in the Software Industry](https://dev.to/pavsaund/rituals-of-shaming-in-the-software-industry)
- [Office distractions could be costing your company more than \$30k per high-performance employee each year](https://hackernoon.com/office-distractions-could-be-costing-your-company-more-than-30k-per-high-performance-employee-each-ba7e4f772d78)
- [The obligation of a software developer](https://dev.to/steliosvoskos/the-obligation-of-a-software-developer)
- [How I Became a Better Programmer](http://jlongster.com/How-I-Became-Better-Programmer)
- [What Makes A Senior Software Engineer](https://dev.to/klnusbaum/what-makes-a-senior-software-engineer)
- [On Senior Engineers](https://dev.to/bhilburn/on-senior-engineers)
- [There's No Such Thing as a Full Stack Developer](https://dev.to/remotesynth/theres-no-such-thing-as-a-full-stack-developer-2fp9)
- [What fonts do you use in your editor(s)?](https://dev.to/jess/what-fonts-do-you-use-in-your-editors)
- [Why Being Too Polite in Web Design Is a Bad Thing](http://ianfrostweather.com/web/why-being-too-polite-in-web-design-is-a-bad-thing/)
- [Cheat to Win: Learn React with Copywork](https://daveceddia.com/learn-react-with-copywork/)
- [AHA Programming](https://kentcdodds.com/blog/aha-programming)
- [ooooops I guess we’re\* full-stack developers now](https://full-stack.netlify.com/)
- [How to get experience as a software engineer](https://kentcdodds.com/blog/how-to-get-experience-as-a-software-engineer)
- [To the brain, reading computer code is not the same as reading language](https://css-tricks.com/to-the-brain-reading-computer-code-is-not-the-same-as-reading-language/)
- [A Front End Developer is Aware](https://css-tricks.com/front-end-developer-aware/)
- [Know your "One Job" and do it first](https://charity.wtf/2021/03/07/know-your-one-job-and-do-it-first/)
- [Specializing in Being a Generalist](https://ashfurrow.com/blog/specializing-in-being-a-generalist/)
- [How to Build a Career in Tech: Cassidy Williams (@cassidoo) Connects the Dots](https://www.youtube.com/watch?app=desktop&v=qsBfyUzZhTc) 🎥
- [The 80% Energy Principle](https://justinjackson.ca/the-principle-that-changed-my-life)
- [The art of Frontend Engineering](https://www.narative.co/articles/the-art-of-frontend-engineering)
- [Why Constraints Are Good for Innovation](https://hbr.org/2019/11/why-constraints-are-good-for-innovation)
- [Being Glue](https://noidea.dog/glue)
- [How I Became a Software Engineer (From Designer to Developer)](https://leerob.io/blog/career)
- [How To Learn Stuff Quickly](https://www.joshwcomeau.com/blog/how-to-learn-stuff-quickly/)

### Being a Staff-Plus Engineer

- [Guides @StaffEng](https://staffeng.com/guides/) - Guides for reaching and succeeding at Staff-plus roles
- [Stories @StaffEng](https://staffeng.com/stories/) - Folks who have shared their stories of reaching Staff-plus engineer roles
- [Defining a Distinguished Engineer](https://blog.jessfraz.com/post/defining-a-distinguished-engineer/)
- [Being a principal engineer at Skyscanner](https://medium.com/@SkyscannerEng/being-a-principal-engineer-at-skyscanner-1830dfa17d30)
- [Not all engineering leaders are engineering managers](https://leaddev.com/hiring-onboarding-retention/not-all-engineering-leaders-are-engineering-managers)
- [Staff Engineering](https://tychoish.com/post/staff-engineering/)
- [More than Coding: What is Exploratory Work?](https://blog.bonnieeisenman.com/blog/senior-work/)
- [What's a senior engineer's job?](https://jvns.ca/blog/senior-engineer/)
- [What a Senior Staff Software Engineer Actually Does - Part 1: The Role and My Tasks](https://medium.com/box-tech-blog/what-a-senior-staff-software-engineer-actually-does-f3fc140d5f33)
- [What a Senior Staff Software Engineer Actually Does - Part 2: The Mindset and Focus of the Role](https://medium.com/box-tech-blog/what-a-senior-staff-software-engineer-actually-does-d55308fcdd41)
- [On becoming a senior technical leader](https://blog.coinbase.com/on-becoming-a-senior-technical-leader-14106f1383b8)

### Technical decision making

- [Technical Decision Making](https://copyconstruct.medium.com/technical-decision-making-9b2817c18da4)
- [Technical Research and Preparation](https://keavy.com/work/technical-preparation/)
- [Where to Start](https://keavy.com/work/where-to-start/)
- [A practical guide to writing technical specs](https://stackoverflow.blog/2020/04/06/a-practical-guide-to-writing-technical-specs/)
- [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- [How to write a better technical design document](https://www.range.co/blog/better-tech-specs)
- [Stepping Stones not Milestones](https://medium.com/@jamesacowling/stepping-stones-not-milestones-e6be0073563f)

### Engineering strategies

- [On Drafting an Engineering Strategy](https://www.paperplanes.de/2020/1/31/on-drafting-an-engineering-strategy.html)
- [Your first 90 days as CTO or VP Engineering](https://lethain.com/first-ninety-days-cto-vpe/)
- [Delivering on an architecture strategy](https://blog.thepete.net/blog/2019/12/09/delivering-on-an-architecture-strategy/)
- [The difficult teenage years: Setting tech strategy after a launch](https://medium.com/ft-product-technology/the-difficult-teenage-years-setting-tech-strategy-after-a-launch-7f42eb94a424)
- [Run less software](https://www.intercom.com/blog/run-less-software/)

### Leadership / Mentoring / Teaching

- [11 Best Ways to Improve Your Emotional Intelligence](https://dev.to/lpasqualis/11-best-ways-to-improve-your-emotional-intelligence/)
- [Onboarding New Developers](https://dev.to/codemouse92/onboarding-new-developers)
- [How to Set the Technical Direction for Your Team](https://dev.to/jlhcoder/how-to-set-the-technical-direction-for-your-team)
- [#2 CTO Digest — Growing up](https://medium.com/@jeanlebrument/2-cto-digest-growing-up-29a770ea8c2d)
- [Amazon Leadership Principles](https://www.amazon.jobs/en/principles)
- [Managers and Seagulls](https://retrospective.co/seagulls/)
- ["Solidifying what you learn"](https://dev.to/kentcdodds/solidifying-what-you-learn-lgi)
- [How I Teach](https://kentcdodds.com/blog/how-i-teach)
- [Why mentorship in tech is important](https://blog.logrocket.com/why-mentorship-is-important-in-tech/)
- [Lessons from training teams to use React Native](https://blog.coinbase.com/lessons-from-training-teams-to-use-react-native-67ec78b9ab7a)
- [Why it’s worth it to invest in internal docs](https://increment.com/documentation/why-investing-in-internal-docs-is-worth-it/)
- [Patterns in confusing explanations](https://jvns.ca/blog/confusing-explanations/)
- [The Behind-the-scenes Work of Tech Leadership](https://blog.coleadership.com/behind-the-scenes-tech-leadership/)

### Management

- [How do you manage underperforming team members?](https://mobile.twitter.com/jamonholmgren/status/1153435334299885569) - Twitter thread
- [The CEO of \$48 billion Shopify says long hours aren't necessary for success: 'I'm home at 5:30pm every evening'](https://www.businessinsider.fr/us/shopify-ceo-success-long-hours-40-hour-week-2019-12)
- [The epistemology of software quality](https://increment.com/teams/the-epistemology-of-software-quality/)
- [The Evolution of Trust](https://ncase.me/trust/) - Game on trust theory
- [The Nakazawa Management Starter Pack](https://cpojer.net/posts/the-nakazawa-management-starter-pack)
- [If Your Boss Could Do Your Job, You’re More Likely to Be Happy at Work](https://hbr.org/2016/12/if-your-boss-could-do-your-job-youre-more-likely-to-be-happy-at-work)
- [The Importance of Career Laddering](https://css-tricks.com/the-importance-of-career-laddering/)
- [Career Ladders](https://career-ladders.dev/) - A sample of career ladders [Sarah Drasner uses for her] organization, open sourced for anyone
- [Your Team is Not “Them”](https://css-tricks.com/your-team-is-not-them/)
- [Understanding Project Management Will Improve Your Developer Job](https://blog.danielna.com/understanding-project-management-will-improve-your-developer-job/)
- [Mission Command: enabling autonomous software teams](https://blog.thepete.net/blog/2019/02/08/mission-command-enabling-autonomous-software-teams/)

### Career ladders

- [Progression.fyi](https://www.progression.fyi/)
- [Rent the Runway career ladder](https://docs.google.com/spreadsheets/d/1k4sO6pyCl_YYnf0PAXSBcX776rNcTjSOqDxZ5SDty-4/edit#gid=0)
- [Kickstarter carrer ladder](https://gist.github.com/jamtur01/aef437a79fee5a9cefdc)

### OSS

- [Don't "Push" Your Pull Requests](https://www.igvita.com/2011/12/19/dont-push-your-pull-requests/)
- [Building the Open Source Community We Want](https://kentcdodds.com/blog/building-the-open-source-community-we-want)

### Remote working

- [Why (I think) "Cost of Living" pay for remote workers is BS](https://dev.to/sam_ferree/why-i-think-cost-of-living-pay-for-remote-workers-is-bs-5b68)
- [Tips for a successful switch to a standing desk](https://dev.to/jerodsanto/tips-for-a-successful-switch-to-a-standing-desk-4p8o)
- [Taking the Pain Out of Video Conferences](https://shift.infinite.red/taking-the-pain-out-of-video-conferences-7b7abe822b36?gi=8368d504d7fd)
- [The Basecamp Guide to Internal Communication](https://basecamp.com/guides/how-we-communicate)
- [Spotify says it's letting employees work from anywhere, while still paying San Francisco and New York salaries](https://www.businessinsider.com/spotify-unveils-new-remote-work-option-for-all-employees-2021-2?r=US&IR=T)
- [Inclusion in a Distributed World](https://cpojer.net/posts/inclusion-in-a-distributed-world)

### Communicating

- [Active Listening: The Master Key to Effective Communication](https://www.farnamstreetblog.com/2017/07/active-listening/)
- [The Work Required To Have An Opinion](https://www.farnamstreetblog.com/2013/04/the-work-required-to-have-an-opinion/)
- [Proximate vs Root Causes: Why You Should Keep Digging to Find the Answer](https://www.farnamstreetblog.com/2017/05/proximate-vs-root-causes/)
- [How To Work With Developers - A Guide for Non-Developers](https://dev.to/kttravers/how-to-work-with-developers---a-guide-for-non-developers-35hk)
- [Give it five minutes](https://signalvnoise.com/posts/3124-give-it-five-minutes)
- [Beyond best intentions](https://thoughtbot.com/blog/beyond-best-intentions)
- [Manage Your Manager](https://boz.com/articles/managing-managers)
- [The Art of the Awkward 1:1](https://medium.com/@mrabkin/the-art-of-the-awkward-1-1-f4e1dcbd1c5c)
- [The P Rules](https://boz.com/articles/p-rules)
- [The four layers of communication in a functional team](https://qz.com/work/1468580/the-four-layers-of-communication-in-a-functional-team/)

### Writing articles

- [The Two Minutes It Takes To Read This Will Improve Your Writing Forever](https://medium.com/an-idea-for-you/the-two-minutes-it-takes-to-read-this-will-improve-your-writing-forever-82a7d01441d1)

### Speaking at events

- [I’ve spoken at JSConf and so can you!](https://medium.com/@a.sandrina.p/ive-spoken-at-jsconf-and-so-can-you-a9d92c1439a6)
- [5 Essential Ingredients for an Awesome Tech Talk](https://medium.com/@reverentgeek/5-essential-ingredients-for-an-awesome-tech-talk-2e5778b2cb5a)
- [How to prepare a talk](https://www.deconstructconf.com/blog/how-to-prepare-a-talk)
- [Awesome conference practices](https://github.com/kitze/awesome-conference-practices) - Did you like anything in particular about a conference? Let's make an awesome list
- [Twitter thread about speaking in public](https://mobile.twitter.com/housecor/status/1023770060807200768)
- [Things I recommend for submitting talk idea](https://mobile.twitter.com/kosamari/status/1071160884381261824) - Twitter thread

### Job interviews

- [Salary Negotiation: Make More Money, Be More Valued](http://www.kalzumeus.com/2012/01/23/salary-negotiation/)
- [Tech Screenings: Why The Interview Process Fails Candidates](https://dev.to/techevangelista/tech-screenings-why-the-interview-process-fails-candidates-hc3)
- [Twitter thread on interview questions before joining a startup](https://mobile.twitter.com/jensenharris/status/988967889330819072)
- [Salary negotiation thread](https://mobile.twitter.com/sehurlburt/status/1017631027395612672) - by Stephanie Hurlburt
- [Getting a Gig: A Guide](https://github.com/cassidoo/getting-a-gig) - Guide for getting a gig as a tech student by Cassidy Williams

### Coding interviews

- [How NOT to succeed in your 45-minute coding interview](https://dev.to/fahimulhaq/how-not-to-succeed-in-your-45-minute-coding-interview)
- [React Interview Questions](https://dev.to/tylermcginnis/react-interview-questions)
- [Hiring without whiteboards](https://github.com/poteto/hiring-without-whiteboards) - Companies that don't have a broken hiring process
- [Senior Interviews != Three Junior Interviews in a Trench Coat](https://laurieontech.com/posts/senior-interviews/)

### Resumes

- [Intermediate to senior dev resume](https://dev.to/mozoobear/intermediate-to-senior-dev-resume-3bh)

### Compensation

- [Whimsical Guide to Compensation](https://whimsical.com/blog/guide-to-compensation)

### Startups

- [FRENCH - 5 raisons de rejoindre une startup très early stage](https://www.welcometothejungle.co/articles/cinq-raisons-de-rejoindre-une-startup-early-stage)
- [FRENCH - Pourquoi nous sommes 100% transparents sur les salaires de nos employés](https://www.maddyness.com/finance/2017/06/25/maddyrex-pourquoi-grille-salaire-ouverte/)

### Others

- [How to Get Rich (without getting lucky)](https://mobile.twitter.com/naval/status/1002103360646823936) - Twitter thread

## Freelance

### Freelance advice

- [Pricing Freelance Projects](https://www.tomhirst.com/pricing-freelance-projects/)
- [How to price yourself $$$ as a freelance developer](https://www.youtube.com/watch?app=desktop&v=_jcyDfqy-f0&feature=youtu.be) - YouTube video
- [Breaking Into Freelancing & Consulting as a Developer - How I made over $400,000 Per Year](https://www.youtube.com/watch?app=desktop&v=Nz4Ra1uSOAc) 🎥

### Job hunting / Freelance platforms (mainly for French people)

- [Stack Overflow: Calculate your salary](https://stackoverflow.com/jobs/salary)
- [Crème de la crème](https://cremedelacreme.io/)
- [Talent.io](https://www.talent.io/)
- [Flaiiir.io](http://flaiir.io/)
- [Hired](https://fr.hired.com/)
- [JobGlober](https://www.jobglober.com/landing/index.php)
- [FiftyTalents](https://www.fiftytalents.com/fr)
- [FreelanceRepublik](https://www.freelancerepublik.com/)
- [Front end developer jobs](http://frontenddeveloperjob.com/)
- [JobTeaser](https://epitech.jobteaser.com/fr/users/sign_in?back_to_after_login=%2Ffr)
- [How I Find Six Figure Remote Software Developer Jobs](https://dev.to/colinmtech/how-i-find-six-figure-remote-software-developer-jobs-23jd)
- [We Work Remotely](https://weworkremotely.com/)
- [Relocate.me](https://relocate.me/) - Job relocation made easy. Find tech jobs w/ relocation packages
- [TypeScript.careers](https://typescript.careers/) - Find a job writing TypeScript

## Personal achievements

### Talks

- [Power your mobile apps with Apollo-client](https://www.facebook.com/abbealbzzz/videos/778190315711576/) - 21'40

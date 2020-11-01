---
date: '2020-10-31'
title: 'Fix your node_modules with path-package'
excerpt: 'When working with open source packages, you may find a bug that has not yet been fixed, or the PR has not been merged yet. So what are your options... Fork the package? Depend on a git commit and build manually? There is a simpler solution!'
cover: '/images/posts/first-aid-kit.jpeg'
---

Sometimes, when working with open source packages, you may find a bug that has not yet been fixed, or it has been fixed but the PR hasn't been merged yet. Or you need an extra feature, but it is very specific and adding it to the library would not benefit that many users compared to the cost of maintainance. So what are your options... **Fork** the package? Depend on a **git commit and build manually**? There's a simpler solution: **patch-package** to the rescue!

_This post is a follow-up to [one of my older posts](/2018-02-26-inplace-sed-that-works-on-both-mac-os-and-linux), with a more recent approach to the same problem._

# So how does it work?

[pacth-package](https://github.com/ds300/patch-package) is a neat tool that will allow you to change the code in your node_modules so that you can fix a temporary bug, or adapt a package to your specific needs!

1. First, install patch-package by running `yarn add patch-package`
2. Then, make the changes to your node_modules. Let's say you will patch the `left-pad` package
3. Now, run the command `yarn patch-package left-pad`
4. Finally, add `yarn patch-package` to your `postinstall` script, in `package.json`

You're all set!

You will notice a new folder `patches` at the root of your project. It will contain all the patches for all the modules you patched.

# Upgrading a patched module

When you upgrade a module, patch-package will warn you that the patch may be outdated. You will need to run `yarn patch-package left-pad` again. If there is no conflict, the patch will be upgraded as well, and nothing will be left to do. if the package has been modified at the same places as your patch did, then you will need to delete your patch, and follow the previous steps from the start.

# Removing a patch

When the fix you have been waiting for has finally been released, or you deleted the package, you don't need the patch anymore! You can safely delete it in the `patches` folder.

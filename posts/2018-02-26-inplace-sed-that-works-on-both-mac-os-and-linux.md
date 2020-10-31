---
date: '2018-02-26'
title: 'Inplace sed that works on both MacOS and Linux'
excerpt: 'If you have ever worked with Open Source projects, and in particular in the React and React Native ecosystems, you may already have found the need to use `sed` to manually patch a package. Unfortunately, the syntax on MacOS and Linux differ.'
cover: '/images/posts/cabins.jpeg'
---

If you have ever worked with Open Source projects, and in particular in the React and React Native ecosystems, you may already have found the need to use `sed` to manually patch a package while waiting for a Pull Request to be merged. Unfortunately, the syntax on MacOS and Linux differ.

Linux uses the GNU version of sed, whil MacOS uses its own. If like many developers you are working on MacOS, and using Linux as a CI/CD environment, then you need to use a specific syntax which works on both environments.

```bash
sed -i'' -e 's/foo/bar/g' ./file
```

And the multiline one

```bash
sed -i'' -e '
  s/foo1/bar1/g
  s/foo2/bar2/g
' ./file
```

And you should be good to go!

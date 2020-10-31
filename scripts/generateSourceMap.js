const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');
const path = require('path');

const BUILD_ID = fs
  .readFileSync(path.join(process.cwd(), '.next/BUILD_ID'))
  .toString();

sitemap({
  baseUrl: 'https://adrien.harnay.me',
  pagesDirectory: path.join(process.cwd(), '/.next/server/pages'),
  targetDirectory: 'public/',
  ignoredExtensions: ['js', 'map'],
  extraPaths: ['/'],
  ignoredPaths: ['[fallback]', '/404'],
});

console.log(`✅ public/sitemap.xml generated!`);

const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');
const postcssBrowserReporter = require('postcss-browser-reporter');

module.exports = () => ({
  plugins: [postcssPresetEnv(), postcssReporter(), postcssBrowserReporter()],
});

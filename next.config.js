const withTM = require("next-transpile-modules")([
  "sanitize-html",
  "escape-string-regexp",
]);
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
};

module.exports = withTM(config);

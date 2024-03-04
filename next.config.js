/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  transpilePackages: [
    "@kickstartds/base",
    "@kickstartds/blog",
    "@kickstartds/core",
    "@kickstartds/form",
    "@kickstartds/ds-agency",
  ],
};

module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
        },
        {
          test: /\.ya?ml$/,
          use: "js-yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
  ...nextConfig,
};

const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  // See https://github.com/netlify/netlify-plugin-nextjs/issues/223
  unstableNetlifyFunctionsSupport: {
    "pages/index.jsx": {
      includeDirs: ["public"],
    },
    "pages/faq.jsx": {
      includeDirs: ["public"],
    },
  },
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }
};

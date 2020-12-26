"use strict";
const join = require("path").join;

module.exports = {
  entry: join(__dirname, "src", "index.js"),
  output: {
    path: join(__dirname, "dist/cjs"),
    filename: "index.js",
    libraryExport: "default",
    libraryTarget: "commonjs2",
  },
  optimization: {
    // Even in production, export clean output. Expect users to minify as needed with their own bundler
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          root: __dirname,
          rootMode: "upward-optional",
        },
      },
      {
        test: /\.scss?$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
          "postcss-loader",
        ],
      },
    ],
  },
};

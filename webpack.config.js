"use strict"

const join = require( "path" ).join

module.exports = {
  mode: "none",
  devtool: "inline-source-map",
  entry: join( __dirname, 'src', 'cookieconsent.js' ),
  output: {
    path: join( __dirname, 'src' ),
    filename: 'cookieconsent.dev.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        options: {
          root: __dirname,
          rootMode: "upward-optional"
        }
      },
      {
        test: /\.scss?$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  watch: true
}
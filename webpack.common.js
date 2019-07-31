"use strict"

const join = require( "path" ).join
const common = require( "./webpack.common.js" )
const exp = Object.assign({}, common, {
    entry: join( __dirname, 'src', 'cookieconsent.js' ),
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
    plugins: []
  })
  module.exports = exp
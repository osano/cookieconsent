"use strict"

const join = require( "path" ).join
const merge = require('webpack-merge')
const common = require( "./webpack.common.js" )
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    module: {
      rules: [
        {
          /* WHY??! */
          test  : /\.js?$/,
          loader: "string-replace-loader",
          options: {
            search : "(?<=>)\\n\ {2,}|\\n\ {2,}(?=<)",
            replace: () => '',
            flags  : "g"
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  })
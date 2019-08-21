"use strict"

const join = require( "path" ).join
const merge = require('webpack-merge')
const common = require( "./webpack.common.js" )
const MinifyPlugin = require("babel-minify-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    output: {
      path: join( __dirname, 'build' ),
      filename: 'cookieconsent.min.js'
    },
    optimization: {
      moduleIds         : 'total-size',
      mangleWasmImports : true,
      concatenateModules: false
    },
    module: {
      rules: [
        {
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
      new CleanWebpackPlugin(),
      new MinifyPlugin({
        removeDebugger: true,
        removeConsole : true,
        mangle        : true
      },{
        sourceMap: false,
        comments : false
      })
    ]
  })
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
      moduleIds        : 'total-size',
      mangleWasmImports: true
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MinifyPlugin({
        removeDebugger: true,
        removeConsole : true,
        mangle: { topLevel: true }
      },{
        sourceMap: false,
        comments : false
      })
    ]
  })
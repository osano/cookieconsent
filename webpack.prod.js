"use strict"

const join = require( "path" ).join
const merge = require('webpack-merge')
const common = require( "./webpack.common.js" )
const MinifyPlugin = require("babel-minify-webpack-plugin")

module.exports = merge(common, {
    mode: "production",
    output: {
      path: join( __dirname, 'build' ),
      filename: 'cookieconsent.min.js'
    },
    plugins: ( 
      common.plugins.push(new MinifyPlugin({removeDebugger: true},{sourceMap:false})),
      common.plugins
    )
  })
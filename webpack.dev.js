"use strict"

const join = require( "path" ).join
const merge = require('webpack-merge')
const common = require( "./webpack.common.js" )
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
      path: join( __dirname, 'src' ),
      filename: 'cookieconsent.bundle.js'
    },
    // plugins: [
    //   new BundleAnalyzerPlugin()
    // ],
    watch: true
  })
module.exports = {
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-flow-strip-types",
    "@babel/plugin-transform-runtime",
    //"transform-es2015-modules-commonjs"
  ],
  "ignore": [
    "node_modules/**/*"
  ],
  "sourceMaps": true,
  "sourceType": "unambiguous"
}
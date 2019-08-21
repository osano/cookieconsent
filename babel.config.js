module.exports = proc => {
  const isTest = proc.env("test")
  return {
    "presets": [
      [ "@babel/preset-env", { targets: { node: "current" } } ]
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
      ( isTest ? "transform-es2015-modules-commonjs" : "" )
    ],
    "ignore": [
      "node_modules/**/*"
    ],
    "sourceMaps": true,
    "sourceType": "unambiguous"
  }
}
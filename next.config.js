require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withCSS = require('@zeit/next-css')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCSS({
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),
    ]

    return config
  }
});

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  devServer: {
    contentBase: path.resolve('dist'),
    port: 9000
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  }
});
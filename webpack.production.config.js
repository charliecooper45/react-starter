const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './client/index.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name]-[chunkhash].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name]-[contenthash].css')
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],

  target: ['web', 'es5'],

  module: {
    rules: [{
      test: /\.(t|j)sx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /.css$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}
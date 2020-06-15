const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'all.min.js',
    path: buildPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 8192
            }
          }
        ]
      }
      ,
      {
        // Load all icons
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // }),
    new MiniCssExtractPlugin({
      filename: 'all.min.css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
    })
  ]
};
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: './src/js/index.js',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist")
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
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ]
      }
      ,
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/webpack_template.html',
      inject: true
    })
  ]
};
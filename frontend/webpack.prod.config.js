const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

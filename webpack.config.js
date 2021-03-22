const path = require("path");
const webpack = require("webpack");
const DotenvPlugin = require('webpack-dotenv-plugin');


require("@babel/polyfill");

module.exports = {
//   entry: ["@babel/polyfill", "./src/index.js"],
  entry: ["@babel/polyfill", "./src/index.js"],
  mode: "development",
  devtool: 'inline-source-map',
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    compress: true,
    port: 8081,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new DotenvPlugin({
      path: './.env',
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true,
    })
  ]
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./index.jsx",
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
          {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      // {
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   loader: "html-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: "8081",
    hot: true,
  },
};
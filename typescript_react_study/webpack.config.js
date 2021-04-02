/**
 * ---- Webpack이 실행될 때 참조하는 설정 파일이다 ------
 * 1. 웹 개발 서버 시작
 * 2. TS --> JS로 트랜스파일링
 * 3. dist 폴더 아래에 빌드 생성
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

const basePath = __dirname;

module.exports = {
  mode: "development",
  context: path.join(basePath, "src"),
  // 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션(resolve)
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  // 웹팩이 파일을 읽어드리는 시작점 설정옵션
  entry: ["@babel/polyfill", "./main.ts"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8080,
    stats: "errors-only",
  },

  // Loaders
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};

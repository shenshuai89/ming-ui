const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "../main.ts"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "bundle.js",
  },
  resolve: {
    // 表示解析的文件类型
    extensions: [".js", ".ts", ".tsx", ".vue"],
  },
  module: {
    rules: [
      {
        // 识别vue
        test: /\.vue$/,
        use: "vue-loader",
      },
      { test: /\.(js|ts)x?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        // 识别图标...
        test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
        loader: "url-loader",
      },
      {
        // 识别样式
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};

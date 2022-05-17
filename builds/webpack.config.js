const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "../packages/ming-ui/index.ts"),
  output: {
    path: path.join(__dirname, "../lib"),
    filename: "index.js",
    library: {
      name: "ming-ui-plus",
      type: 'umd', // umd支持commonjs和amd ，可以在浏览器运行，但是不支持es6
    },
    globalObject: 'this'
  },
  externals: {
    vue: {
      // 排除掉项目中引入的vue，不让打进ui包中
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
    },
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
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

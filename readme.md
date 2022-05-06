## 使用lerna创建monorepo项目
安装lerna
  - yarn add lerna -g
  - 初始化项目 lerna init
### 使用lerna创建组件包
先创建基本的button组件
```
lerna create button
```

## 添加typescript的支持
``` js
yarn add typescript -W
```
### 默认无法解析.vue文件后缀的文件，增加typings
typings/vue-shim.d.ts
``` js
declare module '*.vue' {
    import {App,defineComponent} from 'vue';
    const component: ReturnType<typeof defineComponent> & {
        install(app:App):void
    };;
    export default component
}
```
### 安装vue 
```
yarn add vue@next -W
```
## 创建项目预览组件功能
项目目录/examples

### 创建webpack配置文件
webpack.config.js文件
``` js
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

```

安装依赖
``` 
yarn add webpack webpack-cli webpack-dev-server vue-loader@next @vue/compiler-sfc babel-loader @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver url-loader file-loader html-webpack-plugin css-loader sass-loader style-loader sass -D -W
```

创建babel.config.js文件
``` javascript
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript", // 解析ts语法，在采用preset-env
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        // ?
        "@babel/transform-typescript",
      ],
    },
  ],
  env: {
    utils: {
      plugins: [
        [
          "babel-plugin-module-resolver", // 为了能正确找到ming-ui模块
          { root: "ming-ui" },
        ],
      ],
    },
  },
};

```

## 设置启动预览命令
在package.json 中设置scripts
```
"scripts": {
  "preview-ui": "webpack serve --config ./examples/build/webpack.config.js"
}
```

# 初始化项目环境
## 环境搭建
### 安装lerna
  - yarn add lerna -g
  - 初始化项目 lerna init
### 添加typescript的支持
``` js
yarn add typescript -W
```
默认无法解析.vue文件后缀的文件，增加typings
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
安装vue 
```
yarn add vue@next -W
```
创建webpack配置文件
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

## 设置字体图标
首先创建theme-chalk
- lerna create theme-chalk
  - 创建出theme-chalk目录
- 创建 项目共用的scss配置
  - mixins/config.scss
  ``` scss
    $namespace: "m"; // scss命名空间，。都是以m开头
    $state-prefix:"is-"; // 表示状态 is-readonly is-disabled
    $modifier-separator:"--"; //修饰作用 m-button--primary
    $element-separator: "__"; // 元素之间的分割 m-app__body
  ```
  - mixins/mixin.scss
  ``` scss
    \ @import "../common/var.scss";
    // .m-button{}
    @mixin b($block) {
        $B: $namespace+'-'+$block;
        .#{$B}{
            @content;
        }
    }
    // .m-button.is-xxx
    @mixin when($state) {
        @at-root {
            &.#{$state-prefix + $state} {
                @content;
            }
        }
    }
    // &--primary => .m-button--primary
    @mixin m($modifier) {
        @at-root {
            #{&+$modifier-separator+$modifier} {
                @content;
            }
        }
    }
    // &__header  => .m-button__header
    @mixin e($element) {
        @at-root {
            #{&+$element-separator+$element} {
                @content;
            }
        }
    }
  ```
  - common/var.scss
  ``` scss
  \  @import "../mixins/config.scss";
    $--color-primary: #409EFF;
    $--color-white: #FFFFFF;
    $--color-black: #000000;
    $--color-success: #67C23A;
    $--color-warning: #E6A23C;
    $--color-danger: #F56C6C;
    $--color-info: #909399;
  ```

- 创建组件的scss文件，并创建一个总的index.scss
- 导入通过[iconfont](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=19238)下载的图标字体文件。
  - 在项目设置中添加设置：
    * FontClass/ Symbol 前缀：  ```m-icon-```
    * Font Family ： ```m-ui-icons```
    * 勾选woff、tif、svg格式
  - 将下载好 的iconfont.css内容添加到icon.scss中。并做如下修改
    ``` scss
      \  @import "./common/var.scss";
        @font-face {
          font-family: "m-ui-icons"; /* Project id 3381025 */
          src: url('./fonts/iconfont.woff2?t=1651839500521') format('woff2'),
              url('./fonts/iconfont.woff?t=1651839500521') format('woff'),
              url('./fonts/iconfont.ttf?t=1651839500521') format('truetype'),
              url('./fonts/iconfont.svg?t=1651839500521#m-ui-icons') format('svg');
        }

        [class^="#{$namespace}-icon-"] {
          font-family: "m-ui-icons" !important;
          font-size: 16px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes rotating {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        .#{$namespace}-icon-loading, .#{$namespace}-icon-exchangerate {
            display: inline-block ;
            animation: rotating 1.5s linear infinite;
        }
    ```
- 在预览项目中查看
  - 在main.ts中引入样式文件 ```import "theme-chalk/index.scss";```
  - 修改App.vue中对icon组件的使用  ```<m-icon name="loading"></m-icon>```


## 样式scss打包
### 使用gulp打包scss文件
安装依赖
```
yarn add gulp gulp-autoprefixer gulp-cssmin gulp-dart-sass gulp-rename -D -W
```
添加gulpfile打包文件
``` js
  const { series, src, dest } = require("gulp");
  const sass = require("gulp-dart-sass");
  const autoprefixer = require("gulp-autoprefixer");
  const cssmin = require("gulp-cssmin");

  function compile() {
    return src("./src/*.scss")
      .pipe(sass.sync())
      .pipe(autoprefixer({}))
      .pipe(cssmin())
      .pipe(dest("./lib"));
  }
  function copyfont() {
    // copy iconfont file
    return src("./src/fonts/**").pipe(cssmin()).pipe(dest("./lib/fonts"));
  }

  exports.build = series(compile, copyfont);

```

## 组件库全量打包

### umd格式整体打包
创建builds目录，新旧webpack.config.js
```js
  const path = require("path");
  const { VueLoaderPlugin } = require("vue-loader");
  module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../packages/ming-ui/index.ts"),
    output: {
      path: path.join(__dirname, "../lib"),
      filename: "index.js",
      libraryTarget: "umd", // umd支持commonjs和amd ，可以在浏览器运行，但是不支持es6
      library: "ming-ui",
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
```
打包出的文件放到lib目录下。
添加打包的脚本命令
``` json
  "scripts": {
    "build": "webpack --config builds/webpack.config.js"
  }
```

### 打包esModule格式组件库
安装所需依赖
```js
yarn add rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-vue -D -W
```
添加全量打包配置 rollup-config.bundle.js
``` js
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import vue from "rollup-plugin-vue";

export default {
  input: path.resolve(__dirname, `../packages/ming-ui/index.ts`),
  output: {
    format: "es",
    file: `lib/index.esm.js`,
  },
  plugins: [
    nodeResolve(),
    vue({
      target: "browser",
    }),
    typescript({
      tsconfigOverride: {
        exclude: ["node_modules", "examples"],
      },
    }),
  ],
  external(id) {
    // 排除vue本身
    return /^vue/.test(id);
  },
};

```
添加打包命令
``` json
  "scripts": {
    "build:esm-bundle": "rollup -c ./builds/rollup.config.bundle.js"
  }
```

## 分组打包

添加打包配置 rollup.config.js
``` js
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { getPackagesSync } from "@lerna/project"; // 该插件的作用是，查找lerna项目下的所有包
import vue from "rollup-plugin-vue";

// 获取package.json 找到以@ming-ui 开头的组件包
const inputs = getPackagesSync()
  .map((pck) => pck.name)
  .filter((name) => name.includes("@ming-ui"));

export default inputs.map((name) => {
  const pckName = name.split("@ming-ui")[1];
  return {
    input: path.resolve(__dirname, `../packages/${pckName}/index.ts`),
    output: {
      format: "es",
      file: `lib/${pckName}/index.js`,
    },
    plugins: [
      nodeResolve(),
      vue({
        target: "browser",
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            // 打包单个组件时，不用生成ts的声明文件
            declaration: false,
          },
          exclude: ["node_modules"],
        },
      }),
    ],
    external(id) {
      // 排除vue本身 和自己设置的ming-ui包
      return /^vue/.test(id) || /^@ming-ui/.test(id);
    },
  };
});

```
添加打包命令
``` json
  "scripts": {
    "build:esm": "rollup -c ./builds/rollup.config.js"
  }
```
修改main.ts，此时可以把组件按需加载引入
``` js
import "../lib/theme-chalk/index.css";
import MButton from "../lib/button/index.js"; //组件可以按需加载
import MIcon from "../lib/icon/index.js"; //组件可以按需加载
import App from "./App.vue";

createApp(App).use(MButton).use(MIcon).mount("#app");
```
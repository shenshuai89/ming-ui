module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript", // 解析ts语法，在采用preset-env
  ],
  overrides: [  // vue-loader默认不解析typescript语法
    {
      test: /\.vue$/, // 让vue格式的文件支持typescript， 插件@babel/plugin-transform-typescript
      plugins: [
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

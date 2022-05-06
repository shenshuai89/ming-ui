import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";
import { getPackagesSync } from "@lerna/project";
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

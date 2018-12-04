import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";

export default {
  // input options
  input: "./src/index.js",
  external: [""],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: ["node_modules/**", "*.json"],
      presets: [
        [
          "@babel/env",
          {
            modules: false,
          },
        ],
      ],
    }),
  ],

  // output options
  output: [
    {
      name: "rollup-starter",
      globals: {},
      sourcemap: true,
      format: "umd",
      file: "./dist/index.js",
    },
  ],
};

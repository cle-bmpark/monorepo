import prettierConfig from "../../prettier.config.mjs";

/** @type {import('prettier').Config} */
const config = {
  ...prettierConfig,
  tailwindStylesheet: "./src/app/globals.css", // tailwindcss 정렬
};

export default config;

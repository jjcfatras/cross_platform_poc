module.exports = {
  "{apps}/**/*.{css,json,yml,svg}": [
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
  "{apps}/**/*.{js,cjs,mjs,jsx}": [
    (files) => `nx affected:lint --fix --files=${files.join(",")}`,
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
  "{apps}/**/*.{ts,cts,mts,tsx}": [
    (files) => `nx affected --target=compile --files=${files.join(",")}`,
    (files) => `nx affected:lint --fix --files=${files.join(",")}`,
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
};

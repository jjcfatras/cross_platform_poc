module.exports = {
  "{apps,libs,tools}/**/*.{css,json,yml,svg}": [
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
  "{apps,libs,tools}/**/*.{js,cjs,mjs,jsx}": [
    (files) => `nx affected:lint --fix --files=${files.join(",")}`,
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
  "{apps,libs,tools}/**/*.{ts,cts,mts,tsx}": [
    (files) => `nx affected --target=compile --files=${files.join(",")}`,
    (files) => `nx affected:lint --fix --files=${files.join(",")}`,
    (files) => `nx format:write --files=${files.join(",")}`,
  ],
};

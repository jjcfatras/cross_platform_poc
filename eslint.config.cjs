const nx = require("@nx/eslint-plugin");
const eslintConfigPrettier = require("eslint-config-prettier");
const perfectionist = require("eslint-plugin-perfectionist");

module.exports = [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  perfectionist.configs["recommended-natural"],
  eslintConfigPrettier,

  {
    ignores: ["**/dist"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: ["*"],
              sourceTag: "*",
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
    },
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
    // Override or add rules here
    rules: {},
  },
];

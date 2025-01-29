const eslint = require("@eslint/js");
const nx = require("@nx/eslint-plugin");
const eslintConfigPrettier = require("eslint-config-prettier");
const perfectionist = require("eslint-plugin-perfectionist");
const tsEslint = require("typescript-eslint");

module.exports = [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  eslint.configs.recommended,
  ...tsEslint.configs.strict,
  perfectionist.configs["recommended-natural"],
  eslintConfigPrettier,
  {
    rules: {
      "@typescript-eslint/no-require-imports": [
        "warn",
        { allowAsImport: true },
      ],
    },
  },
  {
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "side-effect",
            ["builtin-type", "builtin"],
            ["external-type", "external"],
            ["internal-type", "internal"],
            ["parent-type", "parent"],
            ["sibling-type", "sibling"],
            ["index-type", "index"],
            "object",
            "unknown",
          ],
          internalPattern: ["~/.*"],
          newlinesBetween: "always",
          order: "asc",
          type: "natural",
        },
      ],
    },
  },

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

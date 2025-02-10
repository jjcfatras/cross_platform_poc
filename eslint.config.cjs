const eslint = require("@eslint/js");
const nx = require("@nx/eslint-plugin");
const eslintConfigPrettier = require("eslint-config-prettier");
const perfectionist = require("eslint-plugin-perfectionist");
const tsEslint = require("typescript-eslint");

module.exports = tsEslint.config(
  ...nx.configs["flat/base"],
  ...nx.configs["flat/javascript"],
  ...nx.configs["flat/typescript"],
  eslint.configs.recommended,
  ...tsEslint.configs.strict,
  perfectionist.configs["recommended-natural"],
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        project: [
          "./tsconfig.base.json",
          "./libs/*/tsconfig.lib.json",
          "./apps/*/tsconfig.app.json",
        ],
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    extends: [tsEslint.configs.disableTypeChecked],
    files: ["**/*.{js,cjs,mjs}"],
  },
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
      "perfectionist/sort-objects": [
        "error",
        {
          customGroups: [
            {
              elementNamePattern: "^(?:xs|sm|md|lg|xl|xxl)$",
              groupName: "breakpoints",
              selector: "property",
              type: "unsorted",
            },
          ],
          groups: ["breakpoints"],
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
);

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
       "next",
       "next/core-web-vitals",
       "next/typescript",
       "plugin:prettier/recommended",
       "prettier"
    ],
    plugins: ["prettier", "import"],
    rules: {
       "import/order": [
          "error",
          {
             groups: [
                ["builtin", "external"], // Node.js and third-party packages
                ["internal"], // Internal aliases
                ["parent", "sibling", "index"], // Relative imports
             ],
             "newlines-between": "always",
             alphabetize: { order: "ignore" }, // Disables default alphabetical sorting
             pathGroups: [
                {
                   pattern: "@/components/**",
                   group: "internal",
                   position: "before",
                },
                {
                   pattern: "@/hooks/**",
                   group: "internal",
                   position: "before",
                },
                {
                   pattern: "@/utils/**",
                   group: "internal",
                   position: "before",
                },
             ],
             pathGroupsExcludedImportTypes: ["builtin"],
          },
       ],
       "@typescript-eslint/no-explicit-any": "off",
    },
 }),
];

export default eslintConfig;

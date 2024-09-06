const fs = require("fs")
const path = require("path")

const getAngularPrefix = () => {
  const angularConfigPath = path.resolve(__dirname, "./angular.json")
  const angularConfig = JSON.parse(fs.readFileSync(angularConfigPath, "utf-8"))

  const projectName = Object.keys(angularConfig.projects)[0]
  return angularConfig.projects[projectName].prefix || "app"
}

const prefix = getAngularPrefix()

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@angular-eslint/recommended",
    "plugin:@angular-eslint/template/process-inline-templates",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@angular-eslint", "@typescript-eslint", "prettier"],
  rules: {
    "@angular-eslint/component-selector": [
      "error",
      {
        type: "element",
        prefix: prefix,
        style: "kebab-case",
      },
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        type: "attribute",
        prefix: prefix,
        style: "camelCase",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    angular: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
  ignorePatterns: ["projects/**/*", "node_modules", "dist"],
};

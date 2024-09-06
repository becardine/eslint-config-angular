# @becardine/eslint-config-angular

This package provides a pre-configured ESLint setup for Angular projects, with support for TypeScript, Prettier, and accessibility best practices.

## Installation

```bash
npm install --save-dev @becardine/eslint-config-angular eslint prettier
```

## Usage

Add the ESLint config to your project:

- If using .eslintrc.json:

```json
{
  "extends": ["@becardine/eslint-config-angular"]
}
```

- If using .eslintrc.js:

```js
module.exports = {
  extends: ["@becardine/eslint-config-angular"],
};
```

## Run

```
npx eslint .
```

### Features

- Configured for Angular and TypeScript.
- Integrated with Prettier for automatic formatting.
- Includes rules for accessibility and best practices.

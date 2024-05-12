# Blanc Nova ESLint Config

[中文文档](./README_ZH.md)

Blanc Nova's ESLint configurations. you can use this package to lint your JavaScript, TypeScript, and Vue3 projects.

## Installation

To install this package, run the following command:

```bash
npm install eslint @blanc-nova/eslint-config-standard @blanc-nova/eslint-config-typescript @blanc-nova/eslint-config-vue --save-dev
```

## Usage

Create a `.eslintrc` file in the root directory of your project with the following content:

```json
{
  "extends": [
    "@blanc-nova/eslint-config-standard",
    "@blanc-nova/eslint-config-typescript",
    "@blanc-nova/eslint-config-vue"
  ]
}
```

if you are using Vue 3 + TypeScript, you can use the following configuration:

```json
{
  "extends": [
    "@blanc-nova/eslint-config-standard",
    "@blanc-nova/eslint-config-typescript",
    "@blanc-nova/eslint-config-vue"
  ],
  "overrides": [
    {
      "files": ["*.vue"],
      "parserOptions": {
        "parser": "@typescript-eslint/parser"
      }
    }
  ]
}
```

## Vscode Settings

If you are using Visual Studio Code, you can add the following settings to your `settings.json` file:

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## License

[MIT](./LICENSE)

## Related

- [@blanc-nova/eslint-config-standard](https://www.npmjs.com/package/@blanc-nova/eslint-config-standard) - Blanc Nova's ESLint standard configurations.
- [@blanc-nova/eslint-config-typescript](https://www.npmjs.com/package/@blanc-nova/eslint-config-typescript) - Blanc Nova's ESLint TypeScript configurations.
- [@blanc-nova/eslint-config-vue](https://www.npmjs.com/package/@blanc-nova/eslint-config-vue) - Blanc Nova's ESLint Vue configurations.

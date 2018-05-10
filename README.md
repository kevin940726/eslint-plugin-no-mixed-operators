# eslint-plugin-no-mixed-operators

[![NPM](https://nodei.co/npm/eslint-plugin-no-mixed-operators.png)](https://nodei.co/npm/eslint-plugin-no-mixed-operators/)

Fixable no-mixed-operators rule for eslint.

## Why

The plugin originally comes from the need of supporting [prettier](https://github.com/prettier/prettier/issues/3968) to work with eslint. But since [eslint/eslint#8916](https://github.com/eslint/eslint/issues/8916) didn't get enough consensus from the team, I figured to create a drop-in replaceable plugin myself.

## Installation

```sh
yarn add -D eslint-plugin-no-mixed-operators
```

OR

```sh
npm install --save-dev eslint-plugin-no-mixed-operators
```

## Usage

Use it like a regular plugin and disable the original one if it's already enabled.

```js
// .eslintrc
{
  "plugins": ["no-mixed-operators"],
  "rules": [
    "no-mixed-operators": "off",
    "no-mixed-operators/no-mixed-operators": "error"
  ]
}
```

Then you can fix the code with `--fix` via eslint CLI.

```bash
eslint --fix .
```

## Example

Considered the following code

<!-- prettier-ignore -->
```js
a && b + c - d / e || f
```

will automatically be fixed to

<!-- prettier-ignore -->
```js
(a && b + c - (d / e)) || f
```

## Options

All [original options](https://eslint.org/docs/rules/no-mixed-operators#options) are available.

## Running Tests

```sh
yarn test # npm test
```

## Running Demo

```sh
cd demo # change to the demo directory
yarn # npm install
yarn test # npm test
```

See `demo/index.js` for fixed changes.

## Author

Kai Hao

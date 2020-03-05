# stylelint-config-intracto [![npm version](https://img.shields.io/npm/v/@intracto/stylelint-config-intracto.svg)](https://www.npmjs.com/package/@intracto/stylelint-config-intracto)

## Introduction

This repository contains sample linting configs for, .scss files. Currently they are all based on recommended configs and prettier.

## How to use

### Installing

To install this repo, run:

```bash
yarn add @intracto/stylelint-config-intracto
```

And then configure your [cosmiconfig](https://github.com/davidtheclark/cosmiconfig), e.g. by creating a `.stylelintrc.json` file with the following content:

```json
{
  "extends": ["@intracto/stylelint-config-intracto/scss"]
}
```

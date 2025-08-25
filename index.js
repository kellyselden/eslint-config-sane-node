'use strict';

const {
  defineConfig,
} = require('@eslint/config-helpers');

const jsonFiles = require('eslint-plugin-json-files');
const node = require('eslint-plugin-n');
const sane = require('eslint-config-sane');

module.exports = defineConfig([
  node.configs['flat/recommended-script'],
  sane,
  {
    files: [
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
    ],
    rules: {
      'strict': 'error',
    },
  },
  {
    files: [
      'package.json',
    ],
    plugins: {
      'json-files': jsonFiles,
    },
    processor: 'json-files/json',
    rules: {
      'json-files/restrict-ranges': [2, {
        pinUnstable: true,
      }],
    },
  },
]);

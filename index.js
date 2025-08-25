'use strict';

const {
  defineConfig
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
      '**/*.mjs'
    ],
    plugins: {
      'json-files': jsonFiles
    },
    rules: {
      'strict': 'error',

      'json-files/restrict-ranges': [2, {
        pinUnstable: true
      }]
    }
  }
]);

'use strict';

const {
  defineConfig,
<<<<<<< HEAD
} = require('eslint/config');

=======
  globalIgnores
} = require('eslint/config');

const mocha = require('eslint-plugin-mocha');
>>>>>>> f77ce0f (v6.5.2...v6.7.0)
const saneNode = require('eslint-config-sane-node');

module.exports = defineConfig([
  saneNode,
<<<<<<< HEAD
=======
  mocha.configs.flat.recommended,
  {
    files: ['test/**/*-test.js'],
    rules: {
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-empty-description': 'off'
    }
  },
  globalIgnores([
    'test/fixtures/'
  ])
>>>>>>> f77ce0f (v6.5.2...v6.7.0)
]);

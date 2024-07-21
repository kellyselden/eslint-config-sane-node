module.exports = {
  env: {
    node: true
  },
  extends: [
    'sane',
    'plugin:n/recommended'
  ],
  plugins: [
    'json-files'
  ],
  rules: {
    'strict': 'error',

    'n/no-unsupported-features/es-syntax': ['error', {
      'ignores': [
        // remove once https://github.com/mysticatea/eslint-plugin-node/issues/250 is fixed
        'dynamicImport'
      ]
    }],

    'json-files/restrict-ranges': [2, { pinUnstable: true }]
  }
};

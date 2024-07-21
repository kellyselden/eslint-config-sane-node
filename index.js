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

    'json-files/restrict-ranges': [2, { pinUnstable: true }]
  }
};

module.exports = {
  extends: [
    'sane',
    'plugin:node/recommended'
  ],
  plugins: [
    'json-files'
  ],
  rules: {
    'json-files/restrict-ranges': [2, { pinUnstable: true }]
  }
};

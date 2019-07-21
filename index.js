module.exports = {
  extends: 'sane',
  plugins: [
    'json-files'
  ],
  rules: {
    'json-files/restrict-ranges': [2, { pinUnstable: true }]
  }
};

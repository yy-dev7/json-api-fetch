export default {
  input: 'lib/index.js',

  output: {
    file: 'dist/HttpClient.js',
    format: 'umd',
    name: 'HttpClient'
  },

  onwarn(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === 'THIS_IS_UNDEFINED') { return }

    // console.warn everything else
    console.warn(warning.message)
  }
}
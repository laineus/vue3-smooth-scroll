const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: resolve('dist'),
    filename: 'vue-smooth-scroll.min.js',
    library: 'VueSmoothScroll',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          resolve('src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'eslint-loader',
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['js']
  }
}

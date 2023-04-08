const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
const webpack = require('webpack');
let appName = JSON.parse(packageJson).name || ""

process.env.VUE_APP_NAME = appName
process.env.VUE_APP_COMPILIATION_DATE = new Date().toISOString()

module.exports = {
  outputDir: __dirname + '/docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],    
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "tty": require.resolve("tty-browserify"),
        "os": require.resolve("os-browserify/browser"),
      }
    },
  },
}
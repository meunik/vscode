const fs = require('fs')
const packageJson = fs.readFileSync('./package.json')
let appName = JSON.parse(packageJson).name || ""

process.env.VUE_APP_NAME = appName
process.env.VUE_APP_COMPILIATION_DATE = new Date().toISOString()

module.exports = {
  outputDir: __dirname + '/docs',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
}
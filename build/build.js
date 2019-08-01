require('./check-versions')()

// process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackProdConfig = require('./webpack.prod.conf')
var webpackDevConfig = require('./webpack.dev.conf')

var webpackConfig
if (process.env.NODE_ENV === 'production') {
  webpackConfig = webpackProdConfig
} else {
  webpackConfig = webpackDevConfig
}

var spinner = ora('building for production...')
spinner.start()

let rmPath = config.build.assetsRoot
if(process.env.npm_config_project && typeof process.env.npm_config_project === 'string') {
  rmPath = rmPath + '/+(' + process.env.npm_config_project.split(',').join('|') + ')'

}

console.log('rmpath:',rmPath)

rm(rmPath, err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

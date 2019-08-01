var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var fs = require('fs')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// var ImageminPlugin = require('imagemin-webpack-plugin').default

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: '[name]/static/js/index.[chunkhash].js',
    chunkFilename: '[name]/static/js/[id].[chunkhash].js'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: '[name]/static/css/index.[contenthash].css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
      /**
      new BundleAnalyzerPlugin({
          //  可以是`server`，`static`或`disabled`。
          //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
          //  在“静态”模式下，会生成带有报告的单个HTML文件。
          //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
          analyzerMode: 'server',
          //  将在“服务器”模式下使用的主机启动HTTP服务器。
          analyzerHost: '127.0.0.1',
          //  将在“服务器”模式下使用的端口启动HTTP服务器。
          analyzerPort: 8889,
          //  路径捆绑，将在`static`模式下生成的报告文件。
          //  相对于捆绑输出目录。
          reportFilename: 'report.html',
          //  模块大小默认显示在报告中。
          //  应该是`stat`，`parsed`或者`gzip`中的一个。
          //  有关更多信息，请参见“定义”一节。
          defaultSizes: 'parsed',
          //  在默认浏览器中自动打开报告
          openAnalyzer: false,
          //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
          generateStatsFile: false,
          //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
          //  相对于捆绑输出目录。
          statsFilename: 'stats.json',
          //  stats.toJson（）方法的选项。
          //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
          //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
          statsOptions: null,
          logLevel: 'info' //日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
}),
       **/
    // new webpack.LoaderOptionsPlugin({
    //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    //   options: {
    //     customInterpolateName: function(url, name, options) {
    //       console.log('assets path:', url, ':assets name:', name, ':options:', options)
    //       return url.replace('src/', '/')
    //     }
    //   }
    // }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'common/js/vendor.[chunkhash].js',
    //   minChunks: function (module, count) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // // extract webpack runtime and module manifest to its own file in order to
    // // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   filename: 'common/js/manifest.[chunkhash].js',
    //   chunks: ['vendor']
    // }),
    // copy custom static assets
    /*new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),*/

    // 图片压缩
    // new ImageminPlugin({
    //   optipng: { optimizationLevel: 5 },
    //   jpegtran: { progressive: true },
    //   gifsicle: { interlaced: true },
    //   svgo: { removeViewBox: true },
    // })
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

// generate dist index.html with correct asset hash for caching.
// you can customize output by editing /index.html
// see https://github.com/ampedandwired/html-webpack-plugin
var pages = Object.keys(webpackConfig.entry)
pages.forEach(function(pagename) {
  var conf = {
    filename: path.resolve(config.build.assetsRoot, pagename, 'index.html'),
    template: 'index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency',
    chunks: [`${pagename}-manifest`, `${pagename}-vendor`, pagename]
  }
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin(conf)
  )
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: `${pagename}-vendor`,
      filename: `${pagename}/static/js/vendor.[chunkhash].js`,
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      },
      chunks: [pagename],
      // children: true
    })
  )
  webpackConfig.plugins.push(
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: `${pagename}-manifest`,
      filename: `${pagename}/static/js/manifest.[chunkhash].js`,
      chunks: [`${pagename}-vendor`]
    })
  )
})
if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig

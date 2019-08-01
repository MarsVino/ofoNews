var utils = require('./utils')

// vue-loader 的配置信息： https://vue-loader.vuejs.org/zh/
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: false
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

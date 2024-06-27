const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map',
    // 为不同的环境设置不同的source-map
    productionSourceMap: true,
  }
})

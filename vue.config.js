module.exports = {
  // vue.js里解决跨域问题
  devServer: {
    proxy: {
      'api/': {
        target: 'http://localhost:8000', // 目标地址
        changeOrigin: true,
        pathRewrite: {
          '^api': '' // 需要重写的地址
        }
      }
    }
  }
}

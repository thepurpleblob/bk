module.exports = {
  devServer: {
    //disableHostCheck: true,
    allowedHosts: ['all'],
    host: '0.0.0.0',
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },

  configureWebpack: {
    devtool: 'source-map'
  }
}

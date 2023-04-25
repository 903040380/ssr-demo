const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(baseConfig, {
  entry: './server.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()], // node环境下排除node模块的导入避免报错
})

const path = require('path')
const { DefinePlugin } = require('webpack')

const env = JSON.stringify({ NODE_ENV: 'development' })
module.exports = {
  mode: 'none',
  plugins: [
    new DefinePlugin({
      'process.env': env,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic', // react17+配置后不需要引入react即可使用jsx
              },
            ],
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
}

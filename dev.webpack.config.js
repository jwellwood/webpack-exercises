const merge = require('webpack-merge');
const base = require('./base.webpack.config.js');
const Dotenv = require('dotenv-webpack');
const WebpackMonitor = require('webpack-monitor');

module.exports = merge(base, {
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new Dotenv({
      path: './dev.env',
    }),
    new WebpackMonitor({
      capture: true,
      target: '../monitor/myStatsStore.json',
      // next line commented so we can see what our output looks like. To see the monitor instead, uncomment.
      launch: true,
      port: 3030,
    }),
  ],
});

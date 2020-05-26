const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'), // Set the base path
  resolve: {
    // Set the extensions so they don't have to be included in imports
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: {
    app: ['regenerator-runtime/runtime', './index.tsx'],
    appStyles: ['./styles/mystyles.scss'],
    reactStyles: ['./styles/reactStyles.scss'],
    // vendor: ['react'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]((?!s?css).)*$/,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          name: './js/[hash].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5000, // any files under 5k get embedded in html file directly
            name: './img/[hash].[name].[ext]',
          },
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
    }),
  ],
};

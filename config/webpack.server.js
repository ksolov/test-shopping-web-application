/* eslint import/no-extraneous-dependencies: 0 */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ENV = 'production';
const getConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const BUILD_PATH = './build/';

// uncomment if you want to see configs merge result
// const helpers = require('./helpers');
const ASSETS_PATH = 'assets/';

const commonConfig = getConfig({
  env: ENV,
  folder: ASSETS_PATH
});

const config = webpackMerge.smart(commonConfig, {
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  entry: helpers.root('src', 'server.js'),
  output: {
    path: helpers.root(BUILD_PATH),
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [helpers.root('src'), helpers.root('node_modules')]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-decorators-legacy']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      'process.env.BROWSER': JSON.stringify(false)
    })
  ]
});
//helpers.writeJSON(config);
module.exports = config;

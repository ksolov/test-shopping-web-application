/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getPostcssPlugins = require('./postcss_plugins.js');
const helpers = require('./helpers');

const webpackConfig = function (options) {
  const env = options.env;
  const folder = options.folder || '';
  const folderFonts = options.folderFonts || '';

  const isProd = env === 'prod' || env === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      polyfills: ['babel-polyfill'],
      app: [helpers.root('src', 'index.jsx')]
    },
    output: {
      path: helpers.root('build'),
      publicPath: '/',
      filename: `${folder}[name].js`
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [
        helpers.root('src'),
        helpers.root('node_modules')
      ]
    },
    module: {
      rules: [

        {
          test: /\.s?css$/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => getPostcssPlugins
              }
            },
            { loader: 'sass-loader' },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  './src/styles/variables.scss',
                  './src/styles/mixins.scss'
                ]
              }
            }
          ]
        },
        // scripts
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          },
          include: [
            helpers.root('src')
          ]
        },
        {
          test:  /\.(jpg|png|gif)$|(img\.svg)$/,
          use: {
            loader: 'file-loader',
            options: { name: folder + '[name].[ext]' }
          },
          include: [
            helpers.root('src')
          ]
        },
        // fonts
        {
          test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: {
            loader: 'file-loader',
            options: { name: folderFonts + '[name].[ext]' }
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader?minimize=false'
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: helpers.root('src', 'static', 'img'),
          to: helpers.root('build', 'assets', 'img'),
          flatten: true
        }
      ])
    ]
  };
};

module.exports = webpackConfig;

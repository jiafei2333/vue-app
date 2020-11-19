const path = require('path');
const { merge } = require('webpack-merge');
// plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const prod = require('./webpack.prod.conf');
const dev = require('./webpack.dev.conf');

module.exports = (env) => {
  const isDev = env.development;
  const base = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
      filename: '[name].[bash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.(css|less)$/,
          use: [
            {
              loader: isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'postcss-loader',
            'less-loader',
            // {
            //   loader: 'style-resources-loader',
            //   options: {
            //     patterns: path.resolve(__dirname, '../src/assets/less/variables/*.less'),
            //     injector: 'append'
            //   }
            // }
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            name: '[name].[ext]',
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: '衣销易零售系统',
        filename: path.resolve(__dirname, '../dist/index.html'),
        hash: true,
        template: path.resolve(__dirname, '../public/index.html'),
        inject: true,
        minify: !isDev && { // 压缩
          removeComments: true, // 清除注释
        },
      }),
      !isDev && new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: 'css_chunk_[id]_[hash].css',
      }),
    ].filter(Boolean),
  };
  if (isDev) {
    return merge(base, dev);
  }
  return merge(base, prod);
};

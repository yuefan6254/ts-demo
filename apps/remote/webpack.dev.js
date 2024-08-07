const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common,{
  mode: 'development',
  entry: ['./src/index.tsx'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: { "querystring": require.resolve("querystring-es3") }
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './public/index.html'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    // new ErrorOverlayPlugin(),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist')
    },
    compress: true,
    hot: true,
    port: 3003,
    open: true,
    historyApiFallback: true,
    client: {
        overlay: true,
        // webSocketURL: 'auto://0.0.0.0:0/ws', // 确保客户端配置正确
      },
      // allowedHosts: 'all', // 允许所有主机访问
  },
  devtool: 'source-map'
});

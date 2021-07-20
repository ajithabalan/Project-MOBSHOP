const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const DotEnv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = require('./base.config.js');

DotEnv.config({ path: '.env.dev'});

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map', //This option controls if and how source maps are generated.
  devServer: { //webpack-dev-server can be used to quickly develop an application
    contentBase: false, //tell the server where to serve content from. This is only necessary if you want to serve static files.
    publicPath: '/',
    historyApiFallback: true,//When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses.
    // Enable devServer.historyApiFallback by setting it to true:
    clientLogLevel: 'warning',
// //     When using inline mode, the console in your DevTools will show you messages .
// devServer.clientLogLevel may be too verbose, you can turn logging off by setting it to 'silent'.
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DB_URL':JSON.stringify(process.env.FIREBASE_DB_URL),
      'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MSG_SENDER_ID':JSON.stringify(process.env.FIREBASE_MSG_SENDER_ID),
      'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID)
    })
  ]
});

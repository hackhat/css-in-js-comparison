var webpack = require('webpack');
var webpackConfig = require('tottys-project').webpackConfig({
    rootPath: __dirname,
    overrideUnderscoreWithLodash: false,
    styles: {
        enabled: false
    }
}).settings;



// Needed for react-style.
// var ReactStylePlugin = require('react-style-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// webpackConfig.module.loaders.push({
//     test: /\.js$/,
//     loader: ReactStylePlugin.loader()
// })
// webpackConfig.plugins.push(new ReactStylePlugin('bundle.css'));
var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig = {
  devtool: 'sourcemap',
  entry: './src/client/index.js',
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    alias: {}
  },
  custom: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          ReactStylePlugin.loader()
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      }
    ]
  },
  plugins: [
    new ReactStylePlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        // To enable production mode:
        // NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};



module.exports = require('tottys-project').gulpfile({
    rootPath      : __dirname,
    webpackConfig : webpackConfig,
});


module.exports = {
    webpackConfig: webpackConfig
}

var webpack = require('webpack');
var webpackConfig = require('tottys-project').webpackConfig({
    rootPath: __dirname,
    overrideUnderscoreWithLodash: false,
    styles: {
        enabled: false
    }
}).settings;


// Needed for react-style.
var ReactStylePlugin = require('react-style-webpack-plugin');
webpackConfig.module.loaders.push({
    test: /\.js$/,
    loader: ReactStylePlugin.loader()
})
webpackConfig.plugins.push(new ReactStylePlugin('bundle.css'));
delete webpackConfig.resolve.alias.react

module.exports = require('tottys-project').gulpfile({
    rootPath      : __dirname,
    webpackConfig : webpackConfig,
});

module.exports = {
    webpackConfig: webpackConfig
}

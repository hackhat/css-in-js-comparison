// Needed for file-loader in webpack.
GLOBAL.__webpack_public_path__ = '';
var options = require('./gulpfile').webpackConfig;
// enable for all modules recursivly
// This replaces the original require function in loaded modules
options.recursive = true;
options.originalRequire = require;
var myRequire = require('enhanced-require')(module, options);
myRequire.originalRequire = require;
module.exports = myRequire;

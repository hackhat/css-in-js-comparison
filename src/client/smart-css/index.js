var React    = require('react');
var Root     = React.createFactory(require('./ui/Root'));
var SmartCSS = require('smart-css');





module.exports = function(options){
    SmartCSS.injectStyles();
    return Root(options);
}

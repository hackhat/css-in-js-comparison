var React = require('react');
var Root  = React.createFactory(require('./ui/Root'));
var RCSS  = require('rcss');





module.exports = function(options){
    RCSS.injectAll();
    return Root(options);
}

var React = require('react');
var Root  = React.createFactory(require('./ui/Root'));



module.exports = function(options){
    return Root(options);
}

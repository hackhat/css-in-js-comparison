var React = require('react');
var Root  = React.createFactory(require('./ui/Root'));
// var Absurd = require("absurd"); doesn't work.. I don't know why, maybe has some issues with webpack.
// Added `module.exports = client();` to the library source, it's faster than adding to webpack config.
// Easiest way to load is with `var Absurd = require('../absurd');`;
// Note: would be nice to add the `absurd.compile` only here but it creates a new context each time.
// In a real project you would use a gulp task to render the CSS file.



module.exports = function(options){
    return Root(options);
}

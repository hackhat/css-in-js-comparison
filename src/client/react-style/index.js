var React = require('react');
var Root  = React.createFactory(require('./ui/Root'));
// Seems like it only works with react-style-webpack-plugin
// Uses a lot of react internals which might not be available in future
// (react/lib/Object.assign, react/lib/CSSProperty...).
//
// To make the simple example to work I had to cd into the root of the module and run again
// npm install. You also have to npm install in the simple folder in example to run it.
// I don't know why it didn't got the first time. Here is the command to run the simple
// example `"../../../node_modules/.bin/webpack" --hide-modules --watch` (cd into the folder first)


module.exports = function(options){
    return Root(options);
}

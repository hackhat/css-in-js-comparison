var React        = require('react');
var page         = require('page');
var MainPage     = React.createFactory(require('./MainPage'));
var SmartCSSRoot = require('./smart-css/index');
var RCSSRoot     = require('./RCSS/index');




page('/', function(ctx){
    React.render(MainPage({ctx: ctx, page: page}), document.getElementById('root'));
})



page('/examples/smart-css', function(ctx){
    var smartCSSRoot = SmartCSSRoot({ctx: ctx, page: page});
    React.render(smartCSSRoot, document.getElementById('root'));
})



page('/examples/rcss', function(ctx){
    var _RCSSRoot = RCSSRoot({ctx: ctx, page: page});
    React.render(_RCSSRoot, document.getElementById('root'));
})





page({
    hashbang:true
});

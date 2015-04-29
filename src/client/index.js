var React        = require('react');
var page         = require('page');
var MainPage     = React.createFactory(require('./MainPage'));
var SmartCSSRoot = require('./smart-css/index');




page('/', function(ctx){
    React.render(MainPage({ctx: ctx, page: page}), document.getElementById('root'));
})



page('/examples/smart-css', function(ctx){
    var smartCSSRoot = SmartCSSRoot({ctx: ctx, page: page});
    React.render(smartCSSRoot, document.getElementById('root'));
})





page({
    hashbang:true
});

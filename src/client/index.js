var React             = require('react');
var page              = require('page');
var MainPage          = React.createFactory(require('./MainPage'));
var SmartCSSRoot      = require('./smart-css/index');
var RCSSRoot          = require('./RCSS/index');
var AbsurdRoot        = require('./absurd/index');
// var ReactStyleRoot = require('./react-style/index');
var RadiumRoot        = require('./radium/index');
var JsxstyleRoot      = require('./jsxstyle/index');





page('/', function(ctx){
    React.render(MainPage({ctx: ctx, page: page}), document.getElementById('root'));
})



page('/examples/smart-css', function(ctx){
    var smartCSSRoot = SmartCSSRoot({ctx: ctx, page: page});
    React.render(smartCSSRoot, document.getElementById('root'));
})



page('/examples/RCSS', function(ctx){
    var _RCSSRoot = RCSSRoot({ctx: ctx, page: page});
    React.render(_RCSSRoot, document.getElementById('root'));
})



page('/examples/absurd', function(ctx){
    var absurdRoot = AbsurdRoot({ctx: ctx, page: page});
    React.render(absurdRoot, document.getElementById('root'));
})



page('/examples/react-style', function(ctx){
    alert('Not available!');
    throw new Error('not available');
    var reactStyleRoot = ReactStyleRoot({ctx: ctx, page: page});
    React.render(reactStyleRoot, document.getElementById('root'));
})



page('/examples/radium', function(ctx){
    var radiumRoot = RadiumRoot({ctx: ctx, page: page});
    React.render(radiumRoot, document.getElementById('root'));
})



page('/examples/jsxstyle', function(ctx){
    var jsxstyleRoot = JsxstyleRoot({ctx: ctx, page: page});
    React.render(jsxstyleRoot, document.getElementById('root'));
})





page({
    hashbang:true
});

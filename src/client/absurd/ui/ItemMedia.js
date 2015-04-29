var React  = require('react');
// Added `module.exports = client();` to the library source, it's faster than adding to webpack config.
var Absurd = require('../absurd');
var absurd = Absurd();



absurd.add({
    '.item-media': {
        background: 'yellow',
        padding : '20px',
        '@media (min-width: 600px)': {
            background: 'red'
        },
        '@media (max-width: 600px)': {
            background: 'orange'
        }
    }
});
debugger
absurd.compile(function(err, css) {
    // use the compiled css
});





var Root = React.createClass({



    displayName: 'ItemMedia',



    render: function() {
        return React.DOM.li({
            className: 'item-media'
        },
            React.DOM.p({
            }, this.props.label)
        )
    }



});





module.exports = Root;

var React  = require('react');
var Absurd = require('../absurd');
var absurd = Absurd();
var utils  = require('../utils');





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
absurd.compile(function(err, css){
    err && console.error(err);
    utils.injectCSS(css);
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

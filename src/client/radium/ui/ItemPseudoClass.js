var React = require('react');
// var Absurd = require('../absurd');
var absurd = Absurd();
// var utils  = require('../utils');





// Distance between the .parent:hover .label and .parent .label
// Sometimes can be too big and hard to understand.
absurd.add({
    '.item-pseudo-class': {
        padding : '20px',
        ':hover': {
            background: 'red',
            label: {
                color: 'white'
            }
        },
        '.label': {
            border: '1px solid grey'
        }
    }
});
absurd.compile(function(err, css){
    err && console.error(err);
    utils.injectCSS(css);
});





var Root = React.createClass({



    displayName: 'ItemPseudoClass',



    render: function() {
        return React.DOM.li({
            className : 'item-pseudo-class'
        },
            React.DOM.p({
                className: 'label'
            }, this.props.label)
        )
    }



});





module.exports = Root;

var React = require('react');
var RCSS  = require('rcss');





var root = RCSS.registerClass({
    background: 'yellow',
    padding : '20px',
    '@media (min-width: 600px)': {
        background: 'red'
    },
    '@media (max-width: 400px)': {
        background: 'orange'
    }
})





var Root = React.createClass({



    displayName: 'ItemMedia',



    render: function() {
        return React.DOM.li({
            className: root.className
        },
            React.DOM.p({
            }, this.props.label)
        )
    }



});





module.exports = Root;

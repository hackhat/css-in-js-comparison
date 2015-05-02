var React    = require('react');
var Block    = require('jsxstyle').Block;




var Root = React.createClass({



    displayName: 'ItemMedia',



    render: function() {
        return Block({
            background  : 'yellow',
            padding     : '20px'
        },
            React.DOM.p({
            }, this.props.label)
        )
    }



});





module.exports = Root;

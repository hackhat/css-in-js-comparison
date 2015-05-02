var Radium = require('radium');
var React  = require('react');





var styles = {
    'item-media': {
        background: 'yellow',
        padding : '20px',
        '@media (min-width: 600px)': {
            background: 'red'
        },
        '@media (max-width: 600px)': {
            background: 'orange'
        }
    }
};





var Root = React.createClass(Radium.wrap({



    displayName: 'ItemMedia',



    render: function() {
        return React.DOM.li({
            style: [
                styles['item-media']
            ]
        },
            React.DOM.p({
            }, this.props.label)
        )
    }



}));





module.exports = Root;

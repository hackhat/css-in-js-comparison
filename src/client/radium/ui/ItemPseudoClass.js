var Radium = require('radium');
var React  = require('react');





var styles = {
    'item-pseudo-class': {
        padding : '20px',
        ':hover': {
            background: 'red',
            label: {
                color: 'white'
            }
        },
        'label': {
            border: '1px solid grey'
        }
    }
};





var Root = React.createClass(Radium.wrap({



    displayName: 'ItemPseudoClass',



    render: function() {
        return React.DOM.li({
            style: [
                styles['item-pseudo-class']
            ]
        },
            React.DOM.p({
                style: [
                    styles['item-pseudo-class']['label']
                ]
            }, this.props.label)
        )
    }



}));





module.exports = Root;

var React  = require('react');
var StyleSheet = require('react-style')





var styles = StyleSheet.create({
    'item-media': {
        background: 'yellow',
        padding : '20px',
    },
    '@media (min-width: 600px)': {
        'item-media': {
            background: 'red'
        }
    },
    '@media (max-width: 600px)': {
        'item-media': {
           background: 'orange'
        }
    }
})
// When you are using the webpack plugin then `styles['item-media']` turns into
// a string with the class name.
// If you don't use the webpack plugin then `styles['item-media']` is just an
// object with the styles.




var Root = React.createClass({



    displayName: 'ItemMedia',



    render: function() {
        return React.DOM.li({
            className: styles['item-media'],
            // style: styles['item-media']
        },
            React.DOM.p({
            }, this.props.label)
        )
    }



});





module.exports = Root;

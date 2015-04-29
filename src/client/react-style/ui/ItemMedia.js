var React  = require('react');
var StyleSheet = require('react-style')





var styles = StyleSheet.create({
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
})





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

var React = require('react');
var RCSS  = require('rcss');





var root = RCSS.registerClass({
    padding : '20px',
    ':hover': {
        background: 'rgba(0, 0, 0, 0.18)'
    }
})



var label = RCSS.registerClass({
    border: '1px solid grey',
    '::after': {
        // With RCSS you can put a string directly (but you can't use CSS functions)
        content : " ::after by default"
    }
})
var labelParentHover = RCSS.registerClass({
    '::after': {
        content: " ::after on parent hover"
    }
})





var Root = React.createClass({



    displayName: 'ItemPseudoElement',



    getInitialState: function(){
        return {
            parentHover: false,
        }
    },



    __onMouseOver: function(){
        this.setState({
            parentHover: true
        });
    },



    __onMouseOut: function(){
        this.setState({
            parentHover: false
        });
    },



    render: function() {
        return React.DOM.li({
            className   : root.className,
            onMouseOver : this.__onMouseOver,
            onMouseOut  : this.__onMouseOut,
        },
            React.DOM.p({
                className: [
                    label.className,
                    (this.state.parentHover ? labelParentHover.className : '')
                ].join(' ')
            }, this.props.label)
        )
    }



});





module.exports = Root;

var React = require('react');
var RCSS  = require('rcss');





var root = RCSS.registerClass({
    padding : '20px',
    ':hover': {
        background: 'red'
    }
})



var label = RCSS.registerClass({
    border: '1px solid grey'
})
var labelParentHover = RCSS.registerClass({
    color: 'white'
})





var Root = React.createClass({



    displayName: 'ItemPseudoClass',



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

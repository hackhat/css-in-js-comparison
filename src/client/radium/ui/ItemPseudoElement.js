var Radium = require('radium');
var React = require('react');





var styles = {
    itemPseudoElement: {
        padding : '20px',
        ':hover': {
            background: 'rgba(0, 0, 0, 0.18)'
        },
    },
    label: {
        border: '1px solid grey'
    }
};





var Root = React.createClass(Radium.wrap({



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
            onMouseOver : this.__onMouseOver,
            onMouseOut  : this.__onMouseOut,
            style: [
                styles.itemPseudoElement
            ]
        },
            React.DOM.p({
                style: [
                    styles.label,
                    (this.state.parentHover ? styles.labelParentHover : '')
                ]
            },
                [
                    this.props.label,
                    // Simulated pseudo element. It might should be wrapped in a <span> tag.
                    (this.state.parentHover ? ' ::after on parent hover' : ' ::after by default')
                ].join('')
            )
        )
    }



}));





module.exports = Root;

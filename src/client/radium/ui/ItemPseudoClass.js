var Radium = require('radium');
var React  = require('react');





var styles = {
    itemPseudoClass: {
        padding : '20px',
        ':hover': {
            background: 'red',
        },
    },
    label: {
        border: '1px solid grey'
    },
    labelParentHover: {
        color: 'white'
    }
};





var Root = React.createClass(Radium.wrap({



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
            onMouseOver : this.__onMouseOver,
            onMouseOut  : this.__onMouseOut,
            style: [
                styles.itemPseudoClass
            ]
        },
            React.DOM.p({
                style: [
                    styles.label,
                    (this.state.parentHover ? styles.labelParentHover : '')
                ]
            }, this.props.label)
        )
    }



}));





module.exports = Root;

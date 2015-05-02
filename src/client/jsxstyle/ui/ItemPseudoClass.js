var React    = require('react');
var SmartCSS = require('smart-css');





var css = new SmartCSS({
    name: 'ItemPseudoClass'
});



css.setClass('.root', {
    padding : '20px',
})
css.setClass('.root:hover', {
    background: 'red'
})



css.setClass('.label', {
    border: '1px solid grey'
})
css.setClass('.root:hover .label', {
    color: 'white'
})



var Root = React.createClass({



    displayName: 'ItemPseudoClass',



    render: function() {
        return React.DOM.li({
            className: css.getClass('root')
        },
            React.DOM.p({
                className: css.getClass('label')
            }, this.props.label)
        )
    }



});





module.exports = Root;

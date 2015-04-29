var React    = require('react');
var SmartCSS = require('smart-css');





var css = new SmartCSS({
    name: 'ItemPseudoElement'
});



css.setClass('.root', {
    padding : '20px',
})
css.setClass('.root:hover', {
    background: 'rgba(0, 0, 0, 0.18)'
})




css.setClass('.label', {
    border: '1px solid grey'
})
css.setClass('.label::after', {
    content: "' ::after by default'"
})
css.setClass('.root:hover .label::after', {
    content: "' ::after on parent hover'"
})



var Root = React.createClass({



    displayName: 'ItemPseudoElement',



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

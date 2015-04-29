var React    = require('react');
var SmartCSS = require('smart-css');





var css = new SmartCSS({
    name: 'ItemMedia'
});



css.setClass('.root', {
    background: 'yellow',
    padding : '20px'
})
css.setClass('.root', {
    background: 'red'
}, {
    media: '(min-width: 600px)'
})
css.setClass('.root', {
    background: 'orange'
}, {
    media: '(max-width: 400px)'
})



var Root = React.createClass({



    displayName: 'ItemMedia',



    render: function() {
        return React.DOM.li({
            className: css.getClass('root')
        },
            React.DOM.p({
            }, this.props.label)
        )
    }



});





module.exports = Root;

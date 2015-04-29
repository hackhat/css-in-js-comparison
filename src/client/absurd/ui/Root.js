var React             = require('react');
var ItemPseudoClass   = React.createFactory(require('./ItemPseudoClass'));
var ItemPseudoElement = React.createFactory(require('./ItemPseudoElement'));
var ItemMedia         = React.createFactory(require('./ItemMedia'));





var Root = React.createClass({



    displayName: 'Root',



    render: function() {
        return React.DOM.div({},
            React.DOM.h1({}, 'absurd'),
            React.DOM.p({}, 'Writing CSS in JS with absurd'),
            React.DOM.ul({

            },
                ItemPseudoClass({label: 'pseudo class'}),
                ItemPseudoElement({label: 'pseudo element'}),
                ItemMedia({label: '@media, change viewport width to change the color'})
            )
        )
    }



});





module.exports = Root;

var React = require('react');





var Root = React.createClass({



    displayName: 'Root',



    render: function() {
        return React.DOM.div({},
            React.DOM.h1({}, 'smart-css'),
            React.DOM.p({}, 'Writing CSS in JS with smart-css')
        )
    }



});





module.exports = Root;

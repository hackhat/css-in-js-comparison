var React = require('react');





var MainPage = React.createClass({



    displayName: 'MainPage',



    render: function() {
        return React.DOM.div({},
            React.DOM.h1({}, 'CSS in JS library comparison'),
            React.DOM.p({}, 'Click on one of the following link to go see an example of a library:'),
            React.DOM.ul({},
                React.DOM.a({href:"/examples/smart-css"}, 'smart-css')
            )
        )
    }



});





module.exports = MainPage;
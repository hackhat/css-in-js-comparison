var React = require('react');
// var Absurd = require('../absurd');
// var absurd = Absurd();
// var utils  = require('../utils');





// // Distance between the .parent:hover .label and .parent .label
// // Sometimes can be too big and hard to understand.
// absurd.add({
//     '.item-pseudo-element': {
//         padding : '20px',
//         ':hover': {
//             background: 'rgba(0, 0, 0, 0.18)',
//             '.label': {
//                 color: 'white',
//                 '::after': {
//                     content: "' ::after on parent hover'"
//                 }
//             }
//         },
//         '.label': {
//             border: '1px solid grey',
//             '::after': {
//                 content : "' ::after by default'"
//             }
//         }
//     }
// });
// absurd.compile(function(err, css){
//     err && console.error(err);
//     utils.injectCSS(css);
// });





var Root = React.createClass({



    displayName: 'ItemPseudoElement',



    render: function() {
        return React.DOM.li({
            className : 'item-pseudo-element'
        },
            React.DOM.p({
                className: 'label'
            }, this.props.label)
        )
    }



});





module.exports = Root;

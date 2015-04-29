module.exports = {
    injectCSS : function(cssString){
        var tag = document.createElement('style');
        tag.innerHTML = cssString;
        document.getElementsByTagName('head')[0].appendChild(tag);
    }
}

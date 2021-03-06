// @name        Global Attribute Replacement
// @description Overwrites all of a specified attribute
// @version     1.0
// @grant       none
// Written by Allen Vanderlinde

(function() {
    var originalLink = 'https://www.google.com';
    var updatedLink = 'https://www.arstechnica.com';

    function replaceLinks(element, attribute, orig, updated) {
        var elements = document.getElementsByTagName(element);

        for(var i = 0; i < elements.length; i++) {
            elements[i][attribute] = elements[i][attribute].replace(orig, updated);
        }
    }

    replaceLinks('a', 'href', originalLink, updatedLink);
})();

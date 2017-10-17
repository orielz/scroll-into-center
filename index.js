var $ = require('jquery');

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function scrollIntoCenter(elem, options) {

    // Read options.
    if (options === undefined)  options = {};
    if (options.vertical === undefined)  options.vertical = 0.5;
    if (options.horizontal === undefined)  options.horizontal = 0.5;

    var container = options.container || elem.ownerDocument.defaultView;
    var isContainer = options.container;

    // Fetch positional information.
    var rect = elem.getBoundingClientRect();
    var containerRect = isContainer && container.getBoundingClientRect();


    // Determine location to scroll to.
    var targetY = container[isContainer ? 'scrollTop' : 'scrollY'] + (rect.top - (isContainer ? containerRect.top : 0)) - ((container[isContainer ? 'clientHeight' : 'innerHeight']) - elem.offsetHeight) * options.vertical;
    var targetX = container[isContainer ? 'scrollLeft' : 'scrollX'] + (rect.left - (isContainer ? containerRect.left : 0)) - ((container[isContainer ? 'clientWidth' : 'innerWidth']) - elem.offsetWidth) * options.horizontal;

    // Scroll.
    $(container).animate({scrollTop: targetY, scrollLeft: targetX});

    // If window is inside a frame, center that frame in the parent window. Recursively.
    if (!isContainer && container.parent !== container) {
        // We are inside a scrollable element.
        var frame = container.frameElement;
        scrollIntoCenter.call(frame, options);
    }

};

module.exports = exports['default'];
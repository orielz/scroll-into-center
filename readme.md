# scroll into center

This script provides a polyfill to support unstandardised Element.scrollIntoCenter(), similar to the standard scrollIntoView. always aligns the element with the top of the view.

Simply include the script, and every DOM element will have the method scrollIntoCenter({options}).

option fields:

container: the container element or window. Default = window

vertical: scalar between 0 and 1. Default = 0.5. The value 0 aligns the top of the element with the top of the view, 1 aligns the bottom with the bottom, and 0.5 (default) puts the center in the center.

horizontal: scalar between 0 and 1. Default = 0.5. Functions like vertical.

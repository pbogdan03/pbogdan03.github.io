---
layout: post
title: SVG Animations - CSS and SMIL
author: Bogdan
custom_js: svgClick
excerpt: Next, I will show you how to make your animations even more eye-catching with 
        the power of the almighty Javascript. With JS you can control user actions, and the best
        ones to control are the mouse events. Fire up animations when the user clicks, scrolls
        or when he least expects them for a nice effect.
---

SVG has been covered a lot on the web, it's something with which you can put your 
Illustrator, Inkscape or Sketch drawings on the web. Moreover you can animate them so 
it's something!

For my example using this kind of tools I will try to animate the SVG using either 
CSS or SMIL, either one has some interesting capabilities. For CSS it's the same as
using it for controlling the HTML elements and SMIL can be used for animating the SVG
elements. SMIL has some great feature that CSS animations cannot provide so it's cooler.

Check out my example here(you can click on the flame):

{% include candle-light.html %}

It's a simple svg animation made with SMIL and a bit of javascript for the click event. If you
make the SVG in a vector editing software you have to take special care in refactoring your code
because if the vertices of the paths don't match exactly, there won't be any tweening. So look out
for `c` and `s` and for relative and absolute positioning. I found an awesome convertor to
relative coordinates [here](http://bl.ocks.org/TheMcMurder/raw/6393419/ "Relative-coordinates-convertor").
The SVG code is to long but the main idea is that i added an `animate` tag and using the `values`
attribute i added the same `path` but with modified coordinates.

Another aspect is that you have to code javascript inside the SVG document fragment using the script tag
and setting the type to javascript.
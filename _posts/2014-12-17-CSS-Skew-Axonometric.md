---
layout: post
title: CSS Skew Transform - Making Axonometric View
author: Bogdan
excerpt: So yeah, skewing is a bit useless in my opinion, except....
---

So yeah, skewing is a bit useless in my opinion, except....

Axonometric view, maybe you know it from those modern illustrations, or from 
technical drawings, or from architectural drawings or from good ol' math class 
doodles. This type of rendering implies a 3D system of coordinates, like X,Y,Z 
and we will do it with some simple 2D manipulations using CSS transforms. 

Prepare yourself! This is the end result:

{% include skewing.html %}

It's as simple as adding a css transform, knowing on which axis and in which direction
to add the skewing, adding the vendor prefixes and then modifying the absolute positioning
pixel by pixel until it all snaps together...so, it takes some time but you'll get it.

This is the code for the 45 degrees axonometric box:

~~~css
.right-side.deg45 {
    -webkit-transform: skewY(-45deg);
    -ms-transform: skewY(-45deg);
    -o-transform: skewY(-45deg);
    transform: skewY(-45deg);
}
.front-side.deg45 {
    -webkit-transform: skewY(45deg);
    -ms-transform: skewY(45deg);
    -o-transform: skewY(45deg);
    transform: skewY(45deg);
}
.top-side.deg45 {
    -webkit-transform: skew(45deg,-45deg);
    -ms-transform: skew(45deg,-45deg);
    -o-transform: skew(45deg,-45deg);
    transform: skew(45deg,-45deg);
}
~~~

You can add any actions on the elements, so you can target them with CSS hover or
Javascript.

The downside is that you cannot control the dimensions of the elements after the
transformation, so that you can make an accurate representation. Bummer!



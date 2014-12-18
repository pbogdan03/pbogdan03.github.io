---
layout: post
title: CSS full fledged animation
author: Bogdan
excerpt: Working through the CSS3 dynamic properties, like transitions, we are bound to get
          to the main thing, animations. This lets you define a custom animation based on
          specific keyframes that you later add to any element you need.
---

Working through the CSS3 dynamic properties, like transitions, we are bound to get
to the main thing, animations. This lets you define a custom animation based on
specific keyframes that you later add to any element you need. One thing to note is
that the keyframes are duration based and not time based. Meaning you specify for example
20% instead of 2s and you input the total duration in the targeted element.

Here is a cool example of what you can do with it:

{% include animating.html %}

Granted that it's not the most accurate animation, you can at least simulate some
real world inertia through skewing, unfortunately there isn't any transformation 
with warping that I know of, so that the result would be more interesting.

The code is a bit cumbersome but it works:

{% highlight css %}
@keyframes skewing {
    10% {--webkit-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -o-transform: skewX(0deg);
    transform: skewX(0deg);}
    20% {--webkit-transform: skewX(50deg);
    -ms-transform: skewX(50deg);
    -o-transform: skewX(50deg);
    transform: skewX(50deg);}
    60% {--webkit-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -o-transform: skewX(0deg);
    transform: skewX(0deg);}
    80% {--webkit-transform: skewX(-10deg);
    -ms-transform: skewX(-10deg);
    -o-transform: skewX(-10deg);
    transform: skewX(-10deg);}
    90% {--webkit-transform: skewX(5deg);
    -ms-transform: skewX(5deg);
    -o-transform: skewX(5deg);
    transform: skewX(5deg);}
    100% {--webkit-transform: skewX(0deg);
    -ms-transform: skewX(0deg);
    -o-transform: skewX(0deg);
    transform: skewX(0deg);}
}
@keyframes sliding {
    10% {--webkit-transform: translateX(0px);
    -ms-transform: translateX(0px);
    -o-transform: translateX(0px);
    transform: translateX(0px);}
    90% {--webkit-transform: translateX(300px);
    -ms-transform: translateX(300px);
    -o-transform: translateX(300px);
    transform: translateX(300px);}
    100% {--webkit-transform: translateX(300px);
    -ms-transform: translateX(300px);
    -o-transform: translateX(300px);
    transform: translateX(300px);}
}
{% endhighlight %}


Next an image slider with some effects on the pictures, not to shabby, if I may say 
so myself:


{% include jumbotron.html %}

It slides 3 images right to left and down to up on each image by using background positioning.
There is another div with the dotted background overlayed on top of the animation and some 
cool text, that's it, you've got an awesome jumbotron like header to amaze your clients.

Check out the CSS with the keyframes(i'm using the new vw-viewport width as the dimension units
to test the responsiveness, it doesn't work quite right yet, should've used media queries):

{% highlight css %}
@keyframes jumbotron {
    0% {background-position: 0px 0px, 54.50vw 0px, 109vw 0px, 153.5vw 0px;}
    15% {background-position: 0px -100px, 54.5vw -100px, 109vw -100px, 153.5vw -100px;}
    23% {background-position: -54.5vw -100px, 0px -100px, 54.5vw -100px, 109vw -100px;}
    51% {background-position: -54.5vw 0px, 0px 0px, 54.5vw 0px, 109vw 0px;}
    56% {background-position: -109vw 0px, -54.5vw 0px, 0px 0px, 54.5vw 0px;}
    81% {background-position: -109vw -100px, -54.5vw -100px, 0px -100px, 54.5vw -100px;}
    86% {background-position: -153.5vw -100px, -109vw -100px, -54.5vw -100px, 0px -100px;}
    100% {background-position: -153.5vw 0px, -109vw 0px, -54.5vw 0px, 0px 0px;}
}
{% endhighlight %}
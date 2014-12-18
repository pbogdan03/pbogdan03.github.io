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
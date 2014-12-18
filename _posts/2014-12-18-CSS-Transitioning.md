---
layout: post
title: CSS Transitioning
author: Bogdan
excerpt: CSS3 transition property gets an element from one point to another, so if you 
need to make something appear, change colors, dimensions etc, it's great. And simple
to use as you'll see next.
---

CSS3 transition property gets an element from one point to another, so if you 
need to make something appear, change colors, dimensions etc, it's great. And simple
to use as you'll see next.

{% include transitioning.html %}

As you can see, the tooltips fade in and are translated from the right on hover.

The CSS for the transitions is as follows:

{% highlight css %}
.tooltip {
    --webkit-transition: opacity .5s, transform .5s;
    -o-transition: opacity .5s, transform .5s;
    transition: opacity .5s, transform .5s;
}
{% endhighlight %}

I think it speaks for itself. The HTML is straightforward, you have to put a container,
be it a div, span, something to contain(get it?) the button and the tooltip. Then
when you hover, you target the sibling(that is the tooltip) to do something i.e transition.
That's it, nothing more to add for now.

P.S. You can always check the source code with your browser developer tools to see more.
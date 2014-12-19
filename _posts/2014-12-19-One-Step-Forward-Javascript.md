---
layout: post
title: One step forward - Javascript powered animations
author: Bogdan
custom_js: 
- beatingBtn
- scrolling
excerpt: 
---

Next, I will show you how to make your animations even more eye-catching with 
the power of the almighty Javascript. With JS you can control user actions, and the best
ones to control are the mouse events. Fire up animations when the user clicks, scrolls
or when he least expects them for a nice effect.

Go like this:

{% include beating-btn.html %}

A heart-beat button for you to test, using class toggling and jQuery it's easy to animate
the button. Hiding and showing the respective icons and then animating with scale transformation
and color. Here is the jQuery :

{% highlight javascript %}
beatingBtn.click(function(){
    heartBtn.toggleClass('hidden');
    heartBtn.toggleClass('beating-heart');
    beatingBtn.toggleClass('beating-heart-color');
    closedBtn.toggleClass('hidden');
)};
{% endhighlight %}

<p>Or go like this and hijack the scroll event:</p>

{% include scroll-loading.html %}
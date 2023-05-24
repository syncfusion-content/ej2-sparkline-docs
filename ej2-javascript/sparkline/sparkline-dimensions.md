---
layout: post
title: Sparkline dimensions in ##Platform_Name## Sparkline control | Syncfusion
description: Learn here all about Sparkline dimensions in Syncfusion ##Platform_Name## Sparkline control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Sparkline dimensions 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Sparkline dimensions in ##Platform_Name## Sparkline control

## Size for container

Sparkline can be rendered to its container size. You can set the size through inline or CSS as shown in the following code.

```
    <div id='container'>
        <div id='element' style="width:650px; height:350px;"></div>
    </div>
```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/sparkline-dimensions-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/sparkline-dimensions-cs1" %}
{% endif %}

## Size for sparkline

You can also set the size for sparkline directly using the [`width`](../../api/sparkline/#width-string) and [`height`](../../api/sparkline/#height-string) properties.

**In pixel**

You can set the size for sparkline in pixel as demonstrated in the following code.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/sparkline-dimensions-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/sparkline-dimensions-cs2" %}
{% endif %}

**In percentage**

By setting values in percentage, sparkline gets its dimension with respect to its container. For example, when the height is set to ‘50%’, sparkline is rendered to half of its container height.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/sparkline/sparkline-dimensions-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/sparkline/sparkline-dimensions-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sparkline/sparkline-dimensions-cs3" %}
{% endif %}

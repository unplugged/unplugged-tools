---
layout: post
title:  "Generic Classes"
date:   2013-12-01 17:00
categories: GenericClasses
---

When using the unpFormViewer and unpFormEditor controls you can make use of the following CSS classes for buttons, fieldsets and panels;

1. panel - adds a curved corner surround to a div
2. fieldset - a definition is created to layout fieldsets, no class name required
3. left-aligned - will always left align a panel or container regardless of device orientation
4. button - a class which creates a generic button, can be used in conjunction with...
5. savebutton - a save button to be used in conjunction with .button
6. editbutton - an edit button to be used in conjunction with .button
7. cancelbutton - a cancel button to be used in conjunction with .button


<style type="text/css">
pre.CICodeFormatter{
	font-family:arial;
	font-size:12px;
	border:1px dashed #CCCCCC;
	width:99%;
	height:auto;
	overflow:auto;
	background:#f0f0f0;
	line-height:20px;
	
	padding:0px;
	color:#000000;
	text-align:left;
}
pre.CICodeFormatter code{
	color:#000000;
	word-wrap:normal;
}
</style>
<pre class="CICodeFormatter" ><code class="CICodeFormatter">      &lt;div class="panel"&gt;  
           This is a panel (or div) with &amp;#160;  
           &lt;strong&gt; .panel &lt;/strong&gt;  
           &amp;#160; class assigned  
      &lt;/div&gt;  
      &lt;fieldset&gt;  
           &lt;legend&gt;This is a fieldset&lt;/legend&gt;  
           The contents are treated the same as the panel above  
      &lt;/fieldset&gt;  
      &lt;div class="panel left-aligned"&gt;  
           This panel will always be left-aligned  
      &lt;/div&gt;  
      &lt;div style="padding-top:5px;"&gt;  
           &lt;input type="button" class="button" value="Generic Button (.button)" /&gt;  
      &lt;/div&gt;  
      &lt;div style="padding-top:5px;"&gt;  
           &lt;input type="button" class="button savebutton"  
                value="Save Button (.button .savebutton)" /&gt;  
      &lt;/div&gt;  
      &lt;div style="padding-top:5px;"&gt;  
           &lt;input type="button" class="button editbutton"  
                value="Edit Button (.button .editbutton)" /&gt;  
      &lt;/div&gt;  
      &lt;div style="padding-top:5px;"&gt;  
           &lt;input type="button" class="button cancelbutton"  
                value="Cancel Button (.button .cancelbutton)" /&gt;  
      &lt;/div&gt;  
</code></pre>

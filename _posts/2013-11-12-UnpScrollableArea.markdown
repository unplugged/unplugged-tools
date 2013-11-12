---
layout: post
title:  "UnpScrollableArea"
date:   2013-12-01 17:00
categories: UnpScrollableArea
---

# Function
This custom control has no UI, but is used in conjunction with the other controls for better scrolling functionality of other UI elements.

Within the Unplugged Controls we use a third party JS library called iScroll to simulate smooth scrolling and the bounce effect on devices. 
We use this as the normal webkit scroll (in the embedded browsers) does not allow us to have separate areas that scroll. So if you have the UnpNavigator and a UnpFormViewer on the page, without iScroll they would scroll as one artifact and not independently. Also with a lot of data the 'native' webkit scroll is jerky and does not perform as well.

So…. what this means is that the UnpScrollableArea control is basically an XPage wrapper/container that utilizes this and initializes iScroll when necessary. 

# Usage
Drag the control onto your XPage and then add your content into the editable area.

In the example below we have a Scrollable Area and inside that there is a panel into which we will insert our content.

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xc:unpScrollableArea&gt;  
  &lt;xp:this.facets&gt;  
   &lt;xp:panel xp:key="facet_1"&gt;&lt;/xp:panel&gt;  
  &lt;/xp:this.facets&gt;  
 &lt;/xc:unpScrollableArea&gt;  
</code></pre>

The div which gets generated will be called "contentwrapper", this div ID is used by various functions in unplugged.js so should only be changed with caution!

# Limitation for zoom control
When using the UnpScrollableArea to contain your content (which is advised), iScroll effectively hijacks the screen. Therefore the 'standard' method to allow zooming will not work:

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xp:metaData name="viewport"  
  content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1, minimum-scale=1"&gt;  
 &lt;/xp:metaData&gt;  
</code></pre>

To allow zoom functionality in your apps you need to edit the initialization call to iScroll in unplugged.js.

Open Unplugged.js in Designer.

Go to line 407 (ish):

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> scrollContent = new iScroll(  
  $(this).attr("id"),  
  {  
   zoom: true,  
   useTransition : true,  
</code></pre>
              
In this function, above the 'useTransition : true' line, add: 'zoom: true,'


Sync out and this should allow scrolling in your apps.

**Note:** The 'standard' way for mobile scrolling above will work with the Unplugged Mobile Controls if the ump:scrollableArea control is not used.

# Required Resources
When you use the custom control make sure that you have the following resources in your application:
* unp/jquery-1.7.2.min.js
* unp/jquery.blockUI.min.js
* unp/iScroll.min.js
* unplugged.js
* unpCommon.jss
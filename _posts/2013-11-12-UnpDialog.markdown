---
layout: post
title:  "UnpDialog"
date:   2013-12-01 17:00
---

# Function
The Dialog control allows you to add a Dialog box to a page. It will display "over" the rest of the content of the page and will show 2 buttons: OK and Cancel.

![Dialog](http://teamstudio.s3.amazonaws.com/dialog.png)

If the user clicks cancel the dialog will be hidden.

If the user clicks the OK button the dialog will be hidden and you can run a Client Side JavaScript function as well.

The content of the dialog box is populated by adding the text or fields into the editable area on the XPage that you create. 

If the content of the dialog box is too tall for the page then make sure to use the [[unpScrollableArea]] control inside the editable area.

For an example of the Dialog in action download the samples database and open the XPage called UnpDemoDialog

# Usage

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xc:unpDialog callback="myFunction" title="Dialog Demo"&gt;  
      &lt;xp:this.facets&gt;  
           &lt;xp:panel xp:key="facet_1"&gt;  
                Content goes here  
           &lt;/xp:panel&gt;  
      &lt;/xp:this.facets&gt;  
 &lt;/xc:unpDialog&gt;  
</code></pre>

In this example the Dialog will show with the words "Content goes here" in the body. Below that will be the OK and Cancel buttons. When the OK button is pressed a JavaScript function call "myFunction()" will be executed, remember to write that function.

To show the dialog add HTML in the following format:

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;a href="#dialogPopup" class="opendialoglink"&gt;  
      Open Dialog  
 &lt;/a&gt;  
</code></pre>

The href is the ID of the Dialog box div tag. The class name is the way the link is made to open a Dialog when it is clicked.

# Required Resources
When you use the Dialog custom control make sure that you have the following resources in your application:
* unp/jquery-1.7.2.min.js
* unp/jquery.blockUI.min.js
* unp/iScroll.min.js
* unplugged.js
* unpCommon.jss
* unplugged.css
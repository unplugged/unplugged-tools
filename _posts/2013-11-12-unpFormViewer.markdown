---
layout: post
title:  "UnpFormViewer"
date:   2013-12-01 17:00
categories: UnpFormViewer
---

# Function
This is a wrapper which is used to display your documents in read mode.

The control will offer buttons to put the document into edit mode, create a new response or close the document.

![Form Viewer](http://teamstudio.s3.amazonaws.com/formviewer.png)

# Usage

Set up a document data binding and make sure it is called document1.

Drag the control onto your XPage and set the following custom properties:

* closexpagename: the name of the XPage to open when the user clicks the close button
* dbName: optional parameter to specify which database the document you want to open is located in. The database path should be delimited with forward slashes (e.g. mydir/mydb.nsf). Leave blank for the same db 
* editxpagename: the name of the XPage to open when switching into edit mode - Note: If blank the button will not be rendered
* editxpagewithajax: yes/no (default yes) option to open the XPage containing [[UnpFormEditor]] control in ajax mode or full page load mode. Note: If using camera functionality in edit mode (to captuure pictures) this will need to be set to full-page as the saveDocument function does not save Rich Text Fields. THis also means that you will need to use your own standard buttons in [[UnpFormEditor]] and set showbuttons on that control to no 
* formname: the name of the form that documents being displayed are associated with
* newresponsexpagename: the name of the XPage to open when requiring a response doc hierarchy - Note: If no response docs are relevant, leave this blank and the button will not be rendered
* position: if a [[UnpNavigator]] is used the position needs to be set to 'menu-aligned' to allow for the navigator column to be displayed on tablets in landscape mode. 'left-aligned' will set the data to the left of the device regardless of the navigator included or not
* showbuttons: boolean to decide whether to show the standard buttons
* title: the title to display above the data
* titleiconfield: adds an icon or image to the left of the title in the title bar

Once these are completed, drag a panel into the editable area and add the fields you want to display inside it.

The XML below shows an example where we're displaying the Name field for the document.

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;unp:unpFormViewer showbuttons="true"  
      closexpagename="UnpDemoWidgets.xsp" editxpagename="EmployeeEdit.xsp"  
      formname="Employee" title="Employee" xp:key="facet_1"  
      titleiconfield="photo1"&gt;  
      &lt;xp:this.facets&gt;  
           &lt;xp:panel xp:key="facet_1"&gt;  
                &lt;ul class="fieldlist"&gt;  
                     &lt;li&gt;  
                          &lt;xp:label value="Name" id="namelabel"  
                               for="name"&gt;  
                          &lt;/xp:label&gt;  
                          &lt;xp:text id="name"  
                               value="#{document1.Name}"&gt;  
                          &lt;/xp:text&gt;  
                     &lt;/li&gt;  
                 &lt;li&gt; other labels and fields....  
                 &lt;/li&gt;  
                &lt;/ul&gt;  
           &lt;/xp:panel&gt;  
      &lt;/xp:this.facets&gt;  
 &lt;/xc:unpFormViewer&gt;  
</code></pre>

You can use [[Generic Classes]] to layout the content of your pages.

# Required Resources
When you use the Form Viewer custom control make sure that you have the following resources in your application:
* unplugged.css
* unp/jquery-1.7.2.min.js
* unp/jquery.blockUI.min.js
* unp/iScroll.min.js
* unplugged.js
* unpCommon.jss
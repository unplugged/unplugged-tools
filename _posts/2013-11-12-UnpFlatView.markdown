---
layout: post
title:  "UnpFlatView"
date:   2013-12-01 17:00
categories: UnpFlatView
---

# Function
If you want to display a flat (or non categorized view) then this is the control you will need to use. 

![Flat View](http://teamstudio.s3.amazonaws.com/flatview.png)

The control will work when integrated with [[unpScrollableArea]]

# Usage
Drag the control onto your XPage and complete the following Custom Properties:

* ajaxload: Yes/No (default yes) controls how documents are opened. If Yes they are loaded via Ajax which is faster, but there are some circumstances (when uploading files for example or opening documents in another database) when you need to load a new page.
* categoryfilter: text to apply a "show single category" filter to a categorized view.
* collapseRows: if set to yes the detail data will be hidden by default and the user can then tap to expand. If this is enabled, the document cannot be opened.
* dbName: optional parameter to specify which database the view you want to open is located in. The database path should be delimited with forward slashes (e.g. mydir/mydb.nsf)
* detailColumn: the secondary column of data to display (this is the column title)
* enableAZPicker: yes/no (default no) set when using the [[UnpAZPicker]] control with this UnpFlatView control. Lists a-z down the right side for users to navigate faster to entries beginning with the selected letter
* insetData: whether the view should be indented with rounded corners or flush to the "edge" of it's container
* numberofrows: the number of rows of data to display (default is 20)
* photoColumn: (since 1.4.0) the name of the column which contains the URL pointing to image to display in view. Leave blank for no image
* position: whether the view will position itself to work in conjunction with the [[UnpViewsList]] control. By default it will, choose left-aligned if you are not using the UnpViewsList control
* refreshmethod: the way that the user can load the next chunk of data. Options are pull, button or none
* summaryColumn: the main column of data to display (this is the column title)
* title: the title to display above the view data
* viewName: the name of the view to get data from
* wrapsummarytext: By default long text will be truncated with "...". If you set this property to yes, the text will wrap for 2 lines before truncating.
* xpageDoc: the name of the XPage to open documents in the view with

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;unp:unpFlatView insetData="true" title="Employees"  
   summaryColumn="Name" viewName="Employees" xp:key="facet_1"  
   numberofrows="20" refreshmethod="pull" position="left-aligned"  
   ajaxload="Yes" detailColumn="DOB" xpageDoc="EmployeeFlatView.xsp"&gt;  
 &lt;/unp:unpFlatView&gt;  
</code></pre>

The "Load More" function requires the presence of the XPage called UnpFlatViewList, it is this which is used by the control to perform Ajax requests to get each chunk of data to display to the user.

The "enableAZPicker" requires the [[UnpAZPicker]] control to be included within the div id="content" but outside the [[UnpScrollableArea]] control

# Required Resources
When you use the Flat View custom control make sure that you have the following resources in your application:
* unp/jquery-1.7.2.min.js
* unp/jquery.blockUI.min.js
* unp/iScroll.min.js
* unplugged.js
* unpCommon.jss
* unplugged.css
* unp/right-arrow-circle.png
* unp/pull-icon@2x.png
* UnpFlatViewList (XPage)
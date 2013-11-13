---
layout: post
title:  "UnpNavigator"
date:   2013-12-01 17:00
---

# Function
This control provides the menu system for your application and works best when used with the related controls [[unpHeader]] [[unpFooter]] and [[unpFlatView]]

![Views List](http://teamstudio.s3.amazonaws.com/viewslist.png)

The panel will show automatically if you are viewing the page with an iPad in landscape mode. For smaller devices, you will need to provide a button to show the panel. This is handled for you by the [[unpHeader]] control if you enable the views button.

The control can be passed in a number of menu items with details for the label and the URL to open and also whether to open the URL via Ajax or as a full page load request.
The menu system can included collapsable sections that show sub menus to two levels.

# Usage
Drag the control onto your page and then complete the menu items custom properties.

You can add as many menu items as required for you application, each menu item has seven properties:
* ajaxloadid: the element id on the page being loaded containing the HTML which you want to display to the user. 
**Note:** 'contentwrapper' in this example is the name of the auto-generated div tag created when using the unpScrollArea control. Therefore, if using other view or form control types from the Unplugged Controls Project use 'contentwrapper' otherwise use your own custom div wrapper in your target XPage.
* ajaxtargetid: the element id in the current page into which you want to insert the contents from the page being loaded
* disabled: Used as a marker and disables execution
* icon: adds an image to the left of the line item 
* label: the text label for the item
* page: the URL to open when the menu item is clicked
* submenu: (default none) allows the menu-item to be tapped and sub-menus shown. Select 'sub' for the first level category and 'sub-sub' for second level categories. If a menu-item is a top level category that contains submenus then only the properties disabled='no', label='my label' and submenu='sub' (or 'sub-sub') should be used. If a higher level menu-item contains a page property then the sub menu-items will not be displayed and the top level menu-item will navigate to the page defined (see code example below). 

In the example below there are two menu items. The first will load a page via Ajax and insert the contents of the div called contentwrapper and insert it into a div on the current page called content. The second menu item will load a completely new page.

The most performant approach is to use the Ajax approach to loading pages.

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xc:unpViewsList&gt;  
      &lt;xc:this.menuItem&gt;  
           &lt;xc:menuItem label="All Documents" page="/UnpDemoWidgets.xsp"  
                ajaxtargetid="content" ajaxloadid="contentwrapper"&gt;  
           &lt;/xc:menuItem&gt;  
           &lt;xc:menuItem label="By Department" page="/UnpDemoWidgetsByDept.xsp"&gt;&lt;/xc:menuItem&gt;  
      &lt;/xc:this.menuItem&gt;  
 &lt;/xc:unpViewsList&gt;  
</code></pre>

This example shows how the code is structured for sub-menus:

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;unp:unpNavigator&gt;  
      &lt;unp:this.menuItem&gt;  
           &lt;unp:menuItem ajaxloadid="contentwrapper"  
                ajaxtargetid="content" submenu="no" disabled="no" label="By Address"  
                page="/UnpByAddress.xsp"&gt;  
           &lt;/unp:menuItem&gt;  
           &lt;unp:menuItem submenu="no" disabled="no" label="By Name"&gt;  
           &lt;/unp:menuItem&gt;  
           &lt;unp:menuItem ajaxloadid="contentwrapper" ajaxtargetid="content" submenu="sub" disabled="no" label="First Name" page="/UnpByFirstName.xsp"&gt;  
           &lt;/unp:menuItem&gt;  
           &lt;unp:menuItem ajaxloadid="contentwrapper" ajaxtargetid="content" submenu="sub-sub" disabled="no" label="Last Name" page="/UnpByLastName.xsp"&gt;  
           &lt;/unp:menuItem&gt;  
      &lt;/unp:this.menuItem&gt;  
 &lt;/unp:unpNavigator&gt;  
</code></pre>

# Required Resources
When you use the custom control make sure that you have the following resources in your application:
* unp/jquery-1.7.2.min.js
* unp/jquery.blockUI.min.js
* unp/iScroll.min.js
* unplugged.js
* unpCommon.jss
* unplugged.css
* unp/right-arrow-trans-white-large.png
---
layout: post
title:  "UnpAZPicker"
date:   2013-12-01 17:00
categories: UnpAZPicker
---

# Function
This control displays single letters down the right side of a View for searching. The results are displayed in a similar way to the [[unpFlatView]] control.

![Alphabet Bar](http://teamstudio.s3.amazonaws.com/atozcontrol.png)

The control will work when integrated with [[unpFlatView]]

# Usage
The search facility will display results from a view (given in the Custom Property 'viewName') matching the letter selected with the first letter of the contents in the first column (sorted Ascending).

The results will be displayed in the same XPage as this picker will work on the contents rendered in the HTML DOM (within the UnpFlatView). Because of this; it is not recommended to use the UnpAZPicker when displaying 500+ line items. The current devices and webkit internal browsers do not perform well enough to traverse and re-render this much data populated in the HTML DOM at one time (obviously we expect this to improve over time with updates to devices). In the case where 500+ line items are required use either the dbSearch in [[UnpHeader]] and [[UnpSearchResults]] or use the [[UnpAccordion]] with a categorized view.

Drag the control onto your XPage, outside the [[UnpScrollableArea]] control but within the div id=content element. 

In the [[UnpFlatView]] control set the Custom Property enableAZPicker to yes

<pre class="CICodeFormatter" ><code class="CICodeFormatter">      &lt;div id="content"&gt;  
           &lt;unp:unpScrollableArea&gt;  
                &lt;xp:this.facets&gt;  
                     &lt;unp:unpFlatView insetData="true" detailColumn="Dept"  
                          summaryColumn="Name" title="Employees in Finances"  
                          numberofrows="20" categoryfilter="Finances"  
                          viewName="EmployeesCatByDept" refreshmethod="pull"  
                          xpageDoc="Employee.xsp" xp:key="facet_1" enableAZPicker="yes"&gt;  
                     &lt;/unp:unpFlatView&gt;  
                &lt;/xp:this.facets&gt;  
           &lt;/unp:unpScrollableArea&gt;  
           &lt;unp:unpAZPicker&gt;&lt;/unp:unpAZPicker&gt;  
      &lt;/div&gt;  
</code></pre>

# Required Resources
When you use the custom control make sure that you have the following resources in your application:
* unp/jquery-1.7.2.min.js
* unplugged.js
* unpluggedSearchDatabase.js
* unpCommon.jss
* unplugged.css
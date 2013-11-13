---
layout: post
title:  "UnpAccordion"
date:   2013-12-01 17:00 
---

The Accordion control is used to display a categorised view of data. A category can be exapnded by tapping it and the documents will be revealed. This is a great way of showing data in a more organised way.

![Accordion iPad](/unplugged-tools/images/accordion-ipad.png)
![Accordion iPhone](/unplugged-tools/images/accordion-iphone.png)

This control is required to be wrapped in a [[unpScrollableArea]] control and you must include the unplugged.css as a resource on your XPage.

# Usage

Drag the control onto your XPage and complete the following Custom Properties:

* ajaxload: option to load pages via ajax for smoother transition or full page load - default (blank or Yes) is to load by ajax
* dbName: optional parameter to specify which database the view you want to open is located in. The database path should be delimited with forward slashes (e.g. mydir/mydb.nsf). Leave blank for the same db 
* viewName: the name of the view to get data from
* expandfirstcategory: boolean - the first category's contents can be displayed 'open'
* xpage: the name of the XPage to open documents in the view with
* insetData: gives a rounded look and feel with padding. Default is true.
* postion: whether the view will position itself to work in conjunction with the UnpViewsList control (Landscape mode on tablet). By default it will choose left-aligned as if you are not using the UnpViewsList control and will fill the width of the screen. 

The 'Load More' function is defaulted to 12 rows before it is rendered. This is editable within the required UnpAccordionViewList.xsp XPage. This uses AJAX requests to retrieve chunks of data to be inserted into each category to display more info.

This control requires that the view have the first, and only the first, column categorized and up to 2 additional columns of flat data that will be displayed in the row data presented to the user. Column 2 in the view will be in blue text while column 3 will be in black underneath the data presented from column 2.

{% highlight xml %}
<unp:unpScrollableArea>
	<xp:this.facets>
		<unp:unpAccordion xp:key="facet_1" viewName="People By Country"
			insetData="true" expandfirstcategory="yes" xpage="/FormsReadMode.xsp">
		</unp:unpAccordion>
	</xp:this.facets>
</unp:unpScrollableArea>
{% endhighlight %}

# Required Resources
On the assumption you are using UnpHeader in your application then no extra resources are required.

If you are not using UnpHeader, then make sure you add all of the resources included in UnpHeader to your UnpMain XPage.
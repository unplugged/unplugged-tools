---
layout: post
title:  "UnpFooter"
date:   2013-12-01 17:00
---

# Function
A simple footer bar which will display three things. Bottom left is a Sync button which will replicate the current application. In the center is the last date / time the application was replicated. The button on the bottom right will create a new document using the name of the XPage specified in the Custom Properties.

![Footer (Phone)](http://teamstudio.s3.amazonaws.com/footer-phone.png)
![Footer (Tablet)](http://teamstudio.s3.amazonaws.com/footer-tablet.png)

For [[mobile web applications]] the sync button and the 'updated' timestamp will not display.

# Usage
Drag the custom control onto your XPage and set the newDocTarget property to point to the XPage which you want to use for creating new documents. You can set the newDocLoadType property to decide whether to use Ajax or a full page load when the new button is pressed. The default is Ajax.

Alternatively you can set the "settingsurl" property and the Settings button will appear in the bottom right. You cannot have the New and Settings buttons display at the same time.

You can decide what sort of sync will execute when the sync button is pressed. The default is to sync the current database, but you can also choose to sync all databases which are on the device or to hide the sync button altogether.

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;unp:unpFooter newDocTarget="EmployeeEdit.xsp"  
   synctype="currentdb"  
   newDocLoadType="ajax"&gt;  
 &lt;/unp:unpFooter&gt;  
</code></pre>

# Required Resources
When you use the Footer custom control make sure that you have the following resources in your application:
* unplugged.js
* unplugged.css
* ic_action_refresh.png
* new.png
* icon_19.png
* syncIcon.png
* new.png
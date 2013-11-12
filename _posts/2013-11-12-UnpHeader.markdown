---
layout: post
title:  "UnpHeader"
date:   2013-12-01 17:00
categories: UnpHeader
---

# Function
A simple control which displays a fixed header at the top of your pages.

![Header (tablet)](http://teamstudio.s3.amazonaws.com/header-tablet.png)
![Header (small tablet)](http://teamstudio.s3.amazonaws.com/header-smalltablet.png)
![Header (phone)](http://teamstudio.s3.amazonaws.com/header-phone.png)

# Usage
Drag the custom control onto your XPage and then complete the Custom Properties:

* appDescription: an "About" description of the application. Works in conjunction with appVersion. If populated, the user can click the title of the application and the appVersion and appDescription will be displayed in a dialog box.
* appVersion: the version number of the application (e.g. 1.4.0). Works in conjunction with appDescription. If populated, the user can click the title of the application and the appVersion and appDescription will be displayed in a dialog box.
* backButtonText: The label which will appear on the Back button (leave blank to hide button)
* backButtonURL: The URL which will be opened when the Back button is pressed
* headerHomeLink: Sets the navigation to an xpage from the home icon (top right). By default this is the Unplugged workspace. This is only recommended to be changed if the app is a mobile web app and not running on Unplugged 
* search: Defines the type of search you want to enable, options are "none", the searching will be disabled. "local" will search across view data (for example in the [[unpFlatView]]). "database" will open a new page and pass a "query" URL Parameter to allow you to search the full database using the [[unpSearchResults]] control
* searchPage: Only required if the search property is set to "database"
* title: the title to display at the top of the page
* viewsButton: boolean to decide whether to display the Views button which will slide in the [[unpViewsList]] control if you are using it.

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;unp:unpHeader search="database" viewsButton="true" headerHomeLink="/UnpMain.xsp"  
      title="Employees" searchPage="UnpDemoWidgetsSearch.xsp" appVersion="v1.4.0 (April 2013)"&gt;  
      &lt;unp:this.appDescription&gt;&lt;![CDATA[#{javascript:"&lt;p&gt;Our goal with this project is to create a highly-optimised set of XPages mobile controls with&lt;br /&gt;a) close-to-native performance&lt;br /&gt;b) attractive aesthetics etc..."}]]&gt;&lt;/unp:this.appDescription&gt;  
 &lt;/unp:unpHeader&gt;  
</code></pre>

# Required Resources
When you use the Header custom control make sure that you have the following resources in your application:
* unplugged.css
* unp/jquery-1.7.2.min.js
* unp/unplugged.js
* unp/unpCommon.jss
* unpSearchLocal.js
* unpSearchDatabase..js
* unp/unplugged_logo.png
* unp/search.png
* unp/blackBackButton.png
* unp/home@2x.png
* unp/menu@2x.png
* unp/icon_19.png
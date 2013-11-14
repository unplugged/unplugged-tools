---
layout: post
title:  "UnpFormEditor"
date:   2013-12-01 17:00
---

# Function
This control is a wrapper to handle the validation and saving of your document which is in edit mode.
![Form Editor](http://teamstudio.s3.amazonaws.com/formeditor.png)
![Form Editor](http://teamstudio.s3.amazonaws.com/formeditor_small.png)

# Usage

Firstly set up a document data binding on your XPage and make sure it is called document1

Drag the control onto your XPage and set the following Custom Properties:

* closexpagename: the name of the XPage to open when clicking the close button. This page is loaded with a 
* dbName: optional parameter to specify which database the document you want to open is located in. The database path should be delimited with forward slashes (e.g. mydir/mydb.nsf). Leave blank for the same db 
* formname: the name of the Notes form which the document will be saved as (for when creating a new document)
* position: if a [[UnpNavigator]] is used the position needs to be set to 'menu-aligned' to allow for the navigator column to be displayed on tablets in landscape mode. 'left-aligned' will set the data to the left of the device regardless of the navigator included or not
* showbuttons: boolean setting to control whether to display standard buttons. 
full refresh, so should contain Header / Footer / Navigator as required.
* title: the title to display at the top of the page
* viewxpagename: the name of the XPage to open after clicking the Save button. *At the moment this property is not being used* (it will be opened with ?action=openDocument&documentId=[unid] )

Once the control is added, drag a panel into the editable area which will contain the fields you want to display.

The example XML below shows an example of a simple text field. It is important that the ID of the control matches the name of the field to be stored on the document.

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xc:unpFormEditor showbuttons="true" closexpagename="UnpDemoWidgets.xsp"  
      viewxpagename="Employee.xsp" formname="Employee" title="Employee"&gt;  
      &lt;xp:this.facets&gt;  
           &lt;xp:panel xp:key="facet_1"&gt;  
                &lt;xp:label value="Name" id="namelabel" for="name"&gt;&lt;/xp:label&gt;  
                &lt;xp:inputText id="name" value="#{document1.Name}"  
                     styleClass="required deletable"&gt;  
                &lt;/xp:inputText&gt;  
           &lt;/xp:panel&gt;  
      &lt;/xp:this.facets&gt;  
 &lt;/xc:unpFormEditor&gt;  
</code></pre>

If you want the field to be mandatory, add a styleClass property of "required".
If you want the field to include an 'x' so the contents can be deleted, add a styleClass property of "deletable".


If you want to store a multi value field (for example using a List Box control), the name of the field will need to be prefixed "multi__" (that is two underscores acting as a delimiter) so an example field might look like:

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xp:listBox id="multi__categories" multiple="true"  
      value="#{document1.Categories}"&gt;  
      &lt;xp:selectItem itemLabel=" " itemValue=""&gt;&lt;/xp:selectItem&gt;  
      &lt;xp:selectItems&gt;  
           &lt;xp:this.value&gt;&lt;![CDATA[#{javascript:var doc:NotesDocument = database.getView("MissionLookup").getFirstDocument();  
 var out = doc.getItemValue("Categories");  
 return out;}]]&gt;&lt;/xp:this.value&gt;  
      &lt;/xp:selectItems&gt;  
 &lt;/xp:listBox&gt;  
</code></pre>

You can use [[Generic Classes]] to layout the content of your pages.

##Autocomplete Fields
To enable auto complete on a field, there are 3 steps required. Firstly, add the CSS class "autocomplete" to the styleClass property of the field.

Secondly, add an attribute to the field called "auto-src" with a value which is a URL which will return a list of suggestions separated by line breaks.

Normally you would return this list from another XPages using the "headless XPages technique" (sometimes known and XAgents). So as an example the following XML uses an XPage called EmployeeEditDeptAuto.xsp

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;xp:inputText id="dept" value="#{document1.Dept}"  
      styleClass="required xspInputFieldEditBox deletable autocomplete"&gt;  
      &lt;xp:this.attrs&gt;  
           &lt;xp:attr name="auto-src" value="EmployeeEditDeptAuto.xsp"&gt;  
           &lt;/xp:attr&gt;  
      &lt;/xp:this.attrs&gt;  
 &lt;/xp:inputText&gt;  
</code></pre>

The XPage simply returns a list of options:

<pre class="CICodeFormatter" ><code class="CICodeFormatter"> &lt;?xml version="1.0" encoding="UTF-8"?&gt;  
 &lt;xp:view xmlns:xp="http://www.ibm.com/xsp/core" rendered="false"&gt;  
      &lt;xp:this.afterRenderResponse&gt;&lt;![CDATA[#{javascript:var exCon = facesContext.getExternalContext();   
 var writer = facesContext.getResponseWriter();  
 var response = exCon.getResponse();  
 response.setContentType("text/plain");  
 response.setHeader("Cache-Control", "no-cache");  
 var list = $A(@Unique(@DbLookup(@DbName(), "Employees by dept", context.getUrlParameter("q"), 1, "[PARTIALMATCH]"))).sort();  
 var out = "";  
 for (var i=0; i&lt;list.length; i++){  
      out += list[i] + "\n";       
 }  
 writer.write(out);  
 writer.endDocument();  
 facesContext.responseComplete();}]]&gt;&lt;/xp:this.afterRenderResponse&gt;  
      &lt;xp:this.resources&gt;  
           &lt;xp:script src="/unpCommon.jss" clientSide="false"&gt;&lt;/xp:script&gt;  
      &lt;/xp:this.resources&gt;  
 &lt;/xp:view&gt;  
</code></pre>


# Required Resources
When you use the Form Editor custom control make sure that you have the following resources in your application:
* UnpSaveDocument (XPage)
* unplugged.css
* unp/jquery-1.7.2.min.js
* unp/jquery.blockUI.min.js
* unp/iScroll.min.js
* unplugged.js
* unpCommon.jss
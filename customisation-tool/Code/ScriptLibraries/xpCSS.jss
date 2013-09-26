function saveCSS(){
	var doc:NotesDocument = document1.getDocument(true);
	//Get the LESS body
	var vwLess:NotesView = database.getView("LESS");
	var docLess:NotesDocument = vwLess.getDocumentByKey(doc.getItemValueString("LessFile"), true);
	var rtLess:NotesRichTextItem = docLess.getFirstItem("LessSource");
	var lessbody = rtLess.getUnformattedText();
	//Now build the LESS header
	var fieldnames = docLess.getItemValue("fieldnames");
	var fieldvalues = docLess.getItemValue("fieldvalues");
	var lessheader = "";
	for (var i=0; i<fieldnames.size(); i++){
		lessheader += fieldnames.elementAt(i) + ": " + doc.getItemValueString(fieldvalues.elementAt(i)) + ";\n";
	}
	var less = lessheader + lessbody;
	var item:NotesRichTextItem = doc.getFirstItem("LESS");
	if (item == null){
		item = doc.createRichTextItem("LESS");
	}
	item.appendText(less);
	var filename = doc.getItemValue("filename").elementAt(0);
	filename = LessToCssBean.createCSSFileFromLessText(less, filename);
	document1.replaceItemValue("CSSFilePath", filename);
	//Set readers fields on the document in this database
	var item:NotesItem = doc.replaceItemValue("Owner", @UserName());
	item.setReaders(true);
	item = doc.replaceItemValue("OtherReaders", "[Admin]");
	item.setReaders(true);
	
	//Attach the CSS into the workspace database
	var workspace:NotesDatabase = sessionAsSigner.getDatabase(database.getServer(), "UnpDemoWorkspace.nsf");
	var cssview:NotesView = workspace.getView("CSS By Owner");
	var cssdoc:NotesDocument = cssview.getDocumentByKey(@UserName());
	if (cssdoc != null){
		cssdoc.remove(true);		
	}
	cssdoc = workspace.createDocument();
	cssdoc.replaceItemValue("Form", "CustomCSS");
	var item:NotesItem = cssdoc.replaceItemValue("Owner", @UserName());
	item.setReaders(true);
	item = cssdoc.replaceItemValue("OtherReaders", "[Admin]");
	item.setReaders(true);
	var rtitem:NotesRichTextItem = cssdoc.createRichTextItem("attachment");
	rtitem.embedObject(1454, "", filename, null);
	cssdoc.computeWithForm(false, false);
	cssdoc.save();
	
	//Remove the CSS file from the disk
	LessToCssBean.cleanupfiles(filename);
	
	document1.replaceItemValue("LastSaved", session.createDateTime(new Date()));
}
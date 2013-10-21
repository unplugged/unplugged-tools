$(document).ready( function() {
	$('.pick-a-color').colorpicker()
	$(".color-picker").click(function(event){
		$(event.target).prev().focus();
	})
	$(".form-control").blur(function(){
		changeSetting($(this));
	});
	
	
})

$("iframe").ready(function (){
	//Now Process all the fields once when the page loads
	setTimeout(processAllSettings, 1500);
});

function processAllSettings(){
	$(".container input").each(function(){
		changeSetting($(this));
	})
}

function changeSetting(thefield){
	try{
		console.log("Processing field " + thefield.prop("id"));
		var newvalue = thefield.val();
		var property = thefield.attr("unp-less");
		if (property != "" && property != null){
			switch(property){
				case "@body-background-color":
					$("#previewframe").contents().find("body").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@body-font":
					$("#previewframe").contents().find("body").css("font-family", newvalue);
					break;
				case "@navbar-background":
					$("#previewframe").contents().find(".iHeader").css("background", newvalue);
					break;
				case "@navbar-border-bottom":
					$("#previewframe").contents().find(".iHeader").css("border-bottom", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navbar-title-text-shadow":
					$("#previewframe").contents().find(".title").css("text-shadow", newvalue);
					break;
				case "@navbar-title-color":
					$("#previewframe").contents().find(".title").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navbar-title-font-size":
					$("#previewframe").contents().find(".title").css("font-size", newvalue);
					break;
				case "@navbar-title-font-weight":
					$("#previewframe").contents().find(".title").css("font-weight", newvalue);
					break;
				case "@input-search-frame-input-border":
					$("#previewframe").contents().find(".input-search-frame input").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@input-search-frame-input-background":
					$("#previewframe").contents().find(".input-search-frame input").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@input-search-frame-input-box-shadow":
					$("#previewframe").contents().find(".input-search-frame input").css("box-shadow", newvalue);
					break;
				case "@input-search-frame-input-color":
					$("#previewframe").contents().find(".input-search-frame input").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-border-radius":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("border-radius", newvalue);
					$("#previewframe").contents().find(".workspace-items a").css("border-radius", newvalue);
					$("#previewframe").contents().find(".input-search-frame input").css("-webkit-border-radius", newvalue);
					$("#previewframe").contents().find(".button").css("border-radius", newvalue);
					$("#previewframe").contents().find(".editButton .label, cancelButton .label, .proceedButton .label, .saveButton .label").css("border-radius", newvalue);
					$("#previewframe").contents().find(".viewsButton,.homeButton,.searchButton,.syncButton,.newButton,.settingsButton,.backButton").css("border-radius", newvalue);
					break;
				case "@button-box-shadow":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("box-shadow", newvalue);
					$("#previewframe").contents().find(".button").css("box-shadow", newvalue);
					$("#previewframe").contents().find(".editButton .label, cancelButton .label, .proceedButton .label, .saveButton .label").css("box-shadow", newvalue);
					$("#previewframe").contents().find(".viewsButton,.homeButton,.searchButton,.syncButton,.newButton,.settingsButton,.backButton").css("box-shadow", newvalue);
					break;
				case "@button-font-weight":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("font-weight", newvalue);
					$("#previewframe").contents().find(".button").css("font-weight", newvalue);
					$("#previewframe").contents().find(".editButton .label, cancelButton .label, .proceedButton .label, .saveButton .label").css("font-weight", newvalue);
					$("#previewframe").contents().find(".viewsButton,.homeButton,.searchButton,.syncButton,.newButton,.settingsButton,.backButton").css("font-weight", newvalue);
					break;
				case "@button-text-shadow":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("text-shadow", newvalue);
					$("#previewframe").contents().find(".button").css("text-shadow", newvalue);
					$("#previewframe").contents().find(".editButton .label, cancelButton .label, .proceedButton .label, .saveButton .label").css("text-shadow", newvalue);
					$("#previewframe").contents().find(".viewsButton,.homeButton,.searchButton,.syncButton,.newButton,.settingsButton,.backButton").css("text-shadow", newvalue);
					break;
				case "@button-default-background":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("background", newvalue);
					$("#previewframe").contents().find(".button").css("background", newvalue);
					$("#previewframe").contents().find(".editButton .label").css("background", newvalue);
					$("#previewframe").contents().find(".viewsButton,.homeButton,.searchButton,.syncButton,.newButton,.settingsButton,.backButton").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-default-label-color":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("color", newvalue);
					$("#previewframe").contents().find(".button").css("color", newvalue);
					$("#previewframe").contents().find(".editButton .label").css("color", newvalue);
					$("#previewframe").contents().find(".viewsButton,.homeButton,.searchButton,.syncButton,.newButton,.settingsButton,.backButton").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-default-border-color":
					$("#previewframe").contents().find("#dialogPopup .dialogbuttons .button").css("border-color", newvalue);
					$("#previewframe").contents().find(".button").css("border-color", newvalue);
					$("#previewframe").contents().find(".editButton .label").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-success-background":
					$("#previewframe").contents().find(".savebutton").css("background", newvalue);
					$("#previewframe").contents().find(".proceedButton .label, .saveButton .label").css("background", newvalue);
					$("#previewframe").contents().find(".syncButton").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-success-label-color":
					$("#previewframe").contents().find(".savebutton").css("color", newvalue);
					$("#previewframe").contents().find(".proceedButton .label, .saveButton .label").css("color", newvalue);
					$("#previewframe").contents().find(".syncButton").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-success-border-color":
					$("#previewframe").contents().find(".savebutton").css("border-color", newvalue);
					$("#previewframe").contents().find(".proceedButton .label, .saveButton .label").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-danger-background":
					$("#previewframe").contents().find(".cancelbutton").css("background", newvalue);
					$("#previewframe").contents().find(".cancelButton .label").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-danger-label-color":
					$("#previewframe").contents().find(".cancelbutton").css("color", newvalue);
					$("#previewframe").contents().find(".cancelButton .label").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@button-danger-border-color":
					$("#previewframe").contents().find(".cancelbutton").css("corder-color", newvalue);
					$("#previewframe").contents().find(".cancelButton .label").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footer-border-top":
					$("#previewframe").contents().find(".footer").css("border-top", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footer-background":
					$("#previewframe").contents().find(".footer").css("background", newvalue);
					break;
				case "@footer-span-color":
					$("#previewframe").contents().find(".footer span").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footerTabtext-color":
					$("#previewframe").contents().find("#footerTabBar li .footerTabtext").css("color", newvalue);
					$("#previewframe").contents().find("#footerTabBar li i").css("color", newvalue);
					$("#previewframe").contents().find("#footerTabBar li .tabSelected").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footerTabtext-font-size":
					$("#previewframe").contents().find("#footerTabBar li .footerTabtext").css("font-size", newvalue);
					break;
				case "@footerTabtext-font-weight":
					$("#previewframe").contents().find("#footerTabBar li .footerTabtext").css("font-weight", newvalue);
					break;
				case "@tabSelected-footerTabtext-color":
					$("#previewframe").contents().find("#footerTabBar li .tabSelected .footerTabtext").css("color", newvalue);
					$("#previewframe").contents().find("#footerTabBar li .tabSelected i").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break
				case "@menuPane-border-color":
					$("#previewframe").contents().find("#menuPage").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuPane-padding":
					$("#previewframe").contents().find(".navScrollArea").css("padding", newvalue);
					break;
				case "@menuitems-border-radius":
					$("#previewframe").contents().find(".navScrollArea li:first").css("-webkit-border-top-left-radius", newvalue);
					$("#previewframe").contents().find(".navScrollArea li:first").css("-webkit-border-top-right-radius", newvalue);
					$("#previewframe").contents().find(".navScrollArea li:last").css("-webkit-border-bottom-left-radius", newvalue);
					$("#previewframe").contents().find(".navScrollArea li:last").css("-webkit-border-bottom-right-radius", newvalue);
					break;
				case "@menuitems-padding":
					$("#previewframe").contents().find(".navScrollArea li").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-border-outer":
					$("#previewframe").contents().find(".navScrollArea li").css("border-left", newvalue);
					$("#previewframe").contents().find(".navScrollArea li").css("border-right", newvalue);
					$("#previewframe").contents().find(".navScrollArea li:first").css("border-top", newvalue);
					$("#previewframe").contents().find(".navScrollArea li:last").css("border-bottom", newvalue);
					break;
				case "@menuitems-border-divider":
					$("#previewframe").contents().find(".navScrollArea li").css("border-bottom", newvalue);
					break;
				case "@menuitems-box-shadow":
					$("#previewframe").contents().find(".navScrollArea li").css("box-shadow", newvalue);
					break;
				case "@menuitems-color":
					$("#previewframe").contents().find(".navScrollArea li").css("color", newvalue);
					$("#previewframe").contents().find(".navScrollArea li .menulink").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-font-size":
					$("#previewframe").contents().find(".navScrollArea li").css("font-size", newvalue);
					break;
				case "@menuitems-font-weight":
					$("#previewframe").contents().find(".navScrollArea li").css("font-weight", newvalue);
					break;
				case "@menuitems-text-shadow":
					$("#previewframe").contents().find(".navScrollArea li").css("text-shadow", newvalue);
					$("#previewframe").contents().find(".navScrollArea li .menulink").css("text-shadow", newvalue);
					break;
				case "@menuitems-selected-color":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSelected").css("color", newvalue);
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSelected .menulink").css("color", newvalue);
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSelected i").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-selected-background":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSelected").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-selected-border":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSelected").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-sub-background":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSub").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-sub-border":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSub").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-subsub-background":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSubSub").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@menuitems-subsub-border":
					$("#previewframe").contents().find(".navScrollArea li.viewMenuItemSubSub").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@content-padding":
					$("#previewframe").contents().find(".panel, fieldset").css("margin", newvalue);
					$("#previewframe").contents().find(".bordered").css("padding", newvalue);
					$("#previewframe").contents().find("#formholder").css("margin", newvalue);
					break;
				case "@content-border-radius":
					$("#previewframe").contents().find(".panel, fieldset, legend, #dialogPopup, #summaryList").css("border-radius", newvalue);
					$("#previewframe").contents().find(".bordered li:first").css("-webkit-border-top-left-radius", newvalue);
					$("#previewframe").contents().find(".bordered li:first").css("-webkit-border-top-right-radius", newvalue);
					$("#previewframe").contents().find(".bordered li:last").css("-webkit-border-bottom-left-radius", newvalue);
					$("#previewframe").contents().find(".bordered li:last").css("-webkit-border-bottom-right-radius", newvalue);
					$("#previewframe").contents().find(".categoryRow:first").css("border-top-left-radius", newvalue);
					$("#previewframe").contents().find(".categoryRow:first").css("border-top-right-radius", newvalue);
					$("#previewframe").contents().find(".categoryRow:last").css("border-bottom-left-radius", newvalue);
					$("#previewframe").contents().find(".categoryRow:last").css("border-bottom-right-radius", newvalue);
					$("#previewframe").contents().find("#formholder").css("-webkit-border-radius", newvalue);
					$("#previewframe").contents().find("#formholder h2").css("-webkit-border-top-left-radius", newvalue);
					$("#previewframe").contents().find("#formholder h2").css("-webkit-border-top-right-radius", newvalue);
					$("#previewframe").contents().find("#formholder ul.buttons").css("-webkit-border-bottom-left-radius", newvalue);
					$("#previewframe").contents().find("#formholder ul.buttons").css("-webkit-border-bottom-right-radius", newvalue);					
					$("#previewframe").contents().find("#formholder ul.fieldlist").css("-webkit-border-bottom-left-radius", newvalue);
					$("#previewframe").contents().find("#formholder ul.fieldlist").css("-webkit-border-bottom-right-radius", newvalue);					
					break;
				case "@content-heading-color":
					$("#previewframe").contents().find(".panel h1, fieldset h1").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@content-heading-font-size":
					$("#previewframe").contents().find(".panel h1, fieldset h1").css("font-size", newvalue);
					break;
				case "@content-heading-font-weight":
					$("#previewframe").contents().find(".panel h1, fieldset h1").css("font-weight", newvalue);
					break;
				case "@content-subheading-color":
					$("#previewframe").contents().find(".panel h2, fieldset h2, .panel h2.xspTextComputedField, fieldset h2.xspTextComputedField").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@content-heading-font-size":
					$("#previewframe").contents().find(".panel h2, fieldset h2, .panel h2.xspTextComputedField, fieldset h2.xspTextComputedField").css("font-size", newvalue);
					break;
				case "@content-heading-font-weight":
					$("#previewframe").contents().find(".panel h2, fieldset h2, .panel h2.xspTextComputedField, fieldset h2.xspTextComputedField").css("font-weight", newvalue);
					break;
				case "@table-heading-border-color":
					$("#previewframe").contents().find("li.title, li#title, .categoryRow").css("border-bottom-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-heading-color":
					$("#previewframe").contents().find("li.title span, li#title span, .categoryRow span").css("color", newvalue);
					$("#previewframe").contents().find("#summaryList.categoryRow").css("border-left-color", newvalue);
					$("#previewframe").contents().find("#summaryList.categoryRow.accordionExpanded").css("border-top-color", newvalue);
					$("#previewframe").contents().find("#formholder h2 span").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-heading-color":
					$("#previewframe").contents().find("li.title span, li#title span, .categoryRow span").css("font-size", newvalue);
					$("#previewframe").contents().find("#formholder h2 span").css("font-size", newvalue);
					break;
				case "@table-heading-background":
					$("#previewframe").contents().find("li.title, li#title, .categoryRow").css("background", newvalue);
					$("#previewframe").contents().find("#formholder h2").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-heading-font-weight":
					$("#previewframe").contents().find("li.title span, li#title span, .categoryRow span").css("font-weight", newvalue);
					$("#previewframe").contents().find("#formholder h2 span").css("font-weight", newvalue);
					break;
				case "@table-heading-text-transform":
					$("#previewframe").contents().find("li.title span, li#title span, .categoryRow span").css("text-transform", newvalue);
					$("#previewframe").contents().find("#formholder h2 span").css("text-transform", newvalue);
					break;
				case "@table-heading-text-shadow":
					$("#previewframe").contents().find("li.title span, li#title span, .categoryRow span").css("text-shadow", newvalue);
					$("#previewframe").contents().find("#formholder h2 span").css("text-shadow", newvalue);
					$("#previewframe").contents().find(".categoryRowFixed span").css("text-shadow", newvalue);
					break;
				case "@table-heading-box-shadow":
					$("#previewframe").contents().find("li.title, li#title, .categoryRow").css("box-shadow", newvalue);
					$("#previewframe").contents().find("#formholder h2 span").css("box-shadow", newvalue);
					break;
				case "@table-subheading-border-color":
					$("#previewframe").contents().find(".categoryRowFixed").css("border-bottom-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-subheading-color":
					$("#previewframe").contents().find(".categoryRowFixed span").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-subheading-font-size":
					$("#previewframe").contents().find(".categoryRowFixed span").css("font-size", newvalue);
					break;
				case "@table-subheading-background":
					$("#previewframe").contents().find(".categoryRowFixed").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-subheading-font-weight":
					$("#previewframe").contents().find(".categoryRowFixed span").css("font-weight", newvalue);
					break;
				case "@table-subheading-text-transform":
					$("#previewframe").contents().find(".categoryRowFixed span").css("text-transform", newvalue);
					break;
				case "@table-subheading-text-shadow":
					break;
				case "@table-subheading-box-shadow":
					$("#previewframe").contents().find(".categoryRowFixed").css("box-shadow", newvalue);
					break;
				case "@table-row-background":
					$("#previewframe").contents().find("li.data-row").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-row-border-color":
					$("#previewframe").contents().find("li.data-row").css("border-color", newvalue);
					$("#previewframe").contents().find("#formholder .editmode label").css("border-color", newvalue);
					$("#previewframe").contents().find("#formholder label.widelabel").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-row-title-font-color":
					$("#previewframe").contents().find("li.data-row").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-row-title-font-size":
					$("#previewframe").contents().find("li.data-row").css("font-size", newvalue);
					break;
				case "@table-row-title-font-weight":
					$("#previewframe").contents().find("li.data-row").css("font-weight", newvalue);
					break;
				case "@table-row-img-border-radius":
					$("#previewframe").contents().find("li.data-row.rowphoto").css("-webkit-border-radius", newvalue);
					break;
				case "@table-row-detail-font-color":
					$("#previewframe").contents().find("li.data-row.viewlistdetail").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@table-row-detail-font-size":
					$("#previewframe").contents().find("li.data-row.viewlistdetail").css("font-size", newvalue);
					break;
				case "@table-row-detail-font-weight":
					$("#previewframe").contents().find("li.data-row.viewlistdetail").css("font-weight", newvalue);
					break;
				case "@form-label-color":
					$("#previewframe").contents().find("#formholder label").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@form-label-background":
					$("#previewframe").contents().find("#formholder .editmode label").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@form-label-font-weight":
					$("#previewframe").contents().find("#formholder label").css("font-weight", newvalue);
					break;
				case "@form-label-font-size":
					$("#previewframe").contents().find("#formholder label").css("font-size", newvalue);
					break;
				case "@form-input-color":
					$("#previewframe").contents().find("#formholder .xspInputFieldEditBox, #formholder .xspListBox, #formholder textarea, .deleteicon span").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@form-input-font-weight":
					$("#previewframe").contents().find("#formholder .xspInputFieldEditBox, #formholder .xspListBox, #formholder textarea").css("font-weight", newvalue);
					break;
				case "@form-input-font-size":
					$("#previewframe").contents().find("#formholder .xspInputFieldEditBox, #formholder .xspListBox, #formholder textarea").css("font-size", newvalue);
					break;
				case "@workspace-item-text-color":
					$("#previewframe").contents().find(".workspace-items span").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@workspace-item-font-weight":
					break;
				case "@swiper-scroll-container-background-color":
					$("#previewframe").contents().find("swiper-scroll-container").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewtitle-color":
					$("#previewframe").contents().find(".hviewtitle").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewtitle-border-top":
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewtitle-background-color":
					thefield.next().css("background-color", newvalue);
					break;
				case "@h1-hview-h1-color":
					$("#previewframe").contents().find("h1.hview-h1").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewcategory-color":
					$("#previewframe").contents().find(".hviewcategory").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewcategory-border-top":
					$("#previewframe").contents().find(".hviewcategory").css("border-top", newvalue);
					break;
				case "@hviewcategory-border-left":
					$("#previewframe").contents().find(".hviewcategory").css("border-left", newvalue);
					break;
				case "@hviewcategory-border-right":
					$("#previewframe").contents().find(".hviewcategory").css("border-right", newvalue);
					break;
				case "@hviewcategory-background-color":
					$("#previewframe").contents().find(".hviewcategory").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
			}
		}
	}catch(e){
		
	}
}


function x$(idTag, param, jd) {
	idTag = idTag.replace(/:/gi, "\\:") + (param ? param : "");
	return (jd == "d" ? "#" + idTag : $("#" + idTag));
}

function makeActive(unid){
	$.blockUI( {
		message : '<h1><img src="ajax-loader.gif" /> Just a moment...</h1>'
	});
	$.ajax( {
		url : "makeActive.xsp?unid=" + unid,
		cache : false,
		context : document.body
	}).done( function(data) {
		if (data.indexOf("Error") > -1){
			alert(data);
		}else{
			window.location.reload(true);
		}
	}).fail( function(error) {
		alert("There has been an error.");
	}).always( function() {
		// unblock when ajax activity stops
			$.unblockUI();
		});
	var event = window.event;
	event.stopPropagation();
}

function downloadSourceCode(unid) {
	$.blockUI( {
		message : '<h1><img src="ajax-loader.gif" /> Just a moment...</h1>'
	});
	$.ajax( {
		url : "downloadDatabase?openagent&unid=" + unid,
		cache : false,
		context : document.body
	}).done( function(data) {
		if (data.indexOf("There has been an error:") > -1) {
			alert(data);
		} else {
			downloadURL(data);
		}
	}).fail( function(error) {
		alert("There has been an error.");
	}).always( function() {
		// unblock when ajax activity stops
			$.unblockUI();
		});
	var event = window.event;
	event.stopPropagation();
}

function downloadURL(url) {
	var hiddenIFrameID = 'hiddenDownloader', iframe = document
			.getElementById(hiddenIFrameID);
	if (iframe === null) {
		iframe = document.createElement('iframe');
		iframe.id = hiddenIFrameID;
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
	}
	iframe.src = url;
};
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
				case "@iHeader-background":
					$("#previewframe").contents().find(".iHeader").css("background", newvalue);
					break;
				case "@iHeader-border-bottom":
					$("#previewframe").contents().find(".iHeader").css("border-bottom-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@input-search-frame-input-border":
					$("#previewframe").contents().find(".input-search-frame input").css("border", newvalue);
					break;
				case "@input-search-frame-input-background":
					$("#previewframe").contents().find(".input-search-frame input").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@input-search-frame-input-box-shadow":
					$("#previewframe").contents().find(".input-search-frame input").css("box-shadow", newvalue);
					break;
				case "@input-search-frame-input-color":
					$("#previewframe").contents().find(".input-search-frame input").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@backButton-background":
					$("#previewframe").contents().find(".backButton").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@viewsButton-background":
					$("#previewframe").contents().find(".viewsButton").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@homeButton-background":
					$("#previewframe").contents().find(".homeButton").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@searchButton-background":
					$("#previewframe").contents().find(".searchButton").css("background", "-webkit-linear-gradient(#808080, " + newvalue + ")");
					thefield.next().css("background-color", newvalue);
					break;
				case "@body-background-color":
					$("#previewframe").contents().find("body").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@span-title-text-shadow":
					$("#previewframe").contents().find("span.title").css("text-shadow", newvalue);
					break;
				case "@span-title-color":
					$("#previewframe").contents().find("span.title").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-background":
					$("#previewframe").contents().find(".navScrollArea ul li").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-border":
					$("#previewframe").contents().find(".navScrollArea ul li").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-color":
					$("#previewframe").contents().find(".navScrollArea ul li").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-text-shadow":
					$("#previewframe").contents().find(".navScrollArea ul li").css("text-shadow", newvalue);
					break;
				case "@h1-hview-h1-color":
					$("#previewframe").contents().find("h1.hview-h1").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewtitle-background-color":
					$("#previewframe").contents().find("h1.hview-h1").css("background-color", newvalue);
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
				case "@swiper-scroll-container-background-color":
					$("#previewframe").contents().find(".swiper-scroll-container").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewtitle-color":
					$("#previewframe").contents().find(".hviewtitle").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@hviewtitle-border-top":
					$("#previewframe").contents().find(".hviewtitle").css("border-top", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-viewMenuItemSelected-background":
					$("#previewframe").contents().find(".navScrollArea ul li.viewMenuItemSelected").css("background", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-viewMenuItemSub-background-color":
					$("#previewframe").contents().find(".navScrollArea ul li.viewMenuItemSub").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-viewMenuItemSub-background-border":
					$("#previewframe").contents().find(".navScrollArea ul li.viewMenuItemSub").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-viewMenuItemSubSub-background-color":
					$("#previewframe").contents().find(".navScrollArea ul li.viewMenuItemSubSub").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-viewMenuItemSelected-background-color":
					$("#previewframe").contents().find(".navScrollArea ul li.viewMenuItemSelected").css("background-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@navScrollArea-ul-li-viewMenuItemSelected-border":
					$("#previewframe").contents().find(".navScrollArea ul li.viewMenuItemSelected").css("border-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footerTabtext-color":
					$("#previewframe").contents().find(".footerTabtext").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@tabSelected-footerTabtext-color":
					$("#previewframe").contents().find(".tabSelected .footerTabtext").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footer-border-top":
					$("#previewframe").contents().find(".footer").css("border-top-color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@footer-background":
					$("#previewframe").contents().find(".footer").css("background", newvalue);
					break;
				case "@footer-span-color":
					$("#previewframe").contents().find(".footer>span").css("color", newvalue);
					thefield.next().css("background-color", newvalue);
					break;
				case "@settingsButton-background":
					$("#previewframe").contents().find(".settingsButton").css("background", "-webkit-linear-gradient(#808080, " + newvalue + ")");
					thefield.next().css("background-color", newvalue);
					break;
				case "@newButton-background":
					$("#previewframe").contents().find(".newButton").css("background", "-webkit-linear-gradient(#808080, " + newvalue + ")");
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
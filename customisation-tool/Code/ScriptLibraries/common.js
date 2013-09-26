$(document).ready( function() {
	$('body').scrollspy();
	$(".pick-a-color").pickAColor();
})

function x$(idTag, param, jd) {
	idTag = idTag.replace(/:/gi, "\\:") + (param ? param : "");
	return (jd == "d" ? "#" + idTag : $("#" + idTag));
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

var downloadURL = function downloadURL(url) {
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
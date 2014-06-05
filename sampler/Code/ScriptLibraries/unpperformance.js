$(window).load( function() {
	$("#intro", window.parent.document).hide();
	$( document ).ajaxComplete(function() {
		start();
	});
	QUnit.done(function( details ) {
		try{
			$('#qunit', window.parent.document).html("<h1>UPMark</h1><p>The results below describe how long a series of tests took to run on your device. The time the tests take are very hardware dependent, so different devices will see different results.</p>" + $("#qunit").html());
			$("#intro", window.parent.document).hide();
		}catch(e){
			
		}
	});
	var message;
	var starttime = Date.now();
	if (unp.getURLParameter("starttime") != ""){
		starttime = parseInt(unp.getURLParameter("starttime"), 10);
	}
	var endtime = Date.now();
	bLoaded = true;
	endtime = Date.now();
	test("Initial Page Load Time took " + (endtime - starttime) + "ms", 1, function(){
		ok(true);
	});
	test("open forms read", 1, function(){
		stop();
		//console.log("open forms read");
		$("#menuitems a").eq(8).click();
		ok(true);
	});
	test("open forms edit", 1, function(){
		stop();
		//console.log("open forms edit");
		$("#menuitems a").eq(9).click();
		ok(true);
	});
	test("open flat view", 1, function(){
		stop();
		//console.log("open flat view");
		$("#menuitems a").eq(6).click();
		ok(true);
	});
	test("open first document in view", 1, function(){
		stop();
		//console.log("open first document");
		$("#flatViewRowSet li.data-row").first().click();
		ok(true);
	});
	test("edit document", 1, function(){
		stop();
		//console.log("edit document");
		$(".editButton").first().click();
		ok(true);
	});
	test("open filtered view", 1, function(){
		stop();
		//console.log("open filtered view");
		$("#menuitems a").eq(7).click();
		ok(true);
	});
	test("open first document in view", 1, function(){
		stop();
		//console.log("open first document");
		$("#flatViewRowSet li.data-row").eq(1).click();
		ok(true);
	});
	test("edit document", 1, function(){
		stop();
		//console.log("edit document");
		$(".editButton").first().click();
		ok(true);
	});
	test("open typography read", 1, function(){
		stop();
		//console.log("open typography read");
		$("#menuitems a").eq(12).click();
		ok(true);
	});
	test("open typography edit", 1, function(){
		stop();
		//console.log("open typography edit")
		$("#menuitems a").eq(13).click();
		ok(true);
	});
	test("open contacts by company", 1, function(){
		stop();
		//console.log("open contacts by company");
		$("#menuitems a").eq(26).click();
		ok(true);
	});
	test("open contacts", 1, function(){
		stop();
		//console.log("open contacts")
		$("#menuitems a").eq(28).click();
		ok(true);
	});
	test("open media library", 1, function(){
		stop();
		//console.log("open media");
		$("#menuitems a").eq(32).click();
		ok(true);
	});

});

function log(message){
	if (unpluggedserver) {
		alert(message);
	} else {
		console.log(message);
	}	
}
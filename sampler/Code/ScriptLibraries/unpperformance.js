$(window).load( function() {
	$( document ).ajaxComplete(function() {
		start();
	});
	QUnit.done(function( details ) {
		try{
			$('#qunit', window.parent.document).html($("#qunit").html());
		}catch(e){
			
		}
	});
	var message;
	var starttime = Date.now();
	if (getURLParameter("starttime") != ""){
		starttime = parseInt(getURLParameter("starttime"), 10);
	}
	var endtime = Date.now();
	bLoaded = true;
	endtime = Date.now();
	test("Initial Page Load Time took " + (endtime - starttime) + "ms", 1, function(){
		ok(true);
	});
	test("open typography read", 1, function(){
		stop();
		$("#menuitems li:nth-child(3)").first().click();
		ok(true);
	});
	test("open typography edit", 1, function(){
		stop();
		$("#menuitems li:nth-child(4)").first().click();
		ok(true);
	});
	test("open flat view", 1, function(){
		stop();
		$("#menuitems li:nth-child(10)").first().click();
		ok(true);
	});
	test("open first document in view", 1, function(){
		stop();
		$("#flatViewRowSet li.data-row").first().click();
		ok(true);
	});
	test("edit document", 1, function(){
		stop();
		$(".editButton").first().click();
		ok(true);
	});
	test("open filtered view", 1, function(){
		stop();
		$("#menuitems li:nth-child(11)").first().click();
		ok(true);
	});
	test("open first document in view", 1, function(){
		stop();
		$("#flatViewRowSet li.data-row").first().click();
		ok(true);
	});
	test("edit document", 1, function(){
		stop();
		$(".editButton").first().click();
		ok(true);
	});
	test("open form read", 1, function(){
		stop();
		$("#menuitems li:nth-child(15)").first().click();
		ok(true);
	});
	test("open form edit", 1, function(){
		stop();
		$("#menuitems li:nth-child(16)").first().click();
		ok(true);
	});
	test("open contacts by company", 1, function(){
		stop();
		$("#menuitems li:nth-child(19)").first().click();
		ok(true);
	});
	test("open contacts", 1, function(){
		stop();
		$("#menuitems li:nth-child(20)").first().click();
		ok(true);
	});
	test("open media library", 1, function(){
		stop();
		$("#menuitems li:nth-child(25)").first().click();
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
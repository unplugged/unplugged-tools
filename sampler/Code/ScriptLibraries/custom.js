$(document).ready(function() {
	var css = $("[unp-id='primarycss']").attr("href");
	if (css){
		$("#footerTabBar li").removeClass("tabSelected");
		if (css == "unplugged-dark.css"){
			$("#footerTabBar li").eq(0).addClass("tabSelected");
		}else if (css == "unplugged-light.css"){
			$("#footerTabBar li").eq(1).addClass("tabSelected");
		}else if (css == "unplugged-ios7.css"){
			$("#footerTabBar li").eq(2).addClass("tabSelected");
		}
	}
	$(".fontawesome div").click(function(){
		showFontAwesomeDetails(this);
	})
	
	/*
	 * If we're running inside an iFrame we might be in the Restyler, so go and see if we need to do anything
	 */
	try{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if (isInIframe){
			window.parent.processAllSettings();
		}
	}catch(e){
		
	}
	
	//Test To See if we need to remove a second buttons div
	if ($(".buttons").length > 1){
		$(".buttons").eq(1).hide();
	}

})

$(document).ajaxComplete(function(){
	if (window.location.href.indexOf("UnpMain.xsp") > -1){
		//We need to re-init the charts
		buildCharts();
	}
	$(".fontawesome div").click(function(){
		showFontAwesomeDetails(this);
	})	
	/*
	 * If we're running inside an iFrame we might be in the Restyler, so go and see if we need to do anything
	 */
	try{
		var isInIframe = (window.location != window.parent.location) ? true : false;
		if (isInIframe){
			window.parent.processAllSettings();
		}
	}catch(e){
		
	}
	
	//Test To See if we need to remove a second buttons div
	if ($(".buttons").length > 1){
		$(".buttons").eq(1).hide();
	}
})

function myCallBackFunction() {
	alert("This is custom code called by the OK	button using the callback custom property");
}

function switchCSS(obj, newcss) {
	$("#footerTabBar li").removeClass("tabSelected");
	$(obj).addClass("tabSelected");
	$("[unp-id='primarycss']").attr("href", newcss);
	jQuery.get("SwitchCSS.xsp?css=" + newcss);
}

function initDialog() {
	setTimeout( function() {
		try {
			$(".opendialoglink").click( function(event) {
				openDialog($(this).attr('href'));
			});
		} catch (e) {

		}
	}, 1000);
}

function readForm(url, index) {
	loadPage(url + ' #contentwrapper', 'content', index);
}

function adjustIFrameSize() {
	setTimeout( function() {
		$("iframe").height($(window).height() - 120);
	}, 1500);
}

function buildCharts() {
	var names = [ 'Allan Long', 'Darcy Raffield', 'Darren Eno',
			'Erik Leavell', 'Jack Floyd', 'Kurt Lobo', 'Tan Ser' ];
	var piedata = [];
	for ( var i = 0; i < names.length; i++) {
		piedata.push( {
			'label' : names[i],
			data : getRnd()
		});
	}
	var placeholder = $("#pie1");
	placeholder.unbind();
	$.plot(placeholder, piedata, {
		series : {
			pie : {
				show : true,
				radius : 1,
				label : {
					show : true,
					radius : 2/3,
					formatter : labelFormatter,
					background : {
						opacity : 0
					},
					threshold : 0.1
				}
			}
		},
		legend : {
			show : !isPhone()
		}
	});
	var stackdata = [
			{
				label : 'Best Case',
				data : [ [ 2, getRnd() ], [ 3, getRnd() ], [ 4, getRnd() ],
						[ 5, getRnd() ], [ 6, getRnd() ] ]
			},
			{
				label : 'Commit',
				data : [ [ 2, getRnd() ], [ 3, getRnd() ], [ 4, getRnd() ],
						[ 5, getRnd() ], [ 6, getRnd() ] ]
			},
			{
				label : 'Closed',
				data : [ [ 2, getRnd() ], [ 3, getRnd() ], [ 4, getRnd() ],
						[ 5, getRnd() ], [ 6, getRnd() ] ]
			} ];
	$.plot("#stackchart", stackdata, {
		series : {
			stack : true,
			lines : {
				show : false,
				fill : true,
				steps : false
			},
			bars : {
				show : true,
				barWidth : 0.6,
				align : "center"
			}
		},
		xaxis : {
			ticks : [ [ 2, 2013 ], [ 3, 2014 ], [ 4, 2015 ], [ 5, 2016 ],
					[ 6, 2017 ] ]
		},
		legend : {
			show : true
		},
		grid : {
			show : true,
			backgroundColor : "#FFFFFF"
		}
	});
	var assigneddata = [];
	var ticks = [];
	for ( var i = 0; i < names.length; i++) {
		assigneddata.push( [ getRnd(), i ]);
		ticks.push( [ i, names[i] ]);
	}
	var assigneddataSet = [ {
		label : "Assigned",
		data : assigneddata
	} ];
	$.plot("#barchart1", assigneddataSet, {
		series : {
			bars : {
				show : true,
				barWidth : 0.6,
				align : "center",
				horizontal : true
			}
		},
		xaxis : {
			axisLabelUseCanvas : true
		},
		yaxis : {
			axisLabelUseCanvas : true,
			ticks : ticks
		},
		grid : {
			show : true,
			backgroundColor : "#FFFFFF"
		},
		legend : {
			show : false
		}
	});

	var xticks = null;
	if (isPhone()){
		xticks = [[50000,'$50k'],[100000,'$100k']]
	}else{
		xticks = [[25000,'$25k'],[50000,'$50k'],[75000,'$75k'],[100000,'$100k']]
	}
	assigneddata = [];
	ticks = [];
	for ( var i = 0; i < names.length; i++) {
		assigneddata.push( [ getRnd(100000), i ]);
		ticks.push( [ i, names[i] ]);
	}
	var assigneddataSet = [ {
		label : "Assigned",
		data : assigneddata
	} ];
	$.plot("#barchart2", assigneddataSet, {
		series : {
			bars : {
				show : true,
				barWidth : 0.6,
				align : "center",
				horizontal : true
			}
		},
		xaxis : {
			axisLabelUseCanvas : true,
			tickFormatter : function(v, axis) {
				return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			tickSize : (isPhone() ? 100000 : 25000),
			ticks: xticks,
			max : 100000
		},
		yaxis : {
			axisLabelUseCanvas : true,
			ticks : ticks
		},
		grid : {
			show : true,
			backgroundColor : "#FFFFFF"
		},
		legend : {
			show : false
		}
	});

	assigneddata = [];
	ticks = [];
	for ( var i = 0; i < names.length; i++) {
		assigneddata.push( [ getRnd(250000), i ]);
		ticks.push( [ i, names[i] ]);
	}
	var assigneddataSet = [ {
		label : "Assigned",
		data : assigneddata
	} ];
	
	if (isPhone()){
		xticks = [[100000,'$100k'],[200000,'$200k']]
	}else{
		xticks = [[50000,'$50k'],[100000,'$100k'],[150000,'$150k'],[200000,'$200k'],[250000,'$250k']]
	}
	$.plot("#barchart3", assigneddataSet, {
		series : {
			bars : {
				show : true,
				barWidth : 0.6,
				align : "center",
				horizontal : true
			}
		},
		xaxis : {
			axisLabelUseCanvas : true,
			tickFormatter : function(v, axis) {
				return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			tickSize : (isPhone() ? 200000 : 50000),
			ticks: xticks, 
			max : 250000
		},
		yaxis : {
			axisLabelUseCanvas : true,
			ticks : ticks
		},
		grid : {
			show : true,
			backgroundColor : "#FFFFFF"
		},
		legend : {
			show : false
		}
	});

	$(window).bind('orientationchange', buildCharts);
	$(window).bind('resize', buildCharts);
}

function isPhone() {
	var isPhone = document.width <= 480;
	return isPhone;
}

function getRnd(max) {
	if (!max) {
		max = 30
	}
	return parseInt(Math.random() * max);
}

function labelFormatter(label, series) {
	return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>"
			+ label + "<br/>" + Math.round(series.percent) + "%</div>";
}

function startTest() {
	$('head').append(
			$('<link rel="stylesheet" type="text/css" />').attr('href',
					'./unp/qunit-1.12.css?open&rnd=' + getRnd(10000)));
	$("#qunit")
			.html(
					"<p><i class=\"glyphicons stopwatch\" /> Running test, this can take up to 30 seconds...</p><p style=\"width: 100%; text-align: center; padding-top: 30px;\"><img src=\"ajax-loader.gif\" /></p>");
	$("#qunit").show();
	$("#startbutton").hide();
	$("#upmarkiframe").attr("src", "UPMarkStart.xsp?starttime=" + Date.now());
}

function showFontAwesomeDetails(element){
	$("#fontawesomedetails").html(element.outerHTML);
	$("#fontawesomedetails i").addClass("fa-5x");
	$("#fontawesomedetails div").attr("style", "text-align: center; padding-top: 100px;")
	$("#fontawesomedetails span").attr("style", "display: block;");
	openDialog("dialogPopup");
}
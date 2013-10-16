function myCallBackFunction() {
	alert("This is custom code called by the OK	button using the callback custom property");
}

function switchCSS(obj, newcss) {
	$("#footerTabBar li").removeClass("tabSelected");
	$(obj).addClass("tabSelected");
	$("[unp-id='primarycss']").attr("href", newcss);
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
	var names = [ 'Case Assignment', 'Grant Norman', 'John Coolidge',
			'Larry Barker', 'Lindsey Thomson', 'Richard Sharpe', 'Other' ];
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
					radius : 3 / 4,
					formatter : labelFormatter,
					background : {
						opacity : 0
					},
					threshold : 0.1
				}
			}
		},
		legend : {
			show : true
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
			ticks : [ [ 2, 2012 ], [ 3, 2013 ], [ 4, 2014 ], [ 5, 2015 ],
					[ 6, 2016 ] ]
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
			max: 100000
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
			max: 250000
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
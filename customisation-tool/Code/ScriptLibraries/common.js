$(document).ready(function(){
	$('body').scrollspy();
})

function x$(idTag, param, jd){
	idTag=idTag.replace(/:/gi, "\\:")+(param ? param : "");
	return( jd=="d" ? "#"+idTag : $("#"+idTag));
}
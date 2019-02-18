var tincan = new TinCan({url: window.location.href});

//--------------------------------------------------ON LOAD---------------------------------------------------------------------





$( document ).ready(function() {


alert("loaded");

// end of onload
});




//--------------------------------------------------------------ON PAGE CHANGE --------------------------------------------------

$(window).on('hashchange', function(e){
	

alert("page change");

});
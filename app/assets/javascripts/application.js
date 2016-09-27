// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .
//= require turbolinks

// $(document).ready(function() {
// 	// Use .ready to ensure turbolinks works properly
// });

$(document).ready(function (){

	function initialize() {
	    var myLatlng = new google.maps.LatLng(33.794391, -84.388112);

	    var multiMarker = [
	    [33.45115165, -84.47746155],
	    [34.04145679, -84.06980447],
	    [34.00760354, -84.4051481],
	    [33.53919369, -84.35052343],
	    [33.95864168, -84.32948201],
	    [33.79360378, -84.81473035],
	    [33.70175666, -84.60660806],
	    [33.5215979, -84.50413673],
	    [33.69909706, -84.27462307],
	    [33.74774811, -83.91736953],
	    [34.14349394, -84.57376145],
	    [33.52923386, -84.24305287],
	    [33.62046045, -84.70285972],
	    [33.45741751, -84.55540285],
	    [33.42088977, -84.43779553],
	    [33.56626149, -84.54677069],
	    [33.66982268, -83.95274439],
	    [33.50702712, -84.26892156],
	    [33.89089051, -83.96931076],
	    [33.43759675, -84.42983867],
	    [33.930818, -84.76277657],
	    [33.70193685, -84.49773735],
	    [34.09400592, -84.29731868],
	    [33.34720493, -84.52194647],
	    [34.16406974, -84.43854776]
	    ];

	    var mapOptions = {
	       zoom: 9,   
	       center: myLatlng,
	       scrollwheel: false
	    }

	    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	    var marker, i;

	    for (i = 0; i < multiMarker.length; i++) {
	    	marker = new google.maps.Marker({
	      		position: new google.maps.LatLng(multiMarker[i][0], multiMarker[i][1]),
	      		map: map
	    	});
	    };

	    google.maps.event.trigger(map, 'resize');	

	   //  google.maps.event.addListener(marker, 'click', function() {
	   //  	infowindow.open(map,marker);
	  	// });
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);



});
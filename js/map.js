/**
 * Created by yaojliu on 11/2/14.
 */

var map;

var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Happy birthday..</h1>' +
    '<div id="bodyContent">' +
    '<p><b>To Feiqiu</b>,' +
    'it\'s such a far distance so that I can not say Happy Birthday to you on site, ' +
    'and I think it\'s workday right? '+
    'But you do own me one birthday meal, and I\'ll keep it in my mind and get it back later.. '+
    'Anyway, wish you have a nice day and enjoy the life with loved ones and the one ' +
    'rock caves and ancient paintings. Uluru is listed as a World ' +
    'From ME in.</p>' +
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    '(last visited June 22, 2009).</p>' +
    '</div>' +
    '</div>';

function initialize() {
    var smilesLatLng = new google.maps.LatLng(37.4042343, -121.9325099);
    var feiqiuLatLng = new google.maps.LatLng(30.270286, 120.163651);

    var mapOptions = {
        zoom: 4,
        center: smilesLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    }

    var map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);

    var smilesMarker = new google.maps.Marker({
        position: smilesLatLng,
        map: map,
        title: 'Happy Birthday from ME!'
    });

    var feiqiuMarker = new google.maps.Marker({
        position: feiqiuLatLng,
        map: map,
        title: 'Lovely fleshy Feiqiu..!'
    });

    var line = new google.maps.Polyline({
        path: [smilesLatLng, feiqiuLatLng],
        strokeColor: "#BD1103",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map
    });

//    google.maps.event.addListener(map, 'click', function(event) {
//        placeMarker(event.latLng);
//    });

    var infowindow = new google.maps.InfoWindow({
        content: wordsForFeiqiu
    });

    google.maps.event.addListener(smilesMarker, 'click', function () {
        map.setZoom(8);
        map.setCenter(smilesMarker.getPosition());
        infowindow.open(map, smilesMarker);
    });

    google.maps.event.addListener(feiqiuMarker, 'click', function () {
        map.setZoom(8);
        map.setCenter(feiqiuMarker.getPosition());
    });


//    var placeMarker = function(location) {
//        var marker = new google.maps.Marker({
//            position: location,
//            map: map,
//            title: 'Hello kitty..'
//        });
//
//        map.setCenter(location);
//    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log('lat: ' + lat + ' lng: ' + lng);
//    map.setCenter(new google.maps.LatLng(lat, lng));
}
google.maps.event.addDomListener(window, 'load', initialize);
getLocation();
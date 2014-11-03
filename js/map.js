/**
 * Created by yaojliu on 11/2/14.
 */

//var Map;
var smilesLatLng = new google.maps.LatLng(37.4042343, -121.9325099);
var feiqiuLatLng = new google.maps.LatLng(30.270286, 120.163651);

var mapOptions = {
    zoom: 5,
    center: smilesLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}

var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

function clickHere() {
//    alert("Hello kitty..");
    if (Map === null)
        return;
    map.setCenter(feiqiuLatLng);
}

function initialize() {
//    var smilesLatLng = new google.maps.LatLng(37.4042343, -121.9325099);
//    var feiqiuLatLng = new google.maps.LatLng(30.270286, 120.163651);

//    var mapOptions = {
//        zoom: 4,
//        center: smilesLatLng,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//
//    }

//    var map = new google.maps.Map(document.getElementById('map_canvas'),
//        mapOptions);
//    Map = map;

    var smilesMarker = new google.maps.Marker({
        position: smilesLatLng,
        map: map,
        title: 'Happy Birthday and click to see more!'
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

    var infowindow2 = new google.maps.InfoWindow({
        content: galleryForFeiqiu
    });

    google.maps.event.addListener(smilesMarker, 'click', function () {
        map.setZoom(9);
        map.setCenter(smilesMarker.getPosition());
        infowindow.open(map, smilesMarker);
    });

    google.maps.event.addListener(feiqiuMarker, 'click', function () {
        map.setZoom(9);
        map.setCenter(feiqiuMarker.getPosition());
        infowindow2.open(map, feiqiuMarker);
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
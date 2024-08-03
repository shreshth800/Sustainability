var x = document.getElementById("demo");
var l, i;
function getLocation() {
  if (navigator.geolocation) {
    // (navigator.geolocation) whether ur device postion will be available or not.
    navigator.geolocation.getCurrentPosition(showPosition); // (getCurrentPosition) gives ur current position and calls show position fxn.
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // (position) is an object here.
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  l = position.coords.latitude;
  i = position.coords.longitude;

  initMap();
}

function initMap() {
  var mapOptions = {
    zoom: 14,
    center: { lat: 28.7197, lng: 77.0661 },
  };

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: { lat: 28.7197, lng: 77.0661 },
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content:
      "<p>Marker Location: Latitude: " +
      marker.getPosition().lat() +
      ", Longitude: " +
      marker.getPosition().lng() +
      "</p>",
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
}

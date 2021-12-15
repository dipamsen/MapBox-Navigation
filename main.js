let lng, lat, destination;

function initGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    alert("Sorry, this browser does not support geolocation services.");
  }
}

function success(position) {
  console.log(position);

  lng = position.coords.longitude;
  lat = position.coords.latitude;

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGlwYW1zZW4iLCJhIjoiY2t4NHEzZGFrMHhqbzJvcWt1YW43bjU5bCJ9.3DZNA0EqHrBKdvJ36jwfCw";

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [lng, lat],
    zoom: 8,
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );

  map.on("click", function (e) {
    destination = e.lngLat;
    console.log(destination);
  });
}

$(document).ready(function () {
  alert("Please allow access to GeoLocation.");
  initGeoLocation();
});

$(function () {
  $("#navigate-button").click(function () {
    window.location.href = `navigation.html?src=${lat};${lng}&dest=${destination.lat};${destination.lng}`;
  });
});

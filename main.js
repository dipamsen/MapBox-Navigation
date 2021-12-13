const lat = 22.7868542;
const lng = 88.3643296;

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGlwYW1zZW4iLCJhIjoiY2t4NHEzZGFrMHhqbzJvcWt1YW43bjU5bCJ9.3DZNA0EqHrBKdvJ36jwfCw";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [lng, lat],
  zoom: 0,
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

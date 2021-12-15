const coords = {};

$(document).ready(function () {
  getCoordinates();
});

function getCoordinates() {
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("src") && searchParams.has("dest")) {
    const srcLat = searchParams.get("src").split(";")[0];
    const srcLng = searchParams.get("src").split(";")[1];
    const destLat = searchParams.get("dest").split(";")[0];
    const destLng = searchParams.get("dest").split(";")[1];
    coords.src = {
      lng: parseFloat(srcLng),
      lat: parseFloat(srcLat),
    };
    coords.dest = {
      lng: parseFloat(destLng),
      lat: parseFloat(destLat),
    };
    console.log(coords);
  } else {
    alert("coordinates not selected");
    window.history.back();
  }
}

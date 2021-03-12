let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 51.0688, lng: -1.7945 },
  });
  
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
 
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 51.1789, lng: -1.8262 },
  { lat: 50.6212, lng: -2.2768 },
  { lat: 50.8759, lng: -1.6328 },
  { lat: 50.7370, lng: -2.6688 },
  { lat: 50.8137, lng: -2.4747 },
  { lat: 50.6913, lng: -1.9739 },
];
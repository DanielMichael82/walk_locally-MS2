// This example displays a marker at Durdle Door, Dorset.
// When the user clicks the marker, an info window opens.
function initMap() {
  const durdle_door = { lat: 50.6212, lng: -2.2768 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: durdle_door,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Durdle Door</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Durdle Door</b>, is a natural limestone arch on the Jurassic Coast in Dorset, England.' +
    'Walking this beautiful part of the <b>Jurassic Coast</b> an (UNESCO World Heritage Site)' +
    'As a family we like to start from the Lulworth Cove car park (charges apply), making our way up the challenging gravel track to the site.' +
    'This way you see the stunning scenery of Lulworth Cove, Man o War Bay and Durdle Door itself' +
    'But there is also a car park a shorter walk away from Durdle Door for less of a challenge but still get to sample stunning site. </p>' +
    '<img src="assets/images/durdledoor.jpg" width=180 height=80>' +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: durdle_door,
    map,
    title: "Durdle Door",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  marker.addListener("click", () => {
    infowindow.close(map, marker);
  });
}
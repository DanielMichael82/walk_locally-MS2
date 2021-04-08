let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 51.1789, lng: -1.8262 },
    });
}
let markers = locations.map((location, i) => {
    return new google.maps.Marker({
        position: location,
        map: map,
        label: location[i % location.length],
    });
});
// Add a marker clusterer to manage the markers.
new MarkerClusterer(map, markers, {
    imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});

let locations = [
    {
        name: "Durdle Door", lat: 50.6212, lng: -2.2768, content: '<div id="content">' +
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
            "</div>",

        name: "Corfe Castle", lat: 50.6395, lng: -2.0566, content: '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Corfe Castle</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Corfe Castle</b>, is a castle ruins standing above the village of the same name on the Isle of Purbeck in the county of Dorset, England.' +
            'Owned by the National Trust, the castle is open to the public </p>' +
            '<img src="assets/images/corfe.jpeg" width=180 height=80>' +
            "</div>" +
            "</div>",

        name: "Stonehenge", lat: 51.1789, lng: -1.8262, content: '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Stonehenge</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Stonehenge</b>, is a prehistoric monument on Salisbury Plain in Wiltshire, England.' +
            'One of the most famous landmarks in the UK, Stonehenge is regarded as a British cultural icon.' +
            'Stonehenge is owned by the Crown and managed by English Heritage; the surrounding land is owned by the National Trust. </p>' +
            '<img src="assets/images/stonehenge.jpeg" width=180 height=80>' +
            "</div>" +
            "</div>",

        name: "New Forest", lat: 50.8764, lng: -1.6312, content: '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">New Forest National Park</h1>' +
            '<div id="bodyContent">' +
            '<p>The <b>New Forest</b>, is one of the largest remaining tracts of unenclosed pasture land,' +
            'heathland and forest in Southern England, covering southwest Hampshire and southeast Wiltshire.' +
            'More to write. </p>' +
            '<img src="assets/images/hampshire.jpeg" width=180 height=80>' +
            "</div>" +
            "</div>",
    }
];

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the site information.
function attachLocations(marker, locations) {
    let infowindow = new google.maps.InfoWindow({
        content: locations,
    });
    marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
    });
}
let map

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 51.1789, lng: -1.8262 },
    });

// For each of these markers, give them a title with their index, and when
// they are clicked they should open an infowindow with text
    const locations = ["Corfe Castle", "Durdle Door", "Hengistbury Head", "Beaulieu", "New Forest", "South Downs", "Lacock Abbey",
"Salisbury Cathedral", "Stonehenge"];

    for (let i = 0; i < locations.length; ++i) {
        const marker = new google.maps.Marker({
            position: {
            lat: 50.6395, lng: -2.0566 //Corfe Castle
            },
            lat: 50.6212, lng: -2.2768 //Durdle Door
        }, {
            lat: 50.7191, lng: -1.7661 //Hengistbury Head
        }, {
            lat: 50.8156, lng: -1.4532 //Beaulieu
        }, {
            lat: 50.8764, lng: -1.6312 //New Forest National Park
        }, {
            lat: 50.9893, lng: -0.7381 //South Downs National Park
        }, {
            lat: 51.4147, lng: -2.1172 //Lacock Abbey
        }, {
            lat: 51.0661, lng: -1.7975 //Salisbury Cathedral
        }, {
            lat: 51.1789, lng: -1.8262 //Stonehenge
        });

            attachLocations(marker, locations[i]);
    }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the site information.
function attachLocations(marker, locations) {
    const infowindow = new google.maps.InfoWindow({
        content: locations,
    });
    marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
    });
}

let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
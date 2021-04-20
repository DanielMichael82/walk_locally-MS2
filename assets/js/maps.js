function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 51.1789, lng: -1.8262 },
    });

    const marker1 = new google.maps.Marker({
          position: new google.maps.LatLng(50.6212, -2.2768),
          map: map,
          title: 'Durdle Door'
    });
    
    const infoWindow1 = new google.maps.InfoWindow({
        content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">Durdle Door</h2>' +
                '<div id="bodyContent">' +
                '<p><b>Durdle Door</b>, is a natural limestone arch on the Jurassic Coast in Dorset, England.' +
                'Walking this beautiful part of the <b>Jurassic Coast</b> an (UNESCO World Heritage Site)' +
                'As a family we like to start from the Lulworth Cove car park (charges apply), making our way up the challenging gravel track to the site.' +
                'This way you see the stunning scenery of Lulworth Cove, Man o War Bay and Durdle Door itself' +
                'But there is also a car park a shorter walk away from Durdle Door for less of a challenge but still get to sample stunning site. </p>' +
                '<img src="assets/images/durdledoor.jpg" width=180 height=80>' +
                "</div>" +
                "</div>"
    });
    google.maps.event.addListener(marker1, 'click', function() {
        infoWindow1.open(map, marker1);
    });

    const marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(50.6395, -2.0566),
          map: map,
          title: 'Corfe Castle'
    });
    
    const infoWindow2 = new google.maps.InfoWindow({
        content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">Corfe Castle</h2>' +
                '<div id="bodyContent">' +
                '<p><b>Corfe Castle</b>, is a castle ruins standing above the village of the same name on the Isle of Purbeck in the county of Dorset, England.' +
                'Owned by the National Trust, the castle is open to the public </p>' +
                '<img src="assets/images/corfe.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
    });

    google.maps.event.addListener(marker2, 'click', function() {
        infoWindow2.open(map, marker2);
    });

const marker3 = new google.maps.Marker({
          position: new google.maps.LatLng(51.1789, -1.8262),
          map: map,
          title: 'Stonehenge'
    });
    
    const infoWindow3 = new google.maps.InfoWindow({
        content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">Stonehenge</h2>' +
                '<div id="bodyContent">' +
                '<p><b>Stonehenge</b>, is a prehistoric monument on Salisbury Plain in Wiltshire, England.' +
                'One of the most famous landmarks in the UK, Stonehenge is regarded as a British cultural icon.' +
                'Stonehenge is owned by the Crown and managed by English Heritage; the surrounding land is owned by the National Trust. </p>' +
                '<img src="assets/images/stonehenge.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
    });

    google.maps.event.addListener(marker3, 'click', function() {
        infoWindow3.open(map, marker3);
    });


    const marker4 = new google.maps.Marker({
          position: new google.maps.LatLng(50.8764, -1.6312),
          map: map,
          title: 'New Forest'
    });
    
    const infoWindow4 = new google.maps.InfoWindow({
        content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">New Forest National Park</h2>' +
                '<div id="bodyContent">' +
                '<p>The <b>New Forest</b>, is one of the largest remaining tracts of unenclosed pasture land,' +
                'heathland and forest in Southern England, covering southwest Hampshire and southeast Wiltshire.' +
                'More to write. </p>' +
                '<img src="assets/images/hampshire.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
    });

    google.maps.event.addListener(marker4, 'click', function() {
        infoWindow4.open(map, marker4);
    });
}

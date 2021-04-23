function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 51.1789, lng: -1.8262 },
    });

    // Array of markers
    const markers = [
        {
            location: { lat: 50.6212, lng: -2.2768 },
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">Durdle Door</h2>' +
                '<div id="bodyContent">' +
                '<p><b>Durdle Door</b>, is a natural limestone arch on the Jurassic Coast in Dorset, England.</p>' +
                '<h3><i class="fas fa-walking"></i></h3>' +
                '<p>This beautiful part of the <b>Jurassic Coast</b> an (UNESCO World Heritage Site)' +
                'As a family we like to start from the Lulworth Cove car park (charges apply), making our way up the challenging gravel track to the site.' +
                ' This way you see the stunning scenery of Lulworth Cove, Man o War Bay and Durdle Door itself' +
                ' There is also a car park which a shorter walk away from Durdle Door for less of a challenge but still get to sample this stunning site. </p>' +
                '<img src="assets/images/durdledoor.jpg" width=180 height=80>' +
                "</div>" +
                "</div>"
        },
        {
            location: { lat: 50.6395, lng: -2.0566 },
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">Corfe Castle</h2>' +
                '<div id="bodyContent">' +
                '<p><b>Corfe Castle</b>, is a castle ruins standing above the village of the same name on the Isle of Purbeck in the county of Dorset, England.</p>' +
                '<h3><i class="fas fa-walking"></i></h3>' +
                '<p>Owned by the National Trust, the castle is open to the public </p>' +
                '<img src="assets/images/corfe.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
        },
        {
            location: { lat: 51.1789, lng: -1.8262 },
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">Stonehenge</h2>' +
                '<div id="bodyContent">' +
                '<p><b>Stonehenge</b>, is a prehistoric monument on Salisbury Plain in Wiltshire, England.</p>' +
                '<h3><i class="fas fa-walking"></i></h3>' +
                '<p>Stonehenge is a great walk for adults and children alike!' + 
                'If you would like to focus of a walk around the wonderful countryside,' +
                'we suggest that you park up on the gravel track not far from the stones, One of the most famous landmarks in the UK, Stonehenge is regarded as a British cultural icon.' +
                'Stonehenge is owned by the Crown and managed by English Heritage; the surrounding land is owned by the National Trust. </p>' +
                '<img src="assets/images/stonehenge.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
        },
        {
            location: { lat: 50.8764, lng: -1.6312 },
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">New Forest National Park</h2>' +
                '<div id="bodyContent">' +
                '<p>The <b>New Forest</b>, is one of the largest remaining tracts of unenclosed pasture land,' +
                'heathland and forest in Southern England, covering southwest Hampshire and southeast Wiltshire.</p>' +
                '<h3><i class="fas fa-walking"></i></h3>' +
                '<p>More to write. </p>' +
                '<img src="assets/images/hampshire.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
        },
        {
            location: { lat: 50.7116, lng: -2.7637 },
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                "</div>" +
                '<h2 id="firstHeading" class="firstHeading">West Bay</h2>' +
                '<div id="bodyContent">' +
                '<p><b>West Bay</b>, West Bay, also known as Bridport Harbour,' +
                'is a small harbour settlement and resort on the English Channel coast in Dorset.</p>' +
                '<h3><i class="fas fa-walking"></i></h3>' +
                '<p>More to write. </p>' +
                '<img src="assets/images/westbay.jpeg" width=180 height=80>' +
                "</div>" +
                "</div>"
        }
    ];

    // Loop through markers
    for (let i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker

    function addMarker(property){

        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            });

        // Check content
        if(property.content){

            const infWin = new google.maps.InfoWindow({
            content: property.content

            });

            marker.addListener("click", () => {
                infWin.open(map, marker);
            })
    
        }
    }
}
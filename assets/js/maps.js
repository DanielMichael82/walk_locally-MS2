function initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 50.7488, lng: -2.3445}
        });
        let geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
          geocodeAddress(geocoder, map);
        });
      }

      function geocodeAddress(geocoder, resultsMap) {
        let address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            let marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location
            });
          } else {
            alert(`Location was not successful for the following reason: ${status}`);
          }
        });
      }

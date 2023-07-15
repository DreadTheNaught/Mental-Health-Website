// Initialize and add the map
let map;
// Initialize the map and nearby search
async function initMap() {
  // Create a map object
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 }, // Set initial map center coordinates
    zoom: 12 // Set initial zoom level
  });

  // Request user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Center the map on the user's location
        map.setCenter(userLocation);

        // Perform a nearby search for mental health clinics
        const request = {
          location: userLocation,
          radius: 20 * 1000, // Specify the search radius in meters
          keyword: 'Psychiatrist Psychologist Therapist'
        };

        const placesService = new google.maps.places.PlacesService(map);
        placesService.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // Process the search results
            for (let i = 0; i < results.length; i++) {
              const place = results[i];
              // Access relevant information about each place (e.g., name, address, etc.)
              const name = place.name;
              const address = place.vicinity;
              const rating = place.rating;
              const reviews = place.reviews;

              // Display the place on the map using a marker
              const marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: name
              });
              
                marker.addListener('click', () => {
                // Open the Google Maps page for the marker's address in a new tab
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`);
              });
                
            }
          }
        });
      },
      error => {
        console.error('Error retrieving user location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}


initMap();
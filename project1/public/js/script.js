
// --------------------- LEAFLET ---------------------

//Set leaflet map properties ------
const map = L.map('map').setView([0, 0], 5);
const attribution =
  '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
const tileUrl =
  'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);


//Leaflet Layers ------
let capitalCityMarkers = new L.FeatureGroup();
map.addLayer(capitalCityMarkers);
let allCityMarkers = new L.FeatureGroup();
map.addLayer(allCityMarkers);
let oceanMarkers = new L.FeatureGroup();
map.addLayer(oceanMarkers);


//Layer Functions ------

//Add capital city markers to map and add to layer
function addCapitalCities() {
  for (city of cities) {
    if (city.capital === 'primary') {
      text = `Capital City: ${city.city} \n Population: ${city.population} \n Country: ${city.country}`
      marker = L.marker([city.lat, city.lng]).addTo(map);
      marker.bindPopup(text)
      capitalCityMarkers.addLayer(marker)
    }
  }
}


//Marker Functions ------

//Add city info marker to city
function cityInfoMarker(city) {
  text = `Capital City: ${city.city} \n Population: ${city.population} \n Country: ${city.country}`
  marker = L.marker([city.lat, city.lng]).addTo(map);
  marker.bindPopup(text)
  allCityMarkers.addLayer(marker)
}

function oceanInfoMarker(lat, lng, ocean) {
  console.log(lat, lng, ocean['data']['name'])
  text = `ocean: ${ocean['data']['name']}`
  marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(text)
  oceanMarkers.addLayer(marker)
}

// //Add city info marker to city
// function cityInfoMarker(city) {
//   text = `Capital City: ${city.city} \n Population: ${city.population} \n Country: ${city.country}`
//   marker = L.marker([city.lat, city.lng]).addTo(map);
//   marker.bindPopup(text)
//   allCityMarkers.addLayer(marker)
// }


//marker display options
let markerOptions = {
  cityInfo: cityInfoMarker(city)
}
//sets default marker setting to cityInfo
let markerOption = markerOptions.cityInfo


// Leaflet Map ------

//Runs on every new view boundary to load correct markers
map.on('zoomend', function () {
  console.log(map.getZoom())

  //if map is zoomed in, show all city markers
  if (map.getZoom() > 6) {

    map.removeLayer(capitalCityMarkers);
    map.addLayer(allCityMarkers)

    //set variables for current view boundary
    let north = map.getBounds()._northEast.lat
    let east = map.getBounds()._northEast.lng
    let south = map.getBounds()._southWest.lat
    let west = map.getBounds()._southWest.lng

    //cycle through list of cities within view boundary to add marker to map
    for (city of cities) {
      if (city.lat < north && city.lat > south && city.lng < east && city.lng > west) {
        console.log(city.capital)
        markerOption(city)
      }
    }
  }

  //if map is zoomed out, show just capital city markers
  if (map.getZoom() <= 6) {
    map.removeLayer(allCityMarkers);
    map.addLayer(capitalCityMarkers)
  }
});



// --------------------- PHP CALLS ---------------------

$('#apiOneSubmit').click(function () {

  $.ajax({
    url: "php/getOceanInfo.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: $('#selectLat').val(),
      lng: $('#selectLng').val()
    },
    success: function (result) {

      console.log(JSON.stringify(result));

      oceanInfoMarker($('#selectLat').val(), $('#selectLng').val(), result)
      if (result.status.name == "ok") {
        $('#apiOneResultName').html(result['data']['name']);
      }

    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    }
  })
});

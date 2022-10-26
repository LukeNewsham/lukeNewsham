// --------------------- LEAFLET ---------------------



//Set leaflet map properties ------
const map = L.map('map').setView([20, 0], 5);

tiles = {
  alidade_smooth:
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      {
        // minZoom: 15,
        // maxZoom: 4,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    ),
  outdoors:
    L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
      {
        // minZoom: 15,
        // maxZoom: 4,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    ),
  Stadia_AlidadeSmoothDark:
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    })


}

tiles.outdoors.addTo(map);

var baseMaps = {
  "<span class='option'> Alidade Smooth </span>": tiles.alidade_smooth,
  "<span class='option'> Outdoors </span>": tiles.outdoors,
  "<span class='option'> Stadia_AlidadeSmoothDark </span>": tiles.Stadia_AlidadeSmoothDark
};


//Leaflet Layers ------
let capitalCityMarkers = new L.FeatureGroup();
map.addLayer(capitalCityMarkers);
let allCityMarkers = new L.FeatureGroup();
map.addLayer(allCityMarkers);

let overlayMaps = {
  // "<span class='option'> All Cities </span>": allCityMarkers,
  // "<span class='option'> Capital Cities </span>": capitalCityMarkers
};

var layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

//City Markers ------

//City info marker 
let cityInfoMarker = (city) => {
  text = `Capital City: ${city.city} \n Population: ${city.population} \n Country: ${city.country}`
  let infoIcon = L.divIcon({
    className: 'infoIcon',
    iconAnchor: [0, 0],
    html: `${city.country}`
  });
  marker = L.marker([city.lat, city.lng], { icon: infoIcon }).addTo(map);
  marker.bindPopup(text)
  return marker
}

//City astrology marker 
let cityAstroMarker = (city, dataOption) => {
  $.ajax({
    url: "php/getAstroInfo.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: city.lat,
      lng: city.lng
    },
    success: function (result) {
      if (result.status.name == "ok") {
        text = `Sunrise: ${result['data'][`sunrise`]} <br />
        Sunset: ${result['data']['sunset']} <br />
        Moonrise: ${result['data']['moonrise']} <br />
        Moonset: ${result['data']['moonrise']}`
        let astroIcon = L.divIcon({
          className: 'astroIcon',
          iconAnchor: [40, 40],
          html: `${city.city} <br /> ${result['data'][`${dataOption}`]}`
        });
        marker = L.marker([city.lat, city.lng], { icon: astroIcon }).addTo(map);
        marker.bindPopup(text)
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    }
  })
  return marker
}









//Functions ------------

//Add ocean info Marker
let oceanInfoMarker = (lat, lng, ocean) => {
  console.log(lat, lng, ocean['data']['name'])
  text = `ocean: ${ocean['data']['name']}`
  marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(text)
  oceanMarkers.addLayer(marker)
}


//function to reload map
function loadMap() {
  document.getElementById("loading").style.display = "block"

  function run() {
    console.log(map.getZoom())
    allCityMarkers.clearLayers()
    capitalCityMarkers.clearLayers()

    //set variables for current view boundary
    let north = map.getBounds()._northEast.lat
    let east = map.getBounds()._northEast.lng
    let south = map.getBounds()._southWest.lat
    let west = map.getBounds()._southWest.lng

    //if map is zoomed in, show all city markers
    if (map.getZoom() > 7) {

      //cycle through list of cities within view boundary to add marker to map
      for (city of cities) {
        if (city.lat < north && city.lat > south && city.lng < east && city.lng > west && city.capital !== 'minor') {
          console.log(city.capital)
          marker = markerOption(city, dataOption)
          allCityMarkers.addLayer(marker)
        }
      }

    }

    //if map is zoomed out, show just capital city markers
    if (map.getZoom() <= 7) {

      //cycle through list of cities within view boundary to add marker to map
      for (city of cities) {
        if (city.lat < north && city.lat > south && city.lng < east && city.lng > west && city.capital === 'primary') {
          console.log(city.capital)
          marker = markerOption(city, dataOption)
          capitalCityMarkers.addLayer(marker)
        }
      }
    }
    document.getElementById("loading").style.display = "none";
  }
  setTimeout(run, 1000)
}

//Change city marker
function changeMarkerOptions(marker, data) {
  markerOption = marker
  dataOption = data
  loadMap()
}







//First load settings -----------

//sets default marker setting
let markerOption = cityAstroMarker
//sets default dataOption setting
let dataOption = 'sunrise'
loadMap()



//Reload settings -----------

//Runs on every new view boundary to load correct markers
map.on('zoomend', async function () {
  loadMap()
});
map.on('moveend', async function () {
  loadMap()
});







// --------------------- PHP CALLS FOR NON CITY DATA ---------------------


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

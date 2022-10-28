



// --------------------- LEAFLET SETUP ---------------------



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

let baseMaps = {
  "<span class='option'> Alidade Smooth </span>": tiles.alidade_smooth,
  "<span class='option'> Outdoors </span>": tiles.outdoors,
  "<span class='option'> Stadia_AlidadeSmoothDark </span>": tiles.Stadia_AlidadeSmoothDark
};


//Leaflet Layers and features ------

let capitalCityMarkers = new L.FeatureGroup();
map.addLayer(capitalCityMarkers);
let allCityMarkers = new L.FeatureGroup();
map.addLayer(allCityMarkers);

let issIcon = L.icon({
  iconUrl: './images/internationalSpaceStation.png',
  iconSize: [50, 50],
  iconAnchor: [22, 94]
});

const markerIss = L.marker([0, 0], { icon: issIcon }).addTo(map);


let overlayMaps = {
  // "<span class='option'> All Cities </span>": allCityMarkers,
  // "<span class='option'> Capital Cities </span>": capitalCityMarkers
};


let layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

//Json Layer Group
let geoJsonLayerGroup = L.geoJson().addTo(map);
let myFeaturesMap = {};


//Function to add country borders -------

function getBorders(countries) {

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      layer.bindPopup(feature.properties.population);
    }
  }

  $.ajax({
    dataType: "json",
    url: "js/countryBorders.geo.json",
    success: function (borders) {

      $(borders.features).each(function (key, border) {


        //if there is a border for the current country, remove it
        if (myFeaturesMap[key]) {

          let deletedFeature = myFeaturesMap[key];
          delete myFeaturesMap[key];
          geoJsonLayerGroup.removeLayer(deletedFeature);
        };

        let newBorder = L.geoJson([border], { onEachFeature: onEachFeature });

        //if there is a list of countries, add those country borders
        if (countries) {

          countries.forEach(country => {
            if (country === border.properties.name) {
              myFeaturesMap[key] = newBorder;
              geoJsonLayerGroup.addLayer(newBorder);
            }
          })
        } else {
          myFeaturesMap[key] = newBorder;
          geoJsonLayerGroup.addLayer(newBorder);
        }
      });
    }
  }).error(function () { });
}



//Function to load global map markers



function loadMapMarkers() {     

  if (cityMarkerOption && !countryChosen) {
    console.log('Loading map markers')
    document.getElementById("loading").style.display = "block"

    function run() {

      allCityMarkers.clearLayers()
      capitalCityMarkers.clearLayers()

      //set variables for current view boundary
      let north = map.getBounds()._northEast.lat
      let east = map.getBounds()._northEast.lng
      let south = map.getBounds()._southWest.lat
      let west = map.getBounds()._southWest.lng
      //cycle through list of cities within view boundary to add marker to map
      for (city of cities) {
        if (city.lat < north && city.lat > south && city.lng < east && city.lng > west && map.getZoom() > 7 && city.capital !== 'minor') {
          marker = cityMarkerOption(city, dataOption)
          allCityMarkers.addLayer(marker)
          reload = true;
        };
        if (map.getZoom() <= 7 && city.capital === 'primary' && reload === true) {
          marker = cityMarkerOption(city, dataOption)
          capitalCityMarkers.addLayer(marker)
          reload = false;
        }
      }
      document.getElementById("loading").style.display = "none";
    }
    setTimeout(run, 1000)
  }
}


//Function to load country map markers
function loadCountryMarkers() {
  document.getElementById("loading").style.display = "block"
  function run() {
    
    console.log('Loading country markers')
    allCityMarkers.clearLayers()
    capitalCityMarkers.clearLayers()

    citiesInCountry = cities.filter(city => city.country === countryChosen && city.capital !== 'minor')
    console.log(citiesInCountry)

    for (city of citiesInCountry) {
      marker = cityMarkerOption(city, dataOption)
      allCityMarkers.addLayer(marker)
    }

    document.getElementById("loading").style.display = "none";
  }
  setTimeout(run, 1000)
}









// --------------------- LEAFLET DURING USE ---------------------






//First load SET UP -----------


//GLOBAL VARIABLES 
let cityMarkerOption = false;
let dataOption = 'city';
let reload = true;
let allBordersToggle = true;


loadMapMarkers()

//Sets default country border settings
// let countryBorderData = cityData
// getBorders(['Algeria'], countryBorderData)


//Reload settings -----------

map.on('zoomend', async function () {
  loadMapMarkers()
});
map.on('moveend', async function () {
  loadMapMarkers()
});


//Interval Updates 

issData();

setInterval(issData, 1000)
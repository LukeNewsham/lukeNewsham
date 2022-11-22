//---------------------------  LEAFLET SET UP  ---------------------------

//Includes the code to set up leaflet.js as well as initial default values when first loaded


//Initiate Map ----------------------------------------------------------------------------------

const map = L.map('map', { zoomControl: false }).setView([20, 0], 5);






//Leaflet tiles ----------------------------------------------------------------------------------

tiles = {
  alidade_smooth:
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    ),
  Stadia_AlidadeSmoothDark:
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    ),
  terrain_background:
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 18,
      ext: 'png'
    }),
  Thunderforest_Neighbourhood:
    L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=11116584bfb04f57863ad3cd3e3585eb', {
      attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    })


}

tiles.Thunderforest_Neighbourhood.addTo(map);

let baseMaps = {
  "<span class='option'> Default </span>": tiles.Thunderforest_Neighbourhood,
  "<span class='option'> Light Mode </span>": tiles.alidade_smooth,
  "<span class='option'> Dark Mode </span>": tiles.Stadia_AlidadeSmoothDark,
  "<span class='option'> Terrain Mode </span>": tiles.terrain_background
  
};

let layerControl = L.control.layers(baseMaps).addTo(map);







//Leaflet Features and Layers ----------------------------------------------------------------------------------

let lessCityMarkers = new L.FeatureGroup();
map.addLayer(lessCityMarkers);

let moreCityMarkers = new L.FeatureGroup();
map.addLayer(moreCityMarkers);
// map.removeLayer(moreCityMarkers)

let chosenCountryCityMarker = new L.FeatureGroup();
map.addLayer(chosenCountryCityMarker);

let cityPoiMarkers = new L.FeatureGroup();
map.addLayer(cityPoiMarkers);


let legend = L.control({ position: 'bottomright' });

let issIcon = L.icon({
  iconUrl: './images/internationalSpaceStationLight.png',
  iconSize: [50, 50],
  iconAnchor: [22, 94]
});

let liveLocationIcon = L.icon({
  iconUrl: './images/Navigate Icon.png',
  iconSize:     [30, 30],
  iconAnchor:   [15, 15]
});



let geoJsonLayerGroup = L.geoJson().addTo(map);
let allBordersLayerGroup = L.geoJson().addTo(map);
let userLocation = L.marker([0, 0], {icon: liveLocationIcon}).addTo(map);
let hoverCountryBorder = L.geoJson().addTo(map);


let markerIss = L.marker([0, 0], { icon: issIcon });


let globalWeatherResults = new L.FeatureGroup();
map.addLayer(globalWeatherResults);


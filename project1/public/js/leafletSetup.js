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
    })
}

tiles.alidade_smooth.addTo(map);

let baseMaps = {
  "<span class='option'> Alidade Smooth </span>": tiles.alidade_smooth,
  "<span class='option'> Stadia_AlidadeSmoothDark </span>": tiles.Stadia_AlidadeSmoothDark,
  "<span class='option'> terrain_background </span>": tiles.terrain_background
};

// let layerControl = L.control.layers(baseMaps).addTo(map);







//Leaflet Features and Layers ----------------------------------------------------------------------------------

let capitalCityMarkers = new L.FeatureGroup();
map.addLayer(capitalCityMarkers);

let lessCityMarkers = new L.FeatureGroup();
map.addLayer(lessCityMarkers);
map.removeLayer(lessCityMarkers);

let moreCityMarkers = new L.FeatureGroup();
map.addLayer(moreCityMarkers);
map.removeLayer(moreCityMarkers);

let chosenCountryCityMarker = new L.FeatureGroup();
map.addLayer(chosenCountryCityMarker);

let issIcon = L.icon({
  iconUrl: './images/internationalSpaceStationLight.png',
  iconSize: [50, 50],
  iconAnchor: [22, 94]
});



let geoJsonLayerGroup = L.geoJson().addTo(map);

let userLocation = L.marker([0, 0]).addTo(map);

let hoverCountryBorder = L.geoJson().addTo(map);


let markerIss = L.marker([0, 0], { icon: issIcon })

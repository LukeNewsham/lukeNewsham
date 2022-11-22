//---------------------------  SCRIPT  ---------------------------



let GLOBAL_mode = 'country';
let GLOBAL_countryChosen = false;
let GLOBAL_chosenCountryCities = []
let GLOBAL_cityChosen = '';
let GLOBAL_allBordersToggle = false;
let GLOBAL_lessCitiesLoaded = false;
let GLOBAL_moreCitiesLoaded = false;
let GLOBAL_countryCenterPoints = [];
let GLOBAL_markerOption = ''
let GLOBAL_poiOption = ''
let GLOBAL_ISS = false
let GLOBAL_zoomLevel = 0
let GLOBAL_updateZoom = false;
let GLOBAL_globalWeatherData = []

document.getElementById("loading").style.display = "block"
// $('#loadingText').html('Loading...');

function run() {
    findLocation(true)
    loadCountryList()
    getGlobalData()
    document.getElementById("loading").style.display = "none"
}

setTimeout(run, 1000)






setTimeout(function () {
    map.on('moveend', function () {
        updateMap()
    });
}, 2000)



//---------------------------  SCRIPT  ---------------------------



let GLOBAL_mode = 'country';
let GLOBAL_countryChosen = false;
let GLOBAL_chosenCountryCities = []
let GLOBAL_cityChosen = '';
let GLOBAL_allBordersToggle = false;
let GLOBAL_lessCitiesLoaded = false;
let GLOBAL_moreCitiesLoaded = false;
let GLOBAL_countryCenterPoints = [];




function run() {
    findLocation(true)
    getAllCountryCenters()
    loadCountryList()
}
setTimeout(run, 1000)




setTimeout(function () {
    map.on('zoomend', function () {
        updateMap()
    });
    map.on('moveend', function () {
        updateMap()
    });
}, 2000)



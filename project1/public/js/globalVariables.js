//GLOBAL VARIABLES 
let GLOBAL_borders = {};
let GLOBAL_positionLng = 0;
let GLOBAL_positionLat = 0;
let GLOBAL_issRun = true;
let GLOBAL_countryChosen = false;
let GLOBAL_allBordersToggle = false;
let GLOBAL_lessCitiesLoaded = false;
let GLOBAL_moreCitiesLoaded = false;
let GLOBAL_mode = 'country';
let GLOBAL_countryCenterPoints = [];
let GLOBAL_cityMarkerOption = function() {
  return false
};
let GLOBAL_cityDataOption = 'city';
let GLOBAL_chosenCountryCities = []
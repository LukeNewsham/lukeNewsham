//---------------------------  LISTENER FUNCTIONS  ---------------------------

//Includes listener functions which are triggers on user input









//Adds chosen country data ----------------------------------------------------------------------------------


$('#countriesList').change(function () {
  countryChosen = $('#countriesList')[0].value
  loadCountryData(countryChosen)
});






//Adds chosen city data ----------------------------------------------------------------------------------


$('#countryCitiesList').change(function () {

  $('#countryModeData').fadeOut();
  chosenCountryCityMarker.clearLayers()
  countryCity = GLOBAL_chosenCountryCities.filter(city => city.name === $('#countryCitiesList')[0].value)
  showCityData(countryCity[0])
  $('#countryModeData').fadeIn();
});








//Loads data for current location ----------------------------------------------------------------------------------

$('#findLocation, #findLocationMobile').click(function () {
  findLocation()
});






//Adds all borders ----------------------------------------------------------------------------------

$('#allBorders, #allBordersMobile').click(function () {
  toggleBorders()
});




//Search country from map ----------------------------------------------------------------------------------

$('#searchCenter').click(function () {
  let locationData = getCountryFromPointPHP([map.getCenter().lat, map.getCenter().lng])
  let locationCountry = locationData.country
  loadCountryData(locationCountry);
});






//Add and Remove ISS Space Station ----------------------------------------------------------------------------------

$('#getISS').click(function () {
  chosenCountryCityMarker.clearLayers()
  lessCityMarkers.clearLayers()
  issDataMarker(true)
});


$('#stopISS').click(function () {
  map.removeLayer(markerIss)
});



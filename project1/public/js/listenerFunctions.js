//---------------------------  LISTENER FUNCTIONS  ---------------------------

//Includes listener functions which are triggers on user input





//Clear search fields ----------------------------------------------------------------------------------

$('#clearCountryButton').click(function () {
  $('#selectCountry').val('')
});

$('#clearCityButton').click(function () {
  $('#selectCity').val('')
});







//Adds chosen country data ----------------------------------------------------------------------------------

$('#selectCountryButton').click(function () {
  GLOBAL_issRun = false;
  countryChosen = $('#selectCountry').val();
  showCountryData(countryChosen)
});





//Adds chosen city data ----------------------------------------------------------------------------------

$('#selectCityButton').click(function () {
  $('#countryModeData').fadeOut();
  GLOBAL_issRun = false;
  chosenCountryCityMarker.clearLayers()
  $('#countryModeData').hide();
  countryCity = cities.filter(city => city.city === $('#selectCity').val())[0]
  showCityData(countryCity)
  $('#countryModeData').fadeIn();
});






//Loads data for current location ----------------------------------------------------------------------------------

$('#findLocation, #findLocationMobile').click(function () {
  GLOBAL_issRun = false;
  findLocation()
});






//Adds all borders ----------------------------------------------------------------------------------

$('#allBorders, #allBordersMobile').click(function () {
  allBorders()
});






//Add and Remove ISS Space Station ----------------------------------------------------------------------------------

$('#getISS').click(function () {
  chosenCountryCityMarker.clearLayers()
  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()
  GLOBAL_issRun = true;
  issDataMarker(true)
});


$('#stopISS').click(function () {
  GLOBAL_issRun = false;
  map.removeLayer(markerIss)

});



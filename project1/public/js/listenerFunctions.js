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

$('#selectCountry').change(function () {
  GLOBAL_issRun = false;
  countryChosen = $('#selectCountry').val();
  showCountryData(countryChosen)
});






//Adds chosen city data ----------------------------------------------------------------------------------

$('#selectCityButton').click(function () {

  $('#countryModeData').fadeOut();
  GLOBAL_issRun = false;
  chosenCountryCityMarker.clearLayers()

  countryCity = GLOBAL_chosenCountryCities.filter(city => city.name === $('#selectCity').val())[0]

  showCityData(countryCity)
  $('#countryModeData').fadeIn();
});



$('#selectCity').change(function () {

  $('#countryModeData').fadeOut();
  GLOBAL_issRun = false;
  chosenCountryCityMarker.clearLayers()

  countryCity = GLOBAL_chosenCountryCities.filter(city => city.name === $('#selectCity').val())[0]

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




//Search country from map ----------------------------------------------------------------------------------

$('#searchCenter').click(function () {
  searchCenter(map.getCenter().lat, map.getCenter().lng)
});






//Add and Remove ISS Space Station ----------------------------------------------------------------------------------

$('#getISS').click(function () {
  chosenCountryCityMarker.clearLayers()
  lessCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()
  GLOBAL_issRun = true;
  issDataMarker(true)
});


$('#stopISS').click(function () {
  GLOBAL_issRun = false;
  map.removeLayer(markerIss)

});



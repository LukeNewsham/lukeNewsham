//---------------------------  LISTENER FUNCTIONS  ---------------------------

//Includes listener functions which are triggers on user input





//Updates weather buttons depending on what was pressed
$('#temperatureCountryButton').click(function () {
  updateMapWeatherData('.tempResult', '#temperatureCountryButton')
});
$('#humidityCountryButton').click(function () {
  updateMapWeatherData('.humidityResult', '#humidityCountryButton')
});
$('#pressureCountryButton').click(function () {
  updateMapWeatherData('.pressureResult', '#pressureCountryButton')
});
$('#cloudsCountryButton').click(function () {
  updateMapWeatherData('.cloudsResult', '#cloudsCountryButton')
});
$('#windCountryButton').click(function () {
  updateMapWeatherData('.windResult', '#windCountryButton')
});



//Updates POI buttons depending on what was pressed
$('#sightseeingPoiButton').click(function () {
  loadCityPois(GLOBAL_cityChosen.name, `sightseeing`, true)
  cityPoiTabOpen()
});
$('#eatingoutPoiButton').click(function () {
  loadCityPois(GLOBAL_cityChosen.name, `eatingout`, true)
  cityPoiTabOpen()
});
$('#shoppingPoiButton').click(function () {
  loadCityPois(GLOBAL_cityChosen.name, `shopping`, true)
  cityPoiTabOpen()
});
$('#doPoiButton').click(function () {
  loadCityPois(GLOBAL_cityChosen.name, `do`, true)
  cityPoiTabOpen()
});



//Adds chosen country data ----------------------------------------------------------------------------------


$('#countriesList').change(function () {
  countryChosen = $('#countriesList')[0].value
  loadCountryData(countryChosen)
});






//Adds chosen city data ----------------------------------------------------------------------------------


$('#countryCitiesList').change(function () {

  $('#countryModeData').fadeOut();
  chosenCountryCityMarker.clearLayers()
  console.log(GLOBAL_Cities)
  console.log($('#countryCitiesList')[0].value)
  countryCity = GLOBAL_Cities.filter(city => city.name === $('#countryCitiesList')[0].value)
  console.log(countryCity)
  loadCityData(countryCity[0], true)
  $('#countryModeData').fadeIn();
});








//Relocates to current location ----------------------------------------------------------------------------------

$('#findLocation, #findLocationMobile').click(function () {
  relocate('live')
  console.log(GLOBAL_globalWeatherData)
});








//Relocate to chosen city ----------------------------------------------------------------------------------

$('#locateCity, #locateCityButton').click(function () {
  relocate('city')
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
  GLOBAL_ISS = true
  loadISSLocation()
});


$('#stopISS').click(function () {
  GLOBAL_ISS = false
  map.removeLayer(markerIss)
});





//Adds chosen poi data ----------------------------------------------------------------------------------


$('#poiList').change(function () {
  let poiChosen = $('#poiList')[0].value
  console.log(GLOBAL_cityChosen, poiChosen)
  loadCityPois(GLOBAL_cityChosen.name, poiChosen, true)
});





//Shows more country data ----------------------------------------------------------------------------------

let moreCountryDataToggle = false;

$('#moreCountryData').click(function () {
  console.log(moreCountryDataToggle)
  if (!moreCountryDataToggle) {
    $("#countryData").animate({ height: '20rem' })
    $("#moreCountryData").html('Show less')
    moreCountryDataToggle = true
  } else {
    $("#countryData").animate({ height: '0rem' })
    $("#moreCountryData").html('Show more')
    moreCountryDataToggle = false
  }


});









$('#loadGlobalData').click(function () {
  loadGlobalData('temperature')
});










$('#globalWeatherList').change(function () {
  let weatherChosen = $('#globalWeatherList')[0].value
  loadGlobalData(weatherChosen)
});
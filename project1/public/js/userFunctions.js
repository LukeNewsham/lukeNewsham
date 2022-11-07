//Function to change marker data -----------------------

function changeCityMarkers(marker, data) {
  GLOBAL_issRun = false;
  cityMarkerOption = marker;
  dataOption = data;
  countryChosen = false;
  loadMapMarkers()
  // loadCountryMarkers()
}





//Function to toggle all borders -----------------------

function allBorders() {
  if (allBordersToggle) {
    getBorders()
  } else {
    getBorders([$('#selectCountry').val()])
  }
  allBordersToggle = !allBordersToggle
}






//Function to get iss -----------------------
$('#getISS').click(function () {
  chosenCountryCityMarker.clearLayers()
  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()

  changeCityMarkers(false, false)
  GLOBAL_issRun = true;
  issData(true)
});

//Function to stop iss -----------------------
$('#stopISS').click(function () {
  GLOBAL_issRun = false;
});





//Function to clear country -----------------------
$('#clearCountryButton').click(function () {
  $('#selectCountry').val('')
});

//Function to clear city -----------------------
$('#clearCityButton').click(function () {
  $('#selectCity').val('')
});




//Function to get country city data -----------------------
$('#selectCityButton').click(function () {
  GLOBAL_issRun = false;
  $('#countryModeData').hide();
  countryCity = cities.filter(city => city.city === $('#selectCity').val())[0]
  chosenCountryCityMarker.clearLayers()
  map.setView([countryCity.lat, countryCity.lng], 5)
  marker = cityData(countryCity, 'city')
  chosenCountryCityMarker.addLayer(marker)
  getCityAstroData(countryCity);
  getCityWeatherData(countryCity);
  $('#chosenCity').html(countryCity.city);
  $('#countryModeData').fadeIn();
});




//Function to get and show country data  -----------------------
function showCountryData(countryChosen) {
  GLOBAL_issRun = false;

  let phpCountryChosen = countryChosen.replace(" ", "%20");
  getCountryData(phpCountryChosen)  
  
  loadCountryCityList(countryChosen)


  let capitalCity = ''

  //Run through geoJson data to find current country and add markers
  citiesInCountry = cities.filter(city => city.country === countryChosen)

  citiesInCountry.forEach(city => {
    if (city.capital === 'primary') {
      capitalCity = city
    }
  });

  $('#countryModeData').hide();

  chosenCountryCityMarker.clearLayers()
  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()

  changeCityMarkers(false, false)

  console.log(capitalCity)

  map.setView([capitalCity.lat, capitalCity.lng], 5)
  marker = cityData(capitalCity, 'city')
  chosenCountryCityMarker.addLayer(marker)
  

  //Add border for chosen country
  getBorders([countryChosen])
  $('#selectCity').show();
  $('#selectCityButton').show();


  $('#chosenCountry').html(countryChosen);

  $('#chosenCity').html(capitalCity.city);
  //Add astrology data for capital city by default to country mode div
  getCityAstroData(capitalCity)

  getCityWeatherData(capitalCity)  

  $('#countryModeData').fadeIn();
}


//Function to show current location with country information -----------------------
$('#selectCountryButton').click(function () {
  GLOBAL_issRun = false;
  countryChosen = $('#selectCountry').val();
  showCountryData(countryChosen)  
  
});

//Function to show current location with country information -----------------------
$('#findLocation').click(function () {
  GLOBAL_issRun = false;
  findLocation()  
});




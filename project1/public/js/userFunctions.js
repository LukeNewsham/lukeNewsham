//Function to change marker data -----------------------

function changeCityMarkers(marker, data) {
  cityMarkerOption = marker;
  dataOption = data;
  loadMapMarkers()
  loadCountryMarkers()
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






//Function to create an ocean marker -----------------------
$('#getISS').click(function () {
  issData(true)
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
  console.log(countryChosen)

  let phpCountryChosen = countryChosen.replace(" ", "%20");
  getCountryData(phpCountryChosen)  
  
  loadCountryCityList(countryChosen)


  let capitalCity = ''

  //Run through geoJson data to find current country and add markers
  citiesInCountry = cities.filter(city => city.country === countryChosen)
  console.log(citiesInCountry)

  citiesInCountry.forEach(city => {
    if (city.capital === 'primary') {
      capitalCity = city
    }
  });

  $('#countryModeData').hide();

  chosenCountryCityMarker.clearLayers()
  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()

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
  countryChosen = $('#selectCountry').val();
  showCountryData(countryChosen)  
  
});

//Function to show current location with country information -----------------------
$('#findLocation').click(function () {
  findLocation()  
});




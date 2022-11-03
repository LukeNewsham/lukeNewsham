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





//Function to create an ocean marker -----------------------
$('#ocean').click(function () {
  oceanData({
    lat: $('#selectLat').val(),
    lng: $('#selectLng').val()
  }
  )
});




//Function to clear fields -----------------------
$('#clearCountryButton').click(function () {
  $('#selectCountry').val('')
  $('#selectCity').val('')
});





//Function to get country city data -----------------------
$('#selectCityButton').click(function () {
  countryCity = cities.filter(city => city.city === $('#selectCity').val())[0]
  chosenCountryCityMarker.clearLayers()
  map.setView([countryCity.lat, countryCity.lng], 5)
  marker = cityData(countryCity, 'city')
  chosenCountryCityMarker.addLayer(marker)
  getCityAstroData(countryCity);
  getCityWeatherData(countryCity)
});





//Function to show current location with country information -----------------------
$('#selectCountryButton').click(function () {

  countryChosen = $('#selectCountry').val();
  loadCountryCityList(countryChosen)
  let capitalCity = ''

  //Run through geoJson data to find current country and add markers
  citiesInCountry = cities.filter(city => city.country === $('#selectCountry').val())

  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()


  citiesInCountry.forEach(city => {
    if (city.capital === 'primary') {
      chosenCountryCityMarker.clearLayers()
      map.setView([city.lat, city.lng], 5)
      marker = cityData(city, 'city')
      chosenCountryCityMarker.addLayer(marker)
      capitalCity = city
    }
  });
  console.log(capitalCity)

  //Add border for chosen country
  getBorders([$('#selectCountry').val()])

  $('#chosenCountry').html($('#selectCountry').val());

  $('#chosenCity').html(capitalCity.city);
  //Add astrology data for capital city by default to country mode div
  getCityAstroData(capitalCity)

  getCityWeatherData(capitalCity)
});




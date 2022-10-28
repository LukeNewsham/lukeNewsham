//Function to change marker data

function changeCityMarkers(marker, data) {
  cityMarkerOption = marker;
  dataOption = data;
  loadMapMarkers()
  loadCountryMarkers()
}


//Function to toggle all borders

function allBorders() {
  if (allBordersToggle) {
    getBorders()    
  } else {
    getBorders([$('#selectCountry').val()])
  }
  allBordersToggle = !allBordersToggle
}



//Function to create an ocean marker
$('#getISS').click(function () {
  issData(true)
});

//Function to create an ocean marker
$('#ocean').click(function () {
  oceanData({
    lat: $('#selectLat').val(),
    lng: $('#selectLng').val()
  }
  )
});




//Function to show current location with country infomation
$('#selectCountryButton').click(function () {
  console.log($('#selectCountry').val())

  // allBordersToggle = true;

  countryChosen = $('#selectCountry').val();

  // lat = 51.5072
  // lng = -0.1275

  //Run through geoJson data to find current country 

  citiesInCountry = cities.filter(city => city.country === $('#selectCountry').val())
  console.log(citiesInCountry)

  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()

  citiesInCountry.forEach(city => {

    if (city.capital !== 'minor') {
      marker = cityData(city, 'city')
      allCityMarkers.addLayer(marker)
    }

    if (city.capital === 'primary') {
      map.setView([city.lat, city.lng], 5)
    }

  });

  // country = false
  // 
  //Get data for city co ords

  //clear all other boundrys

  getBorders([$('#selectCountry').val()])

});
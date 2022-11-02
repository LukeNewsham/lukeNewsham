let countryShown = false;
let astrologyShown = false;
let weatherShown = false;

function countryModeClose() { countryShown = false; return $("#countryMode").animate({ left: '-20rem', }); }
function weatherModeClose() { weatherShown = false; return $("#weatherMode").animate({ right: '-20rem', }); }
function astrologyModeClose() { astrologyShown = false; return $("#astrologyMode").animate({ top: '-20rem', }); }

function countryModeOpen() { countryShown = true; return $("#countryMode").animate({ left: '2rem', }); }
function weatherModeOpen() { weatherShown = true; return $("#weatherMode").animate({ right: '2rem', }); }
function astrologyModeOpen() { astrologyShown = true; return $("#astrologyMode").animate({ top: '0rem', }); }



$("#countryModeButton").click(function () {
  map.removeLayer(tiles.outdoors)
  map.removeLayer(tiles.Stadia_AlidadeSmoothDark)
  tiles.alidade_smooth.addTo(map);
  if (!countryShown) {
    countryModeOpen()
    weatherModeClose()
    astrologyModeClose()
  } else {
    countryModeClose()
  }
});


$("#weatherModeButton").click(function () {
  map.removeLayer(tiles.alidade_smooth)
  map.removeLayer(tiles.Stadia_AlidadeSmoothDark)
  tiles.outdoors.addTo(map);

  if (!weatherShown) {
    weatherModeOpen()
    countryModeClose()
    astrologyModeClose()
  } else {
    weatherModeClose()
  }
});


$("#astrologyModeButton").click(function () {
  map.removeLayer(tiles.outdoors)
  map.removeLayer(tiles.alidade_smooth)
  tiles.Stadia_AlidadeSmoothDark.addTo(map);

  if (!astrologyShown) {
    astrologyModeOpen()
    countryModeClose()
    weatherModeClose()
  } else {
    astrologyModeClose()
  }
});



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
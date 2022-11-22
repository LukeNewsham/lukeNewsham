//---------------------------  ANIMATIONS  ---------------------------

//Includes animation functions and listener functions for html changes





let expandMode = false;

$(".expandButton").click(function () {
  if (!expandMode) {
    $("#countryMode").animate({ width: '40rem', height: '90vh' });
    expandMode = true
  } else {
    $("#countryMode").animate({ width: '20rem', height: '35rem' });
    expandMode = false
  }
});


let expandMobileMode = false;

$(".upDownButton").click(function () {
  if (!expandMobileMode) {
    $("#countryMode").animate({ top: '0rem', height: '100vh' });
    $("#weatherMode").animate({ top: '0rem', height: '100vh' });
    expandMobileMode = true
  } else {
    $("#countryMode").animate({ top: '50vh', height: '50vh' });
    $("#weatherMode").animate({ top: '50vh', height: '50vh' });
    expandMobileMode = false
  }
});








//Changes which mode is displayed on screen from button presses ----------------------------------------------------------------------------------

//sets default to false
let countryShown = false;
let astrologyShown = false;
let weatherShown = false;

//functions to open and close mode panels
function countryModeOpen() { countryShown = true; $("#countryMode").animate({ left: '+=50rem', }); $("#countryModeButton").css('opacity', '100%') }
function weatherModeOpen() { weatherShown = true; $("#weatherMode").animate({ right: '+=50rem', }); $("#globalModeButton").css('opacity', '100%') }

function countryModeClose() { countryShown = false; $("#countryMode").animate({ left: '-50rem' }); $("#countryModeButton").css('opacity', '50%') }
function weatherModeClose() { weatherShown = false; $("#weatherMode").animate({ right: '-50rem' }); $("#globalModeButton").css('opacity', '50%') }


function hideHoverButtons() { $("#searchCenter").css('display', 'none'); $("#zoomIn").css('display', 'none'); }
function showHoverButtons() { $("#searchCenter").css('display', 'flex'); }


//Listener Functions
$("#countryModeButton").click(function () {
  document.getElementById("centerReticle").style.display = "flex"
  document.getElementById("weatherButtons").style.display = "flex"
  document.getElementById("countrySearch").style.display = "flex"

  GLOBAL_mode = 'country';
  map.addLayer(chosenCountryCityMarker)
  map.addLayer(lessCityMarkers)
  map.addLayer(hoverCountryBorder)
  map.addLayer(geoJsonLayerGroup)
  map.addLayer(cityPoiMarkers)

  map.removeLayer(globalWeatherResults)
  legend.remove()

  map.removeLayer(tiles.alidade_smooth)
  map.removeLayer(tiles.Stadia_AlidadeSmoothDark)
  map.removeLayer(tiles.Thunderforest_Neighbourhood)
  tiles.Thunderforest_Neighbourhood.addTo(map);

  showHoverButtons()

  GLOBAL_ISS = false
  map.removeLayer(markerIss)

  if (!countryShown) {
    countryModeOpen()
    weatherModeClose()
  } else {
    countryModeClose()
  }
});

let firstOpen = true
$("#globalModeButton").click(function () {

  map.setView([GLOBAL_cityChosen.coordinates.latitude, GLOBAL_cityChosen.coordinates.longitude], 3)

  loadGlobalData('temperature')

  document.getElementById("centerReticle").style.display = "none"
  document.getElementById("weatherButtons").style.display = "none"
  document.getElementById("countrySearch").style.display = "none"

  GLOBAL_mode = 'globe';
  map.removeLayer(lessCityMarkers)
  map.removeLayer(moreCityMarkers)
  map.removeLayer(geoJsonLayerGroup)
  map.removeLayer(hoverCountryBorder)
  map.removeLayer(chosenCountryCityMarker)
  map.removeLayer(cityPoiMarkers)

  map.addLayer(globalWeatherResults)
  // map.addLayer(legend)

  map.removeLayer(tiles.alidade_smooth)
  map.removeLayer(tiles.Stadia_AlidadeSmoothDark)
  map.removeLayer(tiles.Thunderforest_Neighbourhood)
  tiles.alidade_smooth.addTo(map);

  hideHoverButtons()

  if (!weatherShown) {
    weatherModeOpen()
    countryModeClose()
  } else {
    weatherModeClose()
  }
});



function cityPoiTabOpen() {
  $("#cityData").css('display', 'none')
  $("#cityPois").css('display', 'flex')
  $("#cityPoisTab").css('background-color', 'white')
  $("#cityDataTab").css('background-color', 'transparent')
}

function cityDataTabOpen() {
  $("#cityPois").css('display', 'none')
  $("#cityData").css('display', 'flex')
  $("#cityDataTab").css('background-color', 'white')
  $("#cityPoisTab").css('background-color', 'transparent')
}



//Changes tab for country panel ----------------------------------------------------------------------------------


$("#cityDataTab").click(function () {
  cityDataTabOpen()
});

$("#cityPoisTab").click(function () {
  cityPoiTabOpen()
});

//Changes tab for global panel ----------------------------------------------------------------------------------

$("#issTab").click(function () {
  $("#globalWeather").css('display', 'none')
  $("#iss").css('display', 'flex')
  $("#issTab").css('background-color', 'white')
  $("#globalWeatherTab").css('background-color', 'transparent')
});

$("#globalWeatherTab").click(function () {
  $("#iss").css('display', 'none')
  $("#globalWeather").css('display', 'flex')
  $("#globalWeatherTab").css('background-color', 'white')
  $("#issTab").css('background-color', 'transparent')
});
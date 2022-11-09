//---------------------------  ANIMATIONS  ---------------------------

//Includes animation functions and listener functions for html changes







//Changes which mode is displayed on screen from button presses ----------------------------------------------------------------------------------

//sets default to false
let countryShown = false;
let astrologyShown = false;
let weatherShown = false;

//functions to open and close mode panels
function countryModeOpen() { countryShown = true; $("#countryMode").animate({ left: '+=30rem', }); $("#countryModeButton").css('opacity', '100%') }
function weatherModeOpen() { weatherShown = true; $("#weatherMode").animate({ right: '+=30rem', });$("#weatherModeButton").css('opacity', '100%') }
function astrologyModeOpen() { astrologyShown = true; $("#buttonPanel").animate({ height: '15rem', backgroundColor: 'grey'}); $("#astrologyModeButton").css('opacity', '100%'); $("#astrologyMode").fadeIn(); $(".centerTop").fadeOut() }

function countryModeClose() { countryShown = false; $("#countryMode").animate({ left: '-30rem' }); $("#countryModeButton").css('opacity', '50%') }
function weatherModeClose() { weatherShown = false; $("#weatherMode").animate({ right: '-30rem' }); $("#weatherModeButton").css('opacity', '50%') }
function astrologyModeClose() { astrologyShown = false; $("#buttonPanel").animate({ height: '3.5rem'}); $("#astrologyModeButton").css('opacity', '50%');$("#astrologyMode").fadeOut(); $(".centerTop").fadeIn()}

//Listener Functions
$("#countryModeButton").click(function () {
  map.removeLayer(tiles.terrain_background)
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
  tiles.terrain_background.addTo(map);
  if (!weatherShown) {
    weatherModeOpen()
    countryModeClose()
    astrologyModeClose()
  } else {
    weatherModeClose()
  }
});


$("#astrologyModeButton").click(function () {
  map.removeLayer(tiles.terrain_background)
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



//Changes country city for country mode panel ----------------------------------------------------------------------------------


$("#allCitiesTab").click(function () {
  $("#cityData").css('display', 'none')
  $("#cityMarkers").css('display', 'flex')
  $("#allCitiesTab").css('background-color', 'rgb(240, 240, 240)')
  $("#selectCityTab").css('background-color', 'white')
});

$("#selectCityTab").click(function () {
  $("#cityMarkers").css('display', 'none')
  $("#cityData").css('display', 'flex')
  $("#selectCityTab").css('background-color', 'rgb(240, 240, 240)')
  $("#allCitiesTab").css('background-color', 'white')
});
let countryShown = false;
let astrologyShown = false;
let weatherShown = false;

function countryModeClose() { countryShown = false; $("#countryMode").animate({ left: '-23rem' }); $("#countryModeButton").css('opacity', '50%') }
function weatherModeClose() { weatherShown = false; $("#weatherMode").animate({ right: '-23rem' }); $("#weatherModeButton").css('opacity', '50%') }
function astrologyModeClose() { astrologyShown = false; $("#buttonPanel").animate({ height: '4.5rem' }); $("#astrologyModeButton").css('opacity', '50%');$("#astrologyMode").fadeOut();}

function countryModeOpen() { countryShown = true; $("#countryMode").animate({ left: '+=25rem', }); $("#countryModeButton").css('opacity', '100%') }
function weatherModeOpen() { weatherShown = true; $("#weatherMode").animate({ right: '+=25rem', });$("#weatherModeButton").css('opacity', '100%') }
function astrologyModeOpen() { astrologyShown = true; $("#buttonPanel").animate({ height: '12rem' });$("#astrologyModeButton").css('opacity', '100%'); $("#astrologyMode").fadeIn(); }



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
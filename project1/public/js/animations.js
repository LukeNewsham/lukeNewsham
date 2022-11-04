let countryShown = false;
let astrologyShown = false;
let weatherShown = false;

function countryModeClose() { countryShown = false; $("#countryMode").animate({ left: '-=20rem' }); $("#countryModeButton").css('opacity', '50%') }
function weatherModeClose() { weatherShown = false; $("#weatherMode").animate({ right: '-20rem' }); $("#weatherModeButton").css('opacity', '50%') }
function astrologyModeClose() { astrologyShown = false; $("#astrologyMode").animate({ top: '-20rem' }); $("#astrologyModeButton").css('opacity', '50%')}

function countryModeOpen() { countryShown = true; $("#countryMode").animate({ left: '+=20rem', }); $("#countryModeButton").css('opacity', '100%') }
function weatherModeOpen() { weatherShown = true; $("#weatherMode").animate({ right: '+2rem', });$("#weatherModeButton").css('opacity', '100%') }
function astrologyModeOpen() { astrologyShown = true; $("#astrologyMode").animate({ top: '0rem', });$("#astrologyModeButton").css('opacity', '100%') }



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
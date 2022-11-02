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
  tiles.Stadia_AlidadeSmoothDark.addTo(map);

  if (!astrologyShown) {
    astrologyModeOpen()
    countryModeClose()
    weatherModeClose()
  } else {
    astrologyModeClose()
  }
});
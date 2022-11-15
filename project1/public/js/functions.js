//---------------------------  FUNCTIONS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions







//Finds users location and adds data for country in ----------------------------------------------------------------------------------

function findLocation() {

  //adds loading screen
  document.getElementById("loading").style.display = "block"
  $('#loadingText').html('Finding user location...');

  function run() {

    //if the user allows access to geolocation
    if ('geolocation' in navigator) {

      //sets global variables to location, moves view and updates userLocation marker
      navigator.geolocation.getCurrentPosition(position => {
        GLOBAL_positionLat = position.coords.latitude
        GLOBAL_positionLng = position.coords.longitude
        map.setView([GLOBAL_positionLat, GLOBAL_positionLng], 4)
        userLocation.setLatLng([GLOBAL_positionLat, GLOBAL_positionLng])

        //finds country user is in from lat and lng and loads country data 
        let locationData = getCountryFromPoint([GLOBAL_positionLat, GLOBAL_positionLng])
        let locationCountry = locationData.country
        showCountryData(locationCountry);

      })
    }

    //if the user does not access to geolocation
    else {
      //sets default country and loads country data
      let countryChosen = 'United Kingdom'
      showCountryData(countryChosen);
    }

    //removes loading screen
    document.getElementById("loading").style.display = "none";


  }

  //runs function after 1000ms to allow time for dom to update loading screen
  setTimeout(run, 1000)

  map.removeLayer(lessCityMarkers);
  map.removeLayer(moreCityMarkers);

 


}






//Adds chosen city data to countryMode div and city marker to map ----------------------------------------------------------------------------------

function showCityData(city) {
  $('#snippet').html(city.snippet);
  $('#cityDescription').html(city.generated_intro);

  $('#cityImage').attr('src', `${city.images[0].sizes.medium.url}`)
  $('#cityImageCaption').html(city.images[0].caption);


  map.setView([city.coordinates.latitude, city.coordinates.longitude], 5)
  marker = weatherDataMarker(city, 'temp')
  chosenCountryCityMarker.addLayer(marker)
  $('#chosenCity').html(city.name);
  getCityAstroData(city)
  getCityWeatherData(city)

  $('#selectCity').val('')

}












//Adds country city list to city dataset ----------------------------------------------------------------------------------

function loadCountryCitiesList(country) {


  let cityList = [];
  let select = document.getElementById("countryCitiesList");
  let option = '';
  select.innerHTML = '0';


  //sets global variable to cities
  for (element of countryIsoCodes) {
    if (element.Name === country) {
      let isoCode = element.Code
      if (element.Code === 'GB') {
        isoCode = 'UK'
      }
      cityList = getCountryCities(isoCode, 50)
      GLOBAL_chosenCountryCities = cityList
    }
  }

  //updates search bar to cities
  for (var i = 0; i < cityList.length; i++) {
    option = cityList[i];
    let element = document.createElement("option");
    element.textContent = option.name;
    element.value = option.name;
    select.appendChild(element);

  }
}










//Adds chosen country data to countryMode div and capital city marker to map ----------------------------------------------------------------------------------
function showCountryData(countryChosen) {

  document.getElementById("loading").style.display = "block"
  $('#loadingText').html('Getting country data...');





  function run() {
    //Hides div while updating data
    $('#countryMode').fadeOut();



    //Updates global variables and resets map layers
    GLOBAL_countryChosen = countryChosen;
    GLOBAL_issRun = false;

    chosenCountryCityMarker.clearLayers()
    lessCityMarkers.clearLayers()
    moreCityMarkers.clearLayers()
    GLOBAL_lessCitiesLoaded = false;
    GLOBAL_moreCitiesLoaded = false;

    //Loads data from country name
    loadCountryCitiesList(countryChosen)

    getBorders(countryChosen, true, 'selected')
    let phpCountryChosen = countryChosen.replace(" ", "%20");
    getCountryData(phpCountryChosen)
    $('#chosenCountry').html(countryChosen);

    capitalCity = GLOBAL_chosenCountryCities[0]

    showCityData(capitalCity)

    document.getElementById("loading").style.display = "none"

    $('#countryMode').fadeIn();
  }

  //runs function after 1000ms to allow time for dom to update loading screen
  setTimeout(run, 1000)

  $('#selectCountry').val('')


}










//Add country map markers ----------------------------------------------------------------------------------

function addCountryMarkers(marker, data, relocate, amount, reset) {



  $(`#temperatureCountryButton`).css({ 'font-weight': '400' })
  $(`#windSpeedCountryButton`).css({ 'font-weight': '400' })
  $(`#humidityCountryButton`).css({ 'font-weight': '400' })
  $(`#dewPointCountryButton`).css({ 'font-weight': '400' })


  $(`#sunriseCountryButton`).css({ 'font-weight': '400' })
  $(`#sunsetCountryButton`).css({ 'font-weight': '400' })
  $(`#moonsetCountryButton`).css({ 'font-weight': '400' })
  $(`#moonriseCountryButton`).css({ 'font-weight': '400' })
  $(`#day_lengthCountryButton`).css({ 'font-weight': '400' })




  GLOBAL_issRun = false;
  GLOBAL_cityMarkerOption = marker;
  GLOBAL_cityDataOption = data;
  loadCountryMarkers(relocate, amount, reset)
  $(`#${data}CountryButton`).css({ 'font-weight': 'bolder' })
  $(`#cityDataSelected`).html(` ${data}`)
}



function getAllCountryCenters() {

  $.ajax({
    dataType: "json",
    url: "js/countryBorders.geo.json",
    success: function (borders) {


      $(borders.features).each(function (key, border) {

        let country = border.properties.name

        let centerPoint = L.geoJson(border).getBounds().getCenter()
        GLOBAL_countryCenterPoints.push({ country, centerPoint, border })
      })

    }
  }).error(function () {
    console.log('Error')
  });


}



function getChoroplethBorders(data, dataOption) {

  //clear previous borders
  globalCountryBorders.clearLayers()
  weatherModeClose()

  document.getElementById("loading").style.display = "block";
  $('#loadingText').html('Getting data for countries...');

  $(`#temperatureGlobalButton`).css({ 'font-weight': '400' })
  $(`#windSpeedGlobalButton`).css({ 'font-weight': '400' })
  $(`#humidityGlobalButton`).css({ 'font-weight': '400' })
  $(`#dewPointGlobalButton`).css({ 'font-weight': '400' })


  $(`#sunriseGlobalButton`).css({ 'font-weight': '400' })
  $(`#sunsetGlobalButton`).css({ 'font-weight': '400' })
  $(`#moonsetGlobalButton`).css({ 'font-weight': '400' })
  $(`#moonriseGlobalButton`).css({ 'font-weight': '400' })
  $(`#day_lengthGlobalButton`).css({ 'font-weight': '400' })

  $(`#${dataOption}GlobalButton`).css({ 'font-weight': 'bolder' })

  let count = 0

  function run() {

    let high = 0;
    let low = 0
    let results = [];
    let firstSet = true

    //for each country, get API data and push results into results. Update High and Low
    for (countryData of GLOBAL_countryCenterPoints) {


      //different api calls depending on data
      if (data === 'population') {
        let apiData = getPopulationChoroplethData(countryData.country)
        result = [countryData, apiData]
      }
      if (data === 'weather') {
        let apiData = getWeatherChoroplethData(countryData.centerPoint, dataOption)
        result = [countryData, apiData]
      }
      if (data === 'astrology') {
        let apiData = getAstrologyChoroplethData(countryData.centerPoint, dataOption)
        result = [countryData, apiData]

      }

      if (firstSet) {
        high = parseInt(result[1]);
        low = parseInt(result[1])
        firstSet = false
      }

      if (result[1].length === undefined || typeof result[1] === 'string') {
        results.push(result)

        if (parseInt(result[1]) > high) {


          high = parseInt(result[1])
        }
        if (parseInt(result[1]) < low) {
          low = parseInt(result[1])
        }
      }



    }

    //function to display colours for range of results
    let range = high - low

    function getColor(low, high, range, d) {

      if (dataOption === 'temperature') {
        return d >= (high) ? '#BD0026' :
          d > (low + 4 * (range / 5)) ? '#E31A1C' :
            d > (low + 3 * (range / 5)) ? '#FC4E2A' :
              d > (low + 2 * (range / 5)) ? '#FD8D3C' :
                d > (low + (range / 5)) ? '#FEB24C' :
                  d >= (low) ? '#FED976' :
                    'white';
      } else {
        return d >= (high) ? '#003a64' :
          d > (low + 4 * (range / 5)) ? '#0067b1' :
            d > (low + 3 * (range / 5)) ? '#48b3ff' :
              d > (low + 2 * (range / 5)) ? '#7cc8ff' :
                d > (low + (range / 5)) ? '#99d5ff' :
                  d >= (low) ? '#e2f3ff' :
                    'white';

      }

    }


    //for all results, add border to map with specific colour
    for (country of results) {
      function globalBorder() {
        return {
          fillColor: getColor(low, high, range, parseInt(country[1])),
          weight: 4,
          opacity: 0.6,
          color: 'white',
          dashArray: '8',
          fillOpacity: 0.5
        }
      }

      let newGlobalCountryBorder = L.geoJson(country[0].border, { style: globalBorder });
      globalCountryBorders.addLayer(newGlobalCountryBorder);
    }

    //remove legend if there is one, and add new
    legend.remove()
    let grades = [
      Math.round(low),
      Math.round((low + (range / 5))),
      Math.round((low + 2 * (range / 5))),
      Math.round((low + 3 * (range / 5))),
      Math.round((low + 4 * (range / 5))),
      Math.round(high)
    ]
    legend.onAdd = function (map) {
      let div = L.DomUtil.create('div', 'info legend')
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(low, high, range, grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }
      return div;
    };
    legend.addTo(map)

    //removes loading screen
    document.getElementById("loading").style.display = "none";
  }

  //runs function after 1000ms to allow time for dom to update loading screen
  setTimeout(run, 1000)


}



//Get borders from array list ----------------------------------------------------------------------------------

function getBorders(country, fitToScreen, mode) {

  hoverCountryBorder.clearLayers();

  //Border Styles ----------

  //border style for chosen country and toggle
  function hoverBorder() {
    return {
      fillColor: 'lightBlue',
      weight: 4,
      opacity: 1,
      color: 'rgb(101, 101, 101)',
      dashArray: '8',
      fillOpacity: 0
    }
  }

  //border style for select country on hover
  function generalBorder() {
    return {
      fillColor: 'lightBlue',
      weight: 4,
      opacity: 1,
      color: 'rgb(101, 101, 101)',
      dashArray: '8',
      fillOpacity: 0.5
    }
  }

  //Gets geo.json file 
  $.ajax({
    dataType: "json",
    url: "js/countryBorders.geo.json",
    success: function (borders) {

      //for each border within geo.json
      $(borders.features).each(function (key, border) {

        let newGeneralBorder = L.geoJson(border, { style: generalBorder });
        let newHoverBorder = L.geoJson(border, { style: hoverBorder });


        if (mode === 'selected') {
          if (GLOBAL_borders[key]) {
            let deletedFeature = GLOBAL_borders[key];
            delete GLOBAL_borders[key];
            geoJsonLayerGroup.removeLayer(deletedFeature);
          };

          if (country === border.properties.name || country === 'all') {
            GLOBAL_borders[key] = newGeneralBorder;
            geoJsonLayerGroup.addLayer(newGeneralBorder);

            if (fitToScreen) {
              map.fitBounds(newGeneralBorder.getBounds(), { padding: [20, 20] });
            }
          }
        }


        if (mode === 'hover') {
          if (country === border.properties.name) {
            hoverCountryBorder.addLayer(newHoverBorder);
          }
        }
      });
    }
  }).error(function () {
    console.log('Error')
  });

}







//Search country thats center in view ----------------------------------------------------------------------------------
function searchCenter(lat, lng) {
  GLOBAL_issRun = false;
  let locationData = getCountryFromPoint([lat, lng])
  let locationCountry = locationData.country
  showCountryData(locationCountry);

}





//Toggle all country borders ----------------------------------------------------------------------------------

function allBorders() {
  geoJsonLayerGroup.clearLayers();
  if (GLOBAL_allBordersToggle) {
    getBorders(GLOBAL_countryChosen, false, 'selected')
  } else {
    getBorders('all', false, 'selected')

  }
  GLOBAL_allBordersToggle = !GLOBAL_allBordersToggle
}






//Adds country map markers ----------------------------------------------------------------------------------

function loadCountryMarkers(relocate, amount, reset) {

  //checks if there is a chosen country (country mode)
  if (GLOBAL_countryChosen && GLOBAL_cityDataOption) {

    if (reset) {
      GLOBAL_lessCitiesLoaded = false;
      GLOBAL_moreCitiesLoaded = false;
    }

    //adds loading screen
    document.getElementById("loading").style.display = "block"
    $('#loadingText').html('Loading cities...');

    function run() {

      let citiesInCountry = []
      let layerOption = ''


      if (amount === 'less') {
        //runs though cities and adds cities within country to new array for top 5
        lessCityMarkers.clearLayers()
        citiesInCountry = GLOBAL_chosenCountryCities.slice(0, 6)
        layerOption = lessCityMarkers
      }

      if (amount === 'more') {
        //runs though cities and adds cities within country to new array for top 5
        moreCityMarkers.clearLayers()
        citiesInCountry = GLOBAL_chosenCountryCities
        layerOption = moreCityMarkers
      }

      //focus view on country capital
      if (relocate) {
        city = citiesInCountry[0]
        map.setView([city.coordinates.latitude, city.coordinates.longitude], 8)
      }

      //for the cities in array, add to map
      if (!reset) {
        for (city of citiesInCountry) {
          let marker = GLOBAL_cityMarkerOption(city, GLOBAL_cityDataOption)
          layerOption.addLayer(marker)
        }
      }


      //removes loading screen
      document.getElementById("loading").style.display = "none";
    }

    //runs function after 1000ms to allow time for dom to update loading screen
    setTimeout(run, 1000)
  }
}








//Adds global map markers depending on zoom scale ----------------------------------------------------------------------------------

function loadMapMarkers() {

  map.addLayer(lessCityMarkers);
  map.removeLayer(lessCityMarkers);

  map.addLayer(moreCityMarkers);
  map.removeLayer(moreCityMarkers);

  let centerCountry = getCountryFromPoint([map.getCenter().lat, map.getCenter().lng]).country


  if (GLOBAL_mode === 'country') {
    if (map.getZoom() <= 5) {

      $("#cityMarkers").css('display', 'none')
      $("#cityData").css('display', 'flex')
      $("#selectCityTab").css('background-color', 'white')
      $("#allCitiesTab").css('background-color', 'transparent')



      document.getElementById("centerReticle").style.display = "flex"
      $('#searchCenterCountry').html(centerCountry);
      map.removeLayer(lessCityMarkers);
      map.removeLayer(moreCityMarkers);


      if (centerCountry !== GLOBAL_countryChosen) {
        document.getElementById("searchCenter").style.display = "flex"
        document.getElementById("zoomIn").style.display = "none"
        getBorders(centerCountry, false, 'hover')
      } else {
        document.getElementById("searchCenter").style.display = "none"
        document.getElementById("zoomIn").style.display = "flex"
        document.getElementById("centerReticle").style.display = "none"
        getBorders('none', false, 'hover')
      }
    };

    if (map.getZoom() > 5 && map.getZoom() < 8) {

      $("#cityData").css('display', 'none')
      $("#cityMarkers").css('display', 'flex')
      $("#allCitiesTab").css('background-color', 'white')
      $("#selectCityTab").css('background-color', 'transparent')



      document.getElementById("centerReticle").style.display = "flex"
      $('#searchCenterCountry').html(centerCountry);

      map.removeLayer(moreCityMarkers);
      map.addLayer(lessCityMarkers);


      if (centerCountry !== GLOBAL_countryChosen) {
        document.getElementById("searchCenter").style.display = "flex"
        document.getElementById("zoomIn").style.display = "none"
        getBorders(centerCountry, false, 'hover')
      } else {
        document.getElementById("searchCenter").style.display = "none"
        document.getElementById("zoomIn").style.display = "flex"
        document.getElementById("centerReticle").style.display = "none"
        getBorders('none', false, 'hover')
      }


      if (!GLOBAL_lessCitiesLoaded) {
        addCountryMarkers(GLOBAL_cityMarkerOption, GLOBAL_cityDataOption, false, 'less')
        GLOBAL_lessCitiesLoaded = true
      }
    };


    //Country Search
    if (map.getZoom() >= 8 && centerCountry === GLOBAL_countryChosen) {

      $("#cityData").css('display', 'none')
      $("#cityMarkers").css('display', 'flex')
      $("#allCitiesTab").css('background-color', 'white')
      $("#selectCityTab").css('background-color', 'transparent')

      document.getElementById("searchCenter").style.display = "none"
      document.getElementById("centerReticle").style.display = "none"
      document.getElementById("zoomIn").style.display = "none"

      map.removeLayer(lessCityMarkers);
      map.addLayer(moreCityMarkers);

      if (!GLOBAL_moreCitiesLoaded) {
        addCountryMarkers(GLOBAL_cityMarkerOption, GLOBAL_cityDataOption, false, 'more')
        GLOBAL_moreCitiesLoaded = true
      }
    };
  }

}


























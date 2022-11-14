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
        map.setView([GLOBAL_positionLat, GLOBAL_positionLng], 5)
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

  console.log(city.images[0].sizes.medium.url)
  $('#snippet').html(city.snippet);
  $('#cityDescription').html(city.generated_intro);

  $('#cityImage').attr('src', `${city.images[0].sizes.medium.url}`)
  $('#cityImageCaption').html(city.images[0].caption);


  map.setView([city.coordinates.latitude, city.coordinates.longitude], 5)
  marker = cityDataMarker(city)
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
      cityList = getCountryCities(isoCode)
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

    countryModeClose()
    countryModeOpen()


    //Updates global variables and resets map layers
    GLOBAL_countryChosen = countryChosen;
    GLOBAL_issRun = false;

    chosenCountryCityMarker.clearLayers()
    lessCityMarkers.clearLayers()
    moreCityMarkers.clearLayers()
    GLOBAL_lessCitiesLoaded = false;
    GLOBAL_moreCitiesLoaded = false;
    capitalCityMarkers.clearLayers()

    //Loads data from country name
    loadCountryCitiesList(countryChosen)

    getBorders([countryChosen], true, false)
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








//Add global map markers ----------------------------------------------------------------------------------

function addGlobalMarkers(marker, data) {
  GLOBAL_countryChosen = false;
  GLOBAL_issRun = false;
  GLOBAL_cityMarkerOption = marker;
  GLOBAL_cityDataOption = data;
  loadMapMarkers()
}







//Add country map markers ----------------------------------------------------------------------------------

function addCountryMarkers(marker, data, relocate, amount) {

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
  loadCountryMarkers(relocate, amount)
  $(`#${data}CountryButton`).css({ 'font-weight': 'bolder' })
  $(`#cityDataSelected`).html(` ${data}`)
}









//Get borders from array list ----------------------------------------------------------------------------------

function getBorders(countries, fitToScreen, hover) {


  //gets geo.json file
  $.ajax({
    dataType: "json",
    url: "js/countryBorders.geo.json",
    success: function (borders) {

      hoverCountryBorder.clearLayers();
      


      //for each border within geo.json
      $(borders.features).each(function (key, border) {

        //if there is a border for the current country, remove it
        if (GLOBAL_borders[key] && hover === false) {

          let deletedFeature = GLOBAL_borders[key];
          delete GLOBAL_borders[key];
          geoJsonLayerGroup.removeLayer(deletedFeature);
        };

        //border style for chosen country and toggle
        function generalBorder() {
          return {
            fillColor: 'lightBlue',
            weight: 4,
            opacity: 1,
            color: 'gray',
            dashArray: '8',
            fillOpacity: 0
          }
        }
        let newGeneralBorder = L.geoJson(border, { style: generalBorder });

        //border style for select country on hover
        function hoverBorder() {
          return {
            fillColor: 'lightBlue',
            weight: 4,
            opacity: 1,
            color: 'gray',
            dashArray: '8',
            fillOpacity: 0.6
          }
        }
        let newHoverBorder = L.geoJson(border, { style: hoverBorder });

        //if there is a list of countries
        if (countries) {         

          countries.forEach(country => {
            //if the current border feature matches a country in the list
            if (country === border.properties.name) {

              if (hover) {
                hoverCountryBorder.addLayer(newHoverBorder);
              } else {
                GLOBAL_borders[key] = newGeneralBorder;
                geoJsonLayerGroup.addLayer(newGeneralBorder);

                if (fitToScreen) {
                  map.fitBounds(newGeneralBorder.getBounds(), { padding: [20, 20] });
                }
              }
            }
          })
        } else {
          GLOBAL_borders[key] = newGeneralBorder;
          geoJsonLayerGroup.addLayer(newGeneralBorder);
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
  console.log(GLOBAL_allBordersToggle)
  geoJsonLayerGroup.clearLayers();
  if (GLOBAL_allBordersToggle) {
    getBorders([GLOBAL_countryChosen])
  } else {
    getBorders()

  }
  GLOBAL_allBordersToggle = !GLOBAL_allBordersToggle
}






//Adds country map markers ----------------------------------------------------------------------------------

function loadCountryMarkers(relocate, amount) {

  //checks if there is a chosen country (country mode)
  if (GLOBAL_countryChosen && GLOBAL_cityDataOption) {

    //adds loading screen
    document.getElementById("loading").style.display = "block"
    $('#loadingText').html('Loading cities...');

    function run() {

      //clears layers
      
      
      capitalCityMarkers.clearLayers()
      chosenCountryCityMarker.clearLayers()

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
      //for the cities in array, add to map
      for (city of citiesInCountry) {
        let marker = GLOBAL_cityMarkerOption(city, GLOBAL_cityDataOption)
        layerOption.addLayer(marker)

        //focus view on country capital
        if (relocate && city === citiesInCountry[0]) {
          map.setView([city.coordinates.latitude, city.coordinates.longitude], 8)
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


  if(GLOBAL_mode === 'country') {
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
        getBorders([centerCountry], false, true)
      } else {
        document.getElementById("searchCenter").style.display = "none"
        document.getElementById("zoomIn").style.display = "flex"
        document.getElementById("centerReticle").style.display = "none"
        getBorders([''], false, true)
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
  
      console.log(centerCountry, GLOBAL_countryChosen)
  
      
      
      if (centerCountry !== GLOBAL_countryChosen) {
        document.getElementById("searchCenter").style.display = "flex"
        document.getElementById("zoomIn").style.display = "none"
        getBorders([centerCountry], false, true)
      } else {
        document.getElementById("searchCenter").style.display = "none"
        document.getElementById("zoomIn").style.display = "flex"
        document.getElementById("centerReticle").style.display = "none"
        getBorders([''], false, true)
      }
      
  
      if (!GLOBAL_lessCitiesLoaded) {
        addCountryMarkers(weatherDataMarker, `temperature`, false, 'less')
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
        addCountryMarkers(weatherDataMarker, `temperature`, false, 'more')
        GLOBAL_moreCitiesLoaded = true
      }
    };
  }

}


























//---------------------------  FUNCTIONS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions







//Finds users location and adds data for country in ----------------------------------------------------------------------------------

function findLocation() {

  //adds loading screen
  document.getElementById("loading").style.display = "block"

  function run() {

    //if the user allows access to geolocation
    if ('geolocation' in navigator) {

      //sets global variables to location, moves view and updates userLocation marker
      navigator.geolocation.getCurrentPosition(position => {
        GLOBAL_positionLat = position.coords.latitude
        GLOBAL_positionLng = position.coords.longitude
        map.setView([GLOBAL_positionLat, GLOBAL_positionLng], 5)
        userLocation.setLatLng([GLOBAL_positionLat, GLOBAL_positionLng])

        //finds country user is in from co-ords and loads country data <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        let countryChosen = 'United Kingdom'
        showCountryData(countryChosen);

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


}






//Adds chosen city data to countryMode div and city marker to map ----------------------------------------------------------------------------------

function showCityData(city) {
  map.setView([city.lat, (city.lng)], 5)
  marker = cityDataMarker(city, 'city')
  chosenCountryCityMarker.addLayer(marker)
  $('#chosenCity').html(city.city);
  getCityAstroData(city)
  getCityWeatherData(city)
}






//Adds chosen country data to countryMode div and capital city marker to map ----------------------------------------------------------------------------------
function showCountryData(countryChosen) {

  //Hides div while updating data
  $('#countryMode').fadeOut();


  //Updates global variables and resets map layers
  GLOBAL_countryChosen = countryChosen;
  GLOBAL_issRun = false;

  chosenCountryCityMarker.clearLayers()
  allCityMarkers.clearLayers()
  capitalCityMarkers.clearLayers()


  //Loads data from country name
  loadCountryCityList(countryChosen)
  getBorders([countryChosen])
  let phpCountryChosen = countryChosen.replace(" ", "%20");
  getCountryData(phpCountryChosen)
  $('#chosenCountry').html(countryChosen);



  //Finds country capital city and loads data
  let citiesInCountry = cities.filter(city => city.country === countryChosen)
  let capitalCity = ''
  citiesInCountry.forEach(city => {
    if (city.capital === 'primary') {
      capitalCity = city
    }
  });

  showCityData(capitalCity)

  $('#countryMode').fadeIn();
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

function addCountryMarkers(marker, data) {
  GLOBAL_issRun = false;
  GLOBAL_cityMarkerOption = marker;
  GLOBAL_cityDataOption = data;
  loadCountryMarkers()
}









//Get borders from array list ----------------------------------------------------------------------------------

function getBorders(countries) {

  //gets geo.json file
  $.ajax({
    dataType: "json",
    url: "js/countryBorders.geo.json",
    success: function (borders) {

      //for each border within geo.json
      $(borders.features).each(function (key, border) {

        //if there is a border for the current country, remove it
        if (GLOBAL_borders[key]) {                

          let deletedFeature = GLOBAL_borders[key];
          delete GLOBAL_borders[key];
          geoJsonLayerGroup.removeLayer(deletedFeature);
        };

        //new border
        let newBorder = L.geoJson([border]);

        //if there is a list of countries
        if (countries) {

          countries.forEach(country => {
            //if the current border feature matches a country in the list
            if (country === border.properties.name) {
              GLOBAL_borders[key] = newBorder;
              geoJsonLayerGroup.addLayer(newBorder);
            }
          })
        } else {
          GLOBAL_borders[key] = newBorder;
          geoJsonLayerGroup.addLayer(newBorder);
        }
      });
    }
  }).error(function () {
    console.log('Error')
  });

}








//Toggle all country borders ----------------------------------------------------------------------------------

function allBorders() {
  if (GLOBAL_allBordersToggle) {
    getBorders([GLOBAL_countryChosen])  
  } else {
    getBorders()
    
  }
  GLOBAL_allBordersToggle = !GLOBAL_allBordersToggle
}












//Adds global map markers depending on zoom scale ----------------------------------------------------------------------------------

function loadMapMarkers() {

  
  //checks if there is no chosen country (global mode)
  if (!GLOBAL_countryChosen && GLOBAL_cityDataOption) {

    //adds loading screen
    document.getElementById("loading").style.display = "block"

    function run() {

      //clears layers and removes all borders
      allCityMarkers.clearLayers()
      capitalCityMarkers.clearLayers()
      chosenCountryCityMarker.clearLayers()
      getBorders([''])

      //works out view boundary and sets as variables
      let north = map.getBounds()._northEast.lat
      let east = map.getBounds()._northEast.lng
      let south = map.getBounds()._southWest.lat
      let west = map.getBounds()._southWest.lng


      //cycle through list of cities
      for (city of cities) {    

        let inView = city.lat < north && city.lat > south && city.lng < east && city.lng > west

        //if city is in view
        if (inView) {

          //adds primary cities for large scales (0 - 7)
          if (map.getZoom() <= 7 && city.capital === 'primary') {
            let marker = GLOBAL_cityMarkerOption(city, GLOBAL_cityDataOption)
            capitalCityMarkers.addLayer(marker)
          }

          //adds cities that are not minor for small scales (7 - 20)
          if (map.getZoom() > 7 && city.capital !== 'minor') {
            let marker = GLOBAL_cityMarkerOption(city, GLOBAL_cityDataOption)
            allCityMarkers.addLayer(marker)
          };
        }
      }

      //removes loading screen
      document.getElementById("loading").style.display = "none";
    }

    //runs function after 1000ms to allow time for dom to update loading screen
    setTimeout(run, 1000)
  }
}









//Adds country map markers ----------------------------------------------------------------------------------

function loadCountryMarkers() {

  //checks if there is a chosen country (country mode)
  if (GLOBAL_countryChosen  && GLOBAL_cityDataOption) {

    //adds loading screen
    document.getElementById("loading").style.display = "block"

    function run() {

      //clears layers
      allCityMarkers.clearLayers()
      capitalCityMarkers.clearLayers()
      chosenCountryCityMarker.clearLayers()


      //runs though cities and adds cities within country to new array
      let citiesInCountry = cities.filter(city => city.country === GLOBAL_countryChosen && city.capital !== 'minor')

      //for the cities in array, add to map
      for (city of citiesInCountry) {
        let marker = GLOBAL_cityMarkerOption(city, GLOBAL_cityDataOption)
        allCityMarkers.addLayer(marker)

        //focus view on country capital
        if (city.capital === 'primary') {
          map.setView([city.lat, city.lng], 8)
        }
      }

      //removes loading screen
      document.getElementById("loading").style.display = "none";
    }

    //runs function after 1000ms to allow time for dom to update loading screen
    setTimeout(run, 1000)
  }
}
















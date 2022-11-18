//---------------------------  FUNCTIONS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions














function loadCountryList() {
  let select = document.getElementById("countriesList");
  let filteredCities = []
  let option = '';

  for (var i = 0; i < countryIsoCodes.length; i++) {
      option = countryIsoCodes[i].Name;

      if (!filteredCities.includes(option)) {
          let element = document.createElement("option");
          element.textContent = option;
          element.value = option;
          select.appendChild(element);
      }
      filteredCities.push(option);
  }
}







//Finds users location and adds data for country in ----------------------------------------------------------------------------------

function findLocation(load) {

  //if the user allows access to geolocation
  if ('geolocation' in navigator) {
    //sets global variables to location, moves view and updates userLocation marker
    navigator.geolocation.getCurrentPosition(position => {
      userLocation.setLatLng([position.coords.latitude, position.coords.longitude])
      map.setView([position.coords.latitude, position.coords.longitude], 5)
      let loadLocation = getCountryFromPointPHP([position.coords.latitude, position.coords.longitude]).country

      //if load is true, also load country data
      if (load) {
        loadCountryData(loadLocation);
      }
    })
  } else {
    //sets default country if there is no geolocation data
    let loadLocation = 'France'
    //if load is true, also load country data
    if (load) {
      loadCountryData(loadLocation);
      map.removeLayer(lessCityMarkers);
      map.removeLayer(moreCityMarkers);
    }
  }
}















//Adds chosen country data to countryMode div and capital city marker to map ----------------------------------------------------------------------------------

function loadCountryData(countryChosen) {

  document.getElementById("loading").style.display = "block"
  $('#loadingText').html('Loading all country data...');

  function run() {

    //Updates global variables and resets map layers
    GLOBAL_countryChosen = countryChosen;
    $('#countriesList')[0].value = countryChosen

    //clears all borders and re adds without chosen country
    map.removeLayer(allBordersLayerGroup)
    getAllCountryBorders(countryChosen)
    chosenCountryCityMarker.clearLayers()
    lessCityMarkers.clearLayers()
    moreCityMarkers.clearLayers()
    GLOBAL_lessCitiesLoaded = false;
    GLOBAL_moreCitiesLoaded = false;

    //Loads all data from country name
    $('#chosenCountry').html(countryChosen);
    loadCountryDataPHP(countryChosen.replace(" ", "%20"))
    loadBorder(countryChosen, true, 'selected')
    loadCitiesData(countryChosen)

    loadCityMarkers(cityDataMarker, 'city', false)

    document.getElementById("loading").style.display = "none"
  }

  //runs function after 1000ms to allow time for dom to update loading screen
  setTimeout(run, 1000)
}














//Adds country city list to city dataset ----------------------------------------------------------------------------------

function loadCitiesData(country) {

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
      cityList = getCountryCitiesPHP(isoCode, 50)
      GLOBAL_Cities = cityList
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

  //loads most popular city by default
  let capitalCity = GLOBAL_Cities[0]
  loadCityData(capitalCity, true)
  loadAstroDataPHP(capitalCity)
}










//Adds chosen city data to countryMode div and city marker to map ----------------------------------------------------------------------------------

function loadCityData(city, relocate) {

  if (relocate) {
    map.setView([city.coordinates.latitude, city.coordinates.longitude], 5)
  }

  $('#snippet').html(city.snippet);
  $('#cityDescription').html(city.generated_intro);

  GLOBAL_cityChosen = city

  let images = city.images;
  let select = document.getElementById("cityImages");

  select.innerHTML = ''

  for (let i = 0; i < images.length; i++) {
    let imgElement = document.createElement("img");
    imgElement.id = 'cityImage';
    imgElement.src = city.images[i].sizes.medium.url;
    select.appendChild(imgElement);

    let pElement = document.createElement("p");
    let html = document.createTextNode(`${city.images[i].caption}`)
    pElement.appendChild(html)
    pElement.id = 'cityDescription';
    select.appendChild(pElement);
  }

  marker = selectedCityDataMarker(city, true)
  chosenCountryCityMarker.addLayer(marker)

  loadCityWeatherDataPHP(city)
}

















//Add country map markers ----------------------------------------------------------------------------------

function loadCityMarkers(marker, data, relocate) {

  //update buttons
  $(`#temperatureCountryButton`).css({ 'background': '400' })
  $(`#windSpeedCountryButton`).css({ 'font-weight': '400' })
  $(`#humidityCountryButton`).css({ 'font-weight': '400' })
  $(`#pressureCountryButton`).css({ 'font-weight': '400' })
  $(`#cloudsCountryButton`).css({ 'font-weight': '400' })
  $(`#${data}CountryButton`).css({ 'background-color': 'blue' })

  //update global variables  

  //adds loading screen
  document.getElementById("loading").style.display = "block"
  $('#loadingText').html('Loading cities...');

  function run() {

    let citiesInCountry = []

    if (relocate) {
      map.setView([citiesInCountry[0].coordinates.latitude, citiesInCountry[0].coordinates.longitude], 8)
    }

    //runs though cities and adds cities within country to new array for top 5
    moreCityMarkers.clearLayers()
    citiesInCountry = GLOBAL_Cities


    //runs though cities and adds cities within country to new array for top 5
    lessCityMarkers.clearLayers()
    citiesInCountry = GLOBAL_Cities.slice(0, 8)


    //for the cities in array, add to map
    let count = 0;
    for (city of GLOBAL_Cities) {
      moreCityMarkers.addLayer(marker(city, data))
      if (count < 6) {
        console.log(count)
        lessCityMarkers.addLayer(marker(city, data))
      }
      count++
    }

    //removes loading screen
    document.getElementById("loading").style.display = "none";
  }

  //runs function after 1000ms to allow time for dom to update loading screen
  setTimeout(run, 1000)
}












//Get borders from array list ----------------------------------------------------------------------------------

function loadBorder(country, fitToScreen, mode) {

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




  if (country !== 'all') {

    let border = getCountryBorderPHP(country)

    let newGeneralBorder = L.geoJson(border, { style: generalBorder });
    let newHoverBorder = L.geoJson(border, { style: hoverBorder });

    if (mode === 'selected') {
      geoJsonLayerGroup.clearLayers();
      geoJsonLayerGroup.addLayer(newGeneralBorder);
      if (fitToScreen) {
        map.fitBounds(newGeneralBorder.getBounds(), { padding: [20, 20] });
      }
    }

    if (mode === 'hover') {
      hoverCountryBorder.addLayer(newHoverBorder);
    }
  }
}












function getAllCountryBorders(country) {

  allBordersLayerGroup.clearLayers()

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
    data: {
      country: country
    },
    success: function (borders) {

      //for each border within geo.json
      $(borders.features).each(function (key, border) {

        if (border.properties.name !== country) {
          let newGeneralBorder = L.geoJson(border, { style: generalBorder });
          allBordersLayerGroup.addLayer(newGeneralBorder);
        }
      });
    }
  }).error(function () {
    console.log('Error')
  });
}











//Toggle all country borders ----------------------------------------------------------------------------------
function toggleBorders() {
  (GLOBAL_allBordersToggle) ? map.removeLayer(allBordersLayerGroup) : map.addLayer(allBordersLayerGroup);

  GLOBAL_allBordersToggle = !GLOBAL_allBordersToggle
}











//Adds global map markers depending on zoom scale ----------------------------------------------------------------------------------

function updateMap() {


  //Updates map if in country mode
  if (GLOBAL_mode === 'country') {

    //removes all marker layers
    map.addLayer(lessCityMarkers);
    map.removeLayer(lessCityMarkers);
    map.addLayer(moreCityMarkers);
    map.removeLayer(moreCityMarkers);

    //Finds country currently hovering on
    let centerCountry = getCountryFromPointPHP([map.getCenter().lat, map.getCenter().lng]).country

    //Updates map depending on wether hovering over new country
    if (centerCountry !== GLOBAL_countryChosen) {
      document.getElementById("searchCenter").style.display = "flex"
      document.getElementById("zoomIn").style.display = "none"
      loadBorder(centerCountry, false, 'hover')
    } else {
      document.getElementById("searchCenter").style.display = "none"
      document.getElementById("zoomIn").style.display = "flex"
      document.getElementById("centerReticle").style.display = "none"
      loadBorder('none', false, 'hover')
    }

    //ZOOM MODE 1
    if (map.getZoom() <= 5) {
      countryModeClose()
      $("#centerReticle").css('display', 'flex')
      $('#searchCenterCountry').html(centerCountry);
      map.removeLayer(lessCityMarkers);
      map.removeLayer(moreCityMarkers);
    };

    //ZOOM MODE 2
    if (map.getZoom() > 5 && map.getZoom() < 7) {
      $("#centerReticle").css('display', 'flex')
      $('#searchCenterCountry').html(centerCountry);
      map.removeLayer(moreCityMarkers);
      map.addLayer(lessCityMarkers);
    };

    //ZOOM MODE 3
    if (map.getZoom() >= 7 && centerCountry) {
      $("#centerReticle").css('display', 'none')
      $("#searchCenter").css('display', 'none')
      $("#zoomIn").css('display', 'none')
      map.removeLayer(lessCityMarkers);
      map.addLayer(moreCityMarkers);
    };
  }

}


























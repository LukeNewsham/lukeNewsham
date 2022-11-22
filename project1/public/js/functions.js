//---------------------------  FUNCTIONS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions








function getGlobalData() {
  $.ajax({
    dataType: "json",
    async: false,
    url: "js/countryBorders.geo.json",
    success: function (borders) {
      $(borders.features).each(function (key, border) {
        let country = border.properties.name
        let centerPoint = L.geoJson(border).getBounds().getCenter()
        getCountryWeatherPHP(centerPoint, country, border)
      })
    }
  }).error(function () {
    console.log('Error')
  });
}










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
      let loadLocation = getCountryFromPointPHP([position.coords.latitude, position.coords.longitude]).country
      loadBorder(loadLocation, true, 'selected')

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
    }
  }
}





function relocate(option) {
  console.log(option)
  if ('geolocation' in navigator && option === 'live') {
    //sets global variables to location, moves view and updates userLocation marker
    navigator.geolocation.getCurrentPosition(position => {
      userLocation.setLatLng([position.coords.latitude, position.coords.longitude])
      map.setView([position.coords.latitude, position.coords.longitude])

    })
  }

  if (option === 'city') {
    map.setView([GLOBAL_cityChosen.coordinates.latitude, GLOBAL_cityChosen.coordinates.longitude], 11)
  }

}















//Adds chosen country data to countryMode div and capital city marker to map ----------------------------------------------------------------------------------

function loadCountryData(countryChosen) {

  document.getElementById("loading").style.display = "block"

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
    getCountryDataPHP(countryChosen.replace(" ", "%20"))
    loadBorder(countryChosen, true, 'selected')
    loadCitiesData(countryChosen)
    loadCityMarkers(cityDataMarker, 'city', false)
    loadCityPois(GLOBAL_cityChosen.name, 'sightseeing')
    $('#poiList')[0].value = 'sightseeing'


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
  loadCityData(capitalCity)
  loadAstroDataPHP(capitalCity)
}










//Adds chosen city data to countryMode div and city marker to map ----------------------------------------------------------------------------------

function loadCityData(city, relocate) {

  if (relocate) {
    map.setView([city.coordinates.latitude - 4, city.coordinates.longitude], 5)
  }

  $('#snippet').html(city.snippet);
  $('#cityDescription').html(city.generated_intro);

  GLOBAL_cityChosen = city

  let images = city.images;
  let select = document.getElementById("cityImages");

  select.innerHTML = ''

  for (let i = 0; i < images.length; i++) {
    let imgElementDiv = document.createElement("div");
    imgElementDiv.className = 'imgElementDiv'

    let imgElement = document.createElement("img");
    imgElement.className = 'cityImage';
    imgElement.src = city.images[i].sizes.medium.url;
    imgElementDiv.appendChild(imgElement);

    let pElement = document.createElement("p");
    let html = document.createTextNode(`${city.images[i].caption}`)
    pElement.appendChild(html)
    imgElementDiv.appendChild(pElement);

    select.appendChild(imgElementDiv);
  }

  marker = selectedCityDataMarker(city, true)
  chosenCountryCityMarker.addLayer(marker)

  loadCityWeatherDataPHP(city)
  loadCityPois(city.name, 'sightseeing', false)
}













function loadCityPois(cityName, tagName, relocate) {

  updateMapPoiData(`#${tagName}PoiButton`)
  cityPoiMarkers.clearLayers()
  let pois = []
  pois = getCityPoisPHP(cityName, tagName)

  if (relocate) {
    map.setView([pois[0].coordinates.latitude, pois[0].coordinates.longitude], 15)
  }


  //Updates poi listings
  let select = document.getElementById("cityPoisData");
  select.innerHTML = ''

  if (pois[0]) {
    for (let i = 0; i < pois.length; i++) {

      cityPoiMarkers.addLayer(cityPoiMarker(pois[i], i + 1))
      let imgElementDiv = document.createElement("div");
      imgElementDiv.className = 'imgElementDiv'
      select.appendChild(imgElementDiv);

      let h2Element = document.createElement("h2");
      h2Element.appendChild(document.createTextNode(`${i + 1}: ${pois[i].name}`))
      h2Element.className = 'cityPoiTitle';
      h2Element.id = `${pois[i].name}`
      imgElementDiv.appendChild(h2Element);

      let snippetElement = document.createElement("p");
      snippetElement.appendChild(document.createTextNode(`${pois[i].generated_snippet}`))
      snippetElement.className = 'cityPoiTitle';
      snippetElement.id = `${pois[i].name}`
      imgElementDiv.appendChild(snippetElement);

      if (pois[i].images[0]) {
        let imgElement = document.createElement("img");
        imgElement.className = 'cityImage';
        imgElement.src = pois[i].images[0].sizes.medium.url;
        imgElementDiv.appendChild(imgElement);
      }

      let pElement = document.createElement("p");
      pElement.appendChild(document.createTextNode(`${pois[i].generated_intro}`))
      imgElementDiv.appendChild(pElement);

      let locateElement = document.createElement("img");
      locateElement.className = 'locateElement';
      locateElement.src = "./images/Magnifier Icon.png";
      locateElement.onclick = function () { map.setView([pois[i].coordinates.latitude, pois[i].coordinates.longitude], 15); window.location.hash = `#${pois[i].name}` }
      imgElementDiv.appendChild(locateElement);
    }

  } else {
    let h2Element = document.createElement("h2");
    h2Element.appendChild(document.createTextNode(`No Points of Interest`))
    h2Element.className = 'cityPoiTitle';
    select.appendChild(h2Element);
  }

}

















//Add country map markers ----------------------------------------------------------------------------------

function loadCityMarkers(marker, data, relocate) {



  let citiesInCountry = []

  if (relocate) {
    // map.setView([citiesInCountry[0].coordinates.latitude, citiesInCountry[0].coordinates.longitude])
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
    map.removeLayer(moreCityMarkers)

    if (count < 6) {
      lessCityMarkers.addLayer(marker(city, data))
    }
    count++
  }





}












//Get borders from array list ----------------------------------------------------------------------------------

function loadBorder(country, fitToScreen, mode) {

  hoverCountryBorder.clearLayers();

  //Border Styles ----------

  //border style for chosen country and toggle
  function generalBorder() {
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
  function hoverBorder() {
    return {
      fillColor: 'lightBlue',
      weight: 4,
      opacity: 1,
      color: 'rgb(101, 101, 101)',
      dashArray: '8',
      fillOpacity: 0.5
    }
  }

  let border = getCountryBorderPHP(country)

  let newGeneralBorder = L.geoJson(border, { style: generalBorder });
  let newHoverBorder = L.geoJson(border, { style: hoverBorder });

  if (mode === 'selected') {
    geoJsonLayerGroup.clearLayers();
    geoJsonLayerGroup.addLayer(newGeneralBorder);
    if (fitToScreen) {
      map.fitBounds(newGeneralBorder.getBounds(), { padding: [20, 20] });
      GLOBAL_zoomLevel = map.getZoom()

    }

  }

  if (mode === 'hover') {
    hoverCountryBorder.addLayer(newHoverBorder);
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







function loadISSLocation() {

  let firstTime = true;

  function run() {

    //checks if global variable is true (used to stop getting data during other modes)
    if (GLOBAL_ISS === true) {

      chosenCountryCityMarker.clearLayers()
      lessCityMarkers.clearLayers()

      let location = getIssLocationPHP()

      let lat = location[0]
      let lng = location[1]

      //update iss marker location and add lat lng to astro panel
      markerIss.addTo(map);
      markerIss.setLatLng([lat, lng])
      $('#astroLat').html(Math.round(lat * 1000) / 1000);
      $('#astroLng').html(Math.round(lng * 1000) / 1000);

      let issOverLocation = getCountryFromPointPHP([lat, lng])

      if (issOverLocation.body_of_water) {
        $('#issOver').html(`${issOverLocation.body_of_water}`);
      } else {
        $('#issOver').html(`${issOverLocation.country}`);
      }


      //update view if firstTime or relocate is true
      if (firstTime) {
        map.setView([lat, lng], 4);
        firstTime = false;
      }
    }
  }

  setInterval(run, 1000)

}









//Toggle all country borders ----------------------------------------------------------------------------------
function toggleBorders() {

  if (!GLOBAL_allBordersToggle) {
    map.addLayer(allBordersLayerGroup)
    $("#allBorders").css('border', '2px solid black')
  } else {
    map.removeLayer(allBordersLayerGroup)
    $("#allBorders").css('border', '2px solid white')
  }

  GLOBAL_allBordersToggle = !GLOBAL_allBordersToggle
}











//Adds global map markers depending on zoom scale ----------------------------------------------------------------------------------



function updateMap() {

  console.log(GLOBAL_zoomLevel)

  //Updates map if in country mode
  if (GLOBAL_mode === 'country') {

    map.addLayer(moreCityMarkers)
    map.removeLayer(moreCityMarkers);
    map.addLayer(lessCityMarkers)
    map.removeLayer(lessCityMarkers);

    //Finds country currently hovering on
    let centerCountry = getCountryFromPointPHP([map.getCenter().lat, map.getCenter().lng]).country

    //Updates map depending on wether hovering over new country
    if (centerCountry !== GLOBAL_countryChosen) {
      document.getElementById("searchCenter").style.display = "flex"
      document.getElementById("zoomIn").style.display = "none"
      document.getElementById("centerReticle").style.display = "flex"
      loadBorder(centerCountry, false, 'hover')
    } else {
      document.getElementById("searchCenter").style.display = "none"
      document.getElementById("zoomIn").style.display = "flex"
      document.getElementById("centerReticle").style.display = "none"
      loadBorder('none', false, 'hover')
    }


    //ZOOM MODE 1
    if (map.getZoom() <= GLOBAL_zoomLevel - 2) {
      countryModeClose()
      $('#searchCenterCountry').html(centerCountry);
      map.removeLayer(lessCityMarkers);
      map.removeLayer(moreCityMarkers);
      console.log(GLOBAL_zoomLevel, map.getZoom())
    };

    //ZOOM MODE 2
    if (map.getZoom() > GLOBAL_zoomLevel - 2 && map.getZoom() < GLOBAL_zoomLevel + 1) {
      $('#searchCenterCountry').html(centerCountry);
      map.removeLayer(moreCityMarkers);
      map.addLayer(lessCityMarkers);
      $(GLOBAL_markerOption).css('display', 'block')
      console.log(GLOBAL_zoomLevel, map.getZoom())
    };

    //ZOOM MODE 3
    if (map.getZoom() >= GLOBAL_zoomLevel + 1 && centerCountry) {
      map.removeLayer(lessCityMarkers);
      map.addLayer(moreCityMarkers);
      $(GLOBAL_markerOption).css('display', 'block')
      console.log(GLOBAL_zoomLevel, map.getZoom())
    };
  } else {
    map.removeLayer(lessCityMarkers)
    map.removeLayer(moreCityMarkers)
  }

}


















function updateMapWeatherData(className, idName) {

  if (GLOBAL_markerOption !== className) {
    $(".tempResult").css('display', 'none')
    $(".humidityResult").css('display', 'none')
    $(".pressureResult").css('display', 'none')
    $(".cloudsResult").css('display', 'none')
    $(".windResult").css('display', 'none')
    $(`${className}`).css('display', 'block')

    $("#temperatureCountryButton").css('border', '2px solid white')
    $("#humidityCountryButton").css('border', '2px solid white')
    $("#pressureCountryButton").css('border', '2px solid white')
    $("#cloudsCountryButton").css('border', '2px solid white')
    $("#windCountryButton").css('border', '2px solid white')
    $(`${idName}`).css('border', '2px solid black')

    GLOBAL_markerOption = className
  } else {
    $(`${className}`).css('display', 'none')
    $(`${idName}`).css('border', 'none')
    GLOBAL_markerOption = ''
  }
}
















function updateMapPoiData(idName) {
  if (GLOBAL_poiOption !== idName) {

    $("#sightseeingPoiButton").css('border', '2px solid white')
    $("#shoppingPoiButton").css('border', '2px solid white')
    $("#eatingoutPoiButton").css('border', '2px solid white')
    $("#doPoiButton").css('border', '2px solid white')
    $(`${idName}`).css('border', '2px solid black')

    GLOBAL_poiOption = idName
  } 
}














function loadGlobalData(type) {

  console.log(type)

  results = GLOBAL_globalWeatherData

  globalWeatherResults.clearLayers()


  function getHigh(weather) {
    return weather === 'temperature' ? 40 :
      weather === 'clouds' ? 100 :
        weather === 'pressure' ? 1050 :
          weather === 'humidity' ? 100 :
            weather === 'windSpeed' ? 20 :
              '';
  }

  function getLow(weather) {
    return weather === 'temperature' ? -40 :
      weather === 'clouds' ? 0 :
        weather === 'pressure' ? 950 :
          weather === 'humidity' ? 0 :
            weather === 'windSpeed' ? 0 :
              '';
  }



  let high = getHigh(type)
  let low = getLow(type)
  let range = high - low

  function getColor(low, high, range, d) {
    if (type === 'temperature') {
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

  function getSymbol(weather) {
    return weather === 'temperature' ? ' C' :
      weather === 'clouds' ? '%' :
        weather === 'pressure' ? 'hPa' :
          weather === 'humidity' ? '%' :
            weather === 'windSpeed' ? 'm/s' :
              '';
  }


  function getSortedBy(weather) {
    return weather === 'temperature' ? results.sort((a, b) => b[0].main.temp - a[0].main.temp) :
      weather === 'clouds' ? results.sort((a, b) => b[0].clouds.all - a[0].clouds.all) :
        weather === 'pressure' ? results.sort((a, b) => b[0].main.pressure - a[0].main.pressure) :
          weather === 'humidity' ? results.sort((a, b) => b[0].main.humidity - a[0].main.humidity) :
            weather === 'windSpeed' ? results.sort((a, b) => b[0].wind.speed - a[0].wind.speed) :
              '';
  }

  let sortedResults = getSortedBy(type)

  console.log(sortedResults)

  let select = document.getElementById("globalResults");
  select.innerHTML = ''

  for (country of sortedResults) {

    function resultDataNavigate(weather) {
      return weather === 'temperature' ? country[0].main.temp :
        weather === 'clouds' ? country[0].clouds.all :
          weather === 'pressure' ? country[0].main.pressure :
            weather === 'humidity' ? country[0].main.humidity :
              weather === 'temperature' ? country[0].main.temp :
                weather === 'windSpeed' ? country[0].wind.speed :
                  '';
    }

    function globalBorder() {
      return {
        fillColor: getColor(low, high, range, parseInt(resultDataNavigate(type))),
        weight: 4,
        opacity: 0.6,
        color: 'white',
        dashArray: '8',
        fillOpacity: 0.5
      }
    }


    let div = document.createElement("h3");
    div.className = 'countryModeData';

    let countryName = document.createElement("h3");
    countryName.appendChild(document.createTextNode(`${country[1]}`))
    div.appendChild(countryName);

    let countryResult = document.createElement('span')
    countryResult.appendChild(document.createTextNode(`${resultDataNavigate(type)} ${getSymbol(type)}`))
    div.appendChild(countryResult);

    select.appendChild(div);


    let border = L.geoJson(country[2], { style: globalBorder });
    globalWeatherResults.addLayer(border);
  }

}























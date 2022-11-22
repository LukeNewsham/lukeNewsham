//---------------------------  DATA MARKERS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions







//Adds selected city data marker to map ----------------------------------------------------------------------------------
let selectedCityDataMarker = (city) => {


  let tempResult = ''
  let humidityResult = ''
  let pressureResult = ''
  let cloudsResult = ''
  let windResult = ''

  $.ajax({
    url: "php/getOpenWeatherData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
    success: function (result) {
      if (result.status.name == "ok") {
        tempResult = result.data.main.temp
        humidityResult = result.data.main.humidity
        pressureResult = result.data.main.pressure
        cloudsResult = result.data.clouds.all
        windResult = result.data.wind.speed
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })
  //new marker icon for data
  let infoIcon = L.divIcon({
    className: 'infoMarker selected',
    iconAnchor: [0, 0],
    html: `<p> <img src="./images/Magnifier Icon.png" alt="Navigate Icon" class="selectedIcon" /> ${(city.name)}
    <span class='tempResult'> ${tempResult}&degC </span> 
    <span class='humidityResult'> ${humidityResult}% </span>
    <span class='pressureResult'> ${pressureResult}hPa </span>
    <span class='cloudsResult'> ${cloudsResult}% </span>
    <span class='windResult'> ${windResult}m/s </span> </p>`
  });
  marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoIcon }).addTo(map).on('click', function (e) {
    GLOBAL_issRun = false;
    chosenCountryCityMarker.clearLayers()
    $('#countryCitiesList')[0].value = city.name
    loadCityData(city, false)
    window.location.hash = "#citySearch";

  });

  //returns marker to be used
  return marker
}




//Adds city data marker to map ----------------------------------------------------------------------------------
let cityDataMarker = (city) => {

  let tempResult = ''
  let humidityResult = ''
  let pressureResult = ''
  let cloudsResult = ''
  let windResult = ''

  $.ajax({
    url: "php/getOpenWeatherData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
    success: function (result) {
      if (result.status.name == "ok") {
        tempResult = result.data.main.temp
        humidityResult = result.data.main.humidity
        pressureResult = result.data.main.pressure
        cloudsResult = result.data.clouds.all
        windResult = result.data.wind.speed
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })


  //new marker icon for data
  let infoIcon = L.divIcon({
    className: 'infoMarker',
    iconAnchor: [0, 0],
    html:
      `<p> ${(city.name)}
    <span class='tempResult'> ${tempResult}&degC </span> 
    <span class='humidityResult'> ${humidityResult}% </span>
    <span class='pressureResult'> ${pressureResult}hPa </span>
    <span class='cloudsResult'> ${cloudsResult}% </span>
    <span class='windResult'> ${windResult}m/s </span>
    </p>`
  });
  marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoIcon }).addTo(map).on('click', function (e) {
    GLOBAL_issRun = false;
    chosenCountryCityMarker.clearLayers()
    console.log(city.name)
    $('#countryCitiesList')[0].value = city.name
    loadCityData(city, false)
    if (countryShown === false) {
      countryModeOpen()
    };
    // cityDataTabOpen()
    window.location.hash = "#citySearch";
  });

  //returns marker to be used
  return marker
}






//Adds selected city data marker to map ----------------------------------------------------------------------------------
let cityPoiMarker = (poi, number) => {

  let lat = poi.coordinates.latitude
  let lng = poi.coordinates.longitude

  let poiMarker = L.divIcon({
    className: 'poiMarker',
    iconAnchor: [0, 0],
    html: `${number}`
  });

  marker = L.marker([lat, lng], { icon: poiMarker }).addTo(map).on('click', function (e) {
    window.location.hash = `#${poi.name}`
    if (countryShown === false) {
      countryModeOpen()
      cityPoiTabOpen()
    };

  }).bindPopup(`${poi.name}`);

  //returns marker to be used
  return marker
}



// //Creates astrology data marker for given point and chosen data ----------------------------------------------------------------------------------

// let astrologyDataMarker = (city, dataOption) => {

//   //gets data
//   $.ajax({
//     url: "php/getAstroData.php",
//     type: 'POST',
//     dataType: 'json',
//     async: false,
//     data: {
//       lat: city.coordinates.latitude,
//       lng: city.coordinates.longitude
//     },
//     success: function (result) {
//       if (result.status.name == "ok") {

//         function formatTime(original) {
//           let [originalHour, originalMin] = original.split(":")

//           let hour = parseInt(originalHour.replace('0', '')) % 12;
//           if (hour === 0) hour = 12;

//           return hour + `:${parseInt(originalMin)}` + (original < 12 ? ' am' : ' pm');
//         }



//         let astroIcon = L.divIcon({
//           className: 'infoMarker',
//           iconAnchor: [0, 0],
//           html: `<p> ${(city.name).toUpperCase()} </p> &nbsp;  &nbsp;   <span>${formatTime(result.data[`${dataOption}`])} </span>`
//         });
//         marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: astroIcon }).addTo(map);
//       }
//     },
//     error: function (jqXHR, textStatus, errorThrown) {
//     }
//   })

//   //returns marker to be used
//   return marker
// }






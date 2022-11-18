//---------------------------  DATA MARKERS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions







//Adds selected city data marker to map ----------------------------------------------------------------------------------
let selectedCityDataMarker = (city) => {
  //new marker icon for data
  let infoIcon = L.divIcon({
    className: 'infoMarker selected',
    iconAnchor: [0, 0],
    html: `<p> <img src="./images/Magnifier Icon.png" alt="Navigate Icon" class="selectedIcon" /> ${(city.name)} </p>`
  });
  marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoIcon }).addTo(map).on('click', function (e) {
    GLOBAL_issRun = false;
    chosenCountryCityMarker.clearLayers()
    console.log(city.name)
    $('#countryCitiesList')[0].value = city.name
    loadCityData(city, false)
    window.location.hash = "#countryMode";
    window.location.hash = "#cityMode";
    
  });

  //returns marker to be used
  return marker
}




//Adds city data marker to map ----------------------------------------------------------------------------------
let cityDataMarker = (city) => {

  //new marker icon for data
  let infoIcon = L.divIcon({
    className: 'infoMarker',
    iconAnchor: [0, 0],
    html: `<p> ${(city.name)} </p>`
  });
  marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoIcon }).addTo(map).on('click', function (e) {
    GLOBAL_issRun = false;
    chosenCountryCityMarker.clearLayers()
    console.log(city.name)
    $('#countryCitiesList')[0].value = city.name
    loadCityData(city, false)
    window.location.hash = "#countryMode";
    window.location.hash = "#cityMode";
  });

  //returns marker to be used
  return marker
}


//Creates astrology data marker for given point and chosen data ----------------------------------------------------------------------------------

let astrologyDataMarker = (city, dataOption) => {

  //gets data
  $.ajax({
    url: "php/getAstroData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
    success: function (result) {
      if (result.status.name == "ok") {

        function formatTime(original) {
          let [originalHour, originalMin] = original.split(":")

          let hour = parseInt(originalHour.replace('0', '')) % 12;
          if (hour === 0) hour = 12;

          return hour + `:${parseInt(originalMin)}` + (original < 12 ? ' am' : ' pm');
        }



        let astroIcon = L.divIcon({
          className: 'infoMarker',
          iconAnchor: [0, 0],
          html: `<p> ${(city.name).toUpperCase()} </p> &nbsp;  &nbsp;   <span>${formatTime(result.data[`${dataOption}`])} </span>`
        });
        marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: astroIcon }).addTo(map);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })

  //returns marker to be used
  return marker
}






//Creates weather data marker for given point and chosen data ----------------------------------------------------------------------------------

let weatherDataMarker = (city, dataOption) => {


  //gets data
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

        let symbol = ''
        let displayData = ''


        if (dataOption === 'temp' || dataOption === 'humidity' || dataOption === 'pressure') {
          displayData = result.data.main[`${dataOption}`]*2
        }
        if (dataOption === 'clouds') {
          displayData = result.data.clouds.all*2
        }
        if (dataOption === 'windSpeed') {
          displayData = result.data.wind.speed*2
        }


        function getSymbol(d) {
          return d === 'temp' ? `&degC` :
            d === 'humidity' ? `%` :
              d === 'windSpeed' ? `Km/h` :
                d === 'pressure' ? `hPa` :
                  d === 'clouds' ? `%` :
                    ''
        }

        symbol = getSymbol(dataOption)



        let infoMarker = L.divIcon({
          className: 'infoMarker',
          iconAnchor: [0, 0],
          html: `<p>${Math.round(displayData)/2}${symbol}</p>`
        });
        marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoMarker }).addTo(map);



      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })

  //returns marker to be used
  return marker
}



//Updates ISS Space Station data marker ----------------------------------------------------------------------------------

let issDataMarker = () => {

  //move view for first time getting iss data
  let firstTime = true;

  function run() {

    //checks if global variable is true (used to stop getting data during other modes)
    if (GLOBAL_mode === 'astrology') {
      $.ajax({
        url: "php/getISS.php",
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (result) {
          if (result.status.name == "ok") {

            //update iss marker location and add lat lng to astro panel
            markerIss.addTo(map);
            markerIss.setLatLng([result.data.latitude, result.data.longitude])
            $('#astroLat').html(Math.round(result.data.latitude * 1000) / 1000);
            $('#astroLng').html(Math.round(result.data.longitude * 1000) / 1000);

            //update view if firstTime or relocate is true
            if (firstTime) {
              map.setView([result.data.latitude, result.data.longitude], 4);
              firstTime = false;
            }
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
      })
    }
  }
  setInterval(run, 1000)
}




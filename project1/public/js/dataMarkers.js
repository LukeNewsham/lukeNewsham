//---------------------------  DATA MARKERS  ---------------------------

//Includes functions which are used throughout the application, mostly for listener functions







//Adds city data marker to map ----------------------------------------------------------------------------------
let cityDataMarker = (city) => {

  //new marker icon for data
  let infoIcon = L.divIcon({
    className: 'infoMarker',
    iconAnchor: [0, 0],
    html: `<p> ${(city.name).toUpperCase()} </p>`
  });
  marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoIcon }).addTo(map);

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
        extraPropertiesData = result['data']
        let astroIcon = L.divIcon({
          className: 'infoMarker',
          iconAnchor: [0, 0],
          html: `<p> ${(city.name).toUpperCase()} </p> &nbsp;  &nbsp;   <span>${result.data[`${dataOption}`]} </span>`
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
    url: "php/getWeatherData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: city.coordinates.latitude,
      lng: city.coordinates.longitude
    },
    success: function (result) {
      if (result.status.name == "ok") {

        console.log(!result.data.weatherObservation)        
        let symbol = ''
        let displayData = ''

        if (!result.data.weatherObservation) {
          console.log('undefined')
          displayData = ''
        } else {
          displayData = result.data.weatherObservation[`${dataOption}`]
          //adds units for specific data
          if (dataOption === 'temperature') {
            symbol = `&deg C`
          }
          if (dataOption === 'windSpeed') {
            symbol = `Km/h`
          }

          let infoMarker = L.divIcon({
            className: 'infoMarker',
            iconAnchor: [0, 0],
            html: `<p> ${(city.name).toUpperCase()} </p> &nbsp;  &nbsp;   <span>${displayData} ${symbol} </span>`
          });
          marker = L.marker([city.coordinates.latitude, city.coordinates.longitude], { icon: infoMarker }).addTo(map);
        }

        
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
    if (GLOBAL_issRun === true) {
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




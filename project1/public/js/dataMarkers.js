//Function to add city info marker 
let cityData = (city) => {
  let infoIcon = L.divIcon({
    className: 'weatherIcon',
    iconAnchor: [0, 0],
    html: `<p> ${(city.city).toUpperCase()} </p>`
  });
  marker = L.marker([city.lat, city.lng], { icon: infoIcon }).addTo(map);
  return marker
}


//Function to astrology data marker 
let astrologyData = (point, dataOption) => {
  // let countries = []

  $.ajax({
    url: "php/getAstroData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: point.lat,
      lng: point.lng
    },
    success: function (result) {
      if (result.status.name == "ok") {
        extraPropertiesData = result['data']
        text = `Sunrise: ${result['data'][`sunrise`]} <br />
        Sunset: ${result['data']['sunset']} <br />
        Moonrise: ${result['data']['moonrise']} <br />
        Moonset: ${result['data']['moonset']}`
        let astroIcon = L.divIcon({
          className: 'weatherIcon',
          iconAnchor: [0, 0],
          html: `<p> ${(city.city).toUpperCase()} </p> &nbsp;  &nbsp;   <span>${result.data[`${dataOption}`]} </span>`
        });
        marker = L.marker([point.lat, point.lng], { icon: astroIcon }).addTo(map);
        marker.bindPopup(text)
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    }
  })
  // getBorders(countries, data)
  return marker
}


//Function to get weather data marker 
let weatherData = (point, dataOption) => {


  $.ajax({
    url: "php/getWeatherData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: point.lat,
      lng: point.lng
    },
    success: function (result) {
      if (result.status.name == "ok") {
        let text = `test`

        let symbol = ''
        if (dataOption === 'temperature') {
          symbol = `&deg C`
        }
        if (dataOption === 'windSpeed') {
          symbol = `Km/h`
        }

        let weatherIcon = L.divIcon({
          className: 'weatherIcon',
          iconAnchor: [0, 0],
          html: `<p> ${(city.city).toUpperCase()} </p> &nbsp;  &nbsp;   <span>${result.data.weatherObservation[`${dataOption}`]} ${symbol} </span>`
        });
        marker = L.marker([point.lat, point.lng], { icon: weatherIcon }).addTo(map);
        marker.bindPopup(text)
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    }
  })
  // getBorders(countries, data)
  return marker
}



//Function to get ISS live data 
let issData = () => {

  let firstTime = true;

  function run(relocate) {

    if (relocate) {
      firstTime = true
    }

    if (GLOBAL_issRun === true) {
      $.ajax({
        url: "php/getISS.php",
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (result) {
          if (result.status.name == "ok") {
            markerIss.setLatLng([result.data.latitude, result.data.longitude])
            $('#astroLat').html(Math.round(result.data.latitude * 1000) / 1000);
            $('#astroLng').html(Math.round(result.data.longitude * 1000) / 1000);

            if (firstTime) {
              map.setView([result.data.latitude, result.data.longitude], 4);
              firstTime = false;

            }
          }

        },
        error: function (jqXHR, textStatus, errorThrown) {
          // your error code
        }
      })
    }
  }

  setInterval(run, 1000)


}




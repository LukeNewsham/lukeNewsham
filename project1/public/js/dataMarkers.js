//Function to add city info marker 
let cityData = (city, data) => {
  text = `Rank: ${city.capital}`
  let infoIcon = L.divIcon({
    className: 'infoIcon',
    iconAnchor: [0, 0],
    // html: `${city[data]}`
  });
  marker = L.marker([city.lat, city.lng], { icon: infoIcon }).addTo(map);
  marker.bindPopup(text)
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
          className: 'astroIcon',
          iconAnchor: [40, 40],
          html: `${city.city} <br /> ${result['data'][`${dataOption}`]}`
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



//Function to get ISS live data 
let issData = () => {

  let firstTime = true;

  function run(relocate) {

    if (relocate) {      
      firstTime = true
    }

    $.ajax({
      url: "php/getISS.php",
      type: 'GET',
      async: false,
      dataType: 'json',
      success: function (result) {
        if (result.status.name == "ok") {
          markerIss.setLatLng([result.data.latitude, result.data.longitude])

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

  setInterval(run, 1000)


}




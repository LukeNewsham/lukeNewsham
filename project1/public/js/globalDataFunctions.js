//Function to astrology data marker 

let astrologyData = (point, dataOption) => {
  // let countries = []

  $.ajax({
    url: "php/getAstroInfo.php",
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
        Moonset: ${result['data']['moonrise']}`
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


//Function to add ocean marker 

let oceanData = (point) => {
  $.ajax({
    url: "php/getOceanInfo.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: point.lat,
      lng: point.lat
    },
    success: function (result) {
      if (result.status.name == "ok") {
        text = `ocean: ${result['data']['name']}`
        marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(text)
        oceanMarkers.addLayer(marker)
        $('#apiOneResultName').html(result['data']['name']);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
    }
  })
}

//Function to get ISS live data 


let firstTime = true;
let issData = (relocate) => {  

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




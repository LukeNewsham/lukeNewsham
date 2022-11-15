//---------------------------  CHOROPLETH DATA  ---------------------------

//Includes functions that gets the data for each country


function getPopulationChoroplethData(country) {

  let data = []

  $.ajax({
    url: "php/getCountryData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      country: country
    },
    success: function (result) {
      if (result.status.name == "ok") {
        try {
          if (result.data[0].population > 1000000) {
            data = result.data[0].population
          }
          // data = result.data[0].population
        } catch (err) {
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })

  return data

};


let getWeatherChoroplethData = (point, dataOption) => {

  let data = ''

  $.ajax({
    url: "php/getOpenWeatherData.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    data: {
      lat: point.lat,
      lng: point.lng
    },
    success: function (result) {

      if (result.status.name == "ok") {
        try {

          function returnData(d) {
            return d === 'temperature' ? result.data.main.temp :
              d === 'humidity' ? result.data.main.humidity :
                d === 'pressure' ? result.data.main.pressure :
                  d === 'windSpeed' ? result.data.wind.speed :
                    d === 'clouds' ? result.data.clouds.all :
                      'none';
          }




          data = returnData(dataOption)

        } catch (err) {
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })

  return data
}

let getAstrologyChoroplethData = (point, dataOption) => {

  let data = ''

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
        try {
          data = result.data[`${dataOption}`]
        } catch (err) {
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
    }
  })

  return data
}
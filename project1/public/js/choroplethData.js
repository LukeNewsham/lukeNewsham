












// //remove legend if there is one, and add new
// 

// //removes loading screen
// document.getElementById("loading").style.display = "none";

// //runs function after 1000ms to allow time for dom to update loading screen
// setTimeout(run, 1000)













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
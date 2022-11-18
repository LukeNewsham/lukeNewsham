//---------------------------  CHOROPLETH DATA  ---------------------------






function getAllCountryCenters() {

  $.ajax({
    dataType: "json",
    url: "js/countryBorders.geo.json",
    success: function (borders) {


      $(borders.features).each(function (key, border) {

        let country = border.properties.name

        let centerPoint = L.geoJson(border).getBounds().getCenter()
        GLOBAL_countryCenterPoints.push({ country, centerPoint, border })
      })

    }
  }).error(function () {
    console.log('Error')
  });


}





function getChoroplethBorders(data, dataOption) {

  //clear previous borders
  globalCountryBorders.clearLayers()
  weatherModeClose()

  document.getElementById("loading").style.display = "block";
  $('#loadingText').html('Getting data for countries...');

  $(`#temperatureGlobalButton`).css({ 'font-weight': '400' })
  $(`#windSpeedGlobalButton`).css({ 'font-weight': '400' })
  $(`#humidityGlobalButton`).css({ 'font-weight': '400' })
  $(`#dewPointGlobalButton`).css({ 'font-weight': '400' })


  $(`#sunriseGlobalButton`).css({ 'font-weight': '400' })
  $(`#sunsetGlobalButton`).css({ 'font-weight': '400' })
  $(`#moonsetGlobalButton`).css({ 'font-weight': '400' })
  $(`#moonriseGlobalButton`).css({ 'font-weight': '400' })
  $(`#day_lengthGlobalButton`).css({ 'font-weight': '400' })

  $(`#${dataOption}GlobalButton`).css({ 'font-weight': 'bolder' })

  let count = 0

  async function run() {

    let high = 0;
    let low = 0
    let results = [];
    let firstSet = true
    let count = 0

    async function loadData() {

      //for each country, get API data and push results into results. Update High and Low
      for (countryData of GLOBAL_countryCenterPoints) {


        //different api calls depending on data
        if (data === 'population') {
          let apiData = getPopulationChoroplethData(countryData.country)
          result = [countryData, apiData]
        }
        if (data === 'weather') {
          let apiData = await getWeatherChoroplethData(countryData.centerPoint, dataOption)
          result = [countryData, apiData]
          console.log(apiData)
          count += 1
        }
        if (data === 'astrology') {
          let apiData = getAstrologyChoroplethData(countryData.centerPoint, dataOption)
          result = [countryData, apiData]

        }

        if (firstSet) {
          high = parseInt(result[1]);
          low = parseInt(result[1])
          firstSet = false
        }

        console.log(count)

        if (result[1].length === undefined || typeof result[1] === 'string') {
          results.push(result)

          if (parseInt(result[1]) > high) {


            high = parseInt(result[1])
          }
          if (parseInt(result[1]) < low) {
            low = parseInt(result[1])
          }
        }
      }

      if (GLOBAL_countryCenterPoints.length === count) {
        console.log(results.length, results)
        return 1
      }
    }

    let finished = await loadData()

    console.log(high, low)

    //function to display colours for range of results
    let range = high - low

    function getColor(low, high, range, d) {

      if (dataOption === 'temperature') {
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


    //for all results, add border to map with specific colour
    for (country of results) {
      function globalBorder() {
        return {
          fillColor: getColor(low, high, range, parseInt(country[1])),
          weight: 4,
          opacity: 0.6,
          color: 'white',
          dashArray: '8',
          fillOpacity: 0.5
        }
      }

      let newGlobalCountryBorder = L.geoJson(country[0].border, { style: globalBorder });
      globalCountryBorders.addLayer(newGlobalCountryBorder);
    }

    //remove legend if there is one, and add new
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

    //removes loading screen
    document.getElementById("loading").style.display = "none";
  }

  //runs function after 1000ms to allow time for dom to update loading screen
  setTimeout(run, 1000)


}










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










let getWeatherChoroplethData = async (point, dataOption) => {

  //ADD IN PROMISE???

  let data = ''

  $.ajax({
    url: "php/getOpenWeatherData.php",
    type: 'POST',
    dataType: 'json',
    data: {
      lat: point.lat,
      lng: point.lng
    },
    success: function (result) {

      if (result.status.name == "ok") {
        try {
          console.log(result)

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
//---------------------------  PHP CALLS  ---------------------------

//These functions make calls to php to collect data from APIS




function getCountryCitiesPHP(countryIso, loadAmount) {

    let cities = []

    $.ajax({
        url: "php/getCountryCities.php",
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            iso: countryIso,
            amount: loadAmount
        },
        success: function (result) {
            if (result.status.name == "ok") {
                cities = result.data.results

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })

    return cities


}







function getCountryBorderPHP(country) {

    result = ''

    $.ajax({
        dataType: "json",
        url: "php/getCountryBorder.php",
        async: false,
        data: {
            countryName: country
        },
        success: function (border) {
            result = border['data']
        }
    }).error(function (e) {
    });

    return result
}




//Gets country data from lat and long

function getCountryFromPointPHP(point) {

    let data = []

    $.ajax({
        url: "php/getCountryFromPoint.php",
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            lat: point[0],
            lng: point[1]
        },
        success: function (result) {
            if (result.status.name == "ok") {
                data = result.data.results[0].components
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })

    return data
};







//Gets astrology data for chosen city ----------------------------------------------------------------------------------

function loadAstroDataPHP(city) {
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

                $('#sunset').html(formatTime(result.data.sunset));
                $('#sunrise').html(formatTime(result.data.sunrise));
                $('#moonrise').html(formatTime(result.data.moonrise));
                $('#moonset').html(formatTime(result.data.moonset));
                $('#currentTime').html(formatTime(result.data.current_time.slice(0, 5)));
                $('#dayLength').html(result.data.day_length.replace('0', ''));
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
};






//Gets weather data for chosen city ----------------------------------------------------------------------------------

function loadCityWeatherDataPHP(city) {

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
                $('#clouds').html(result.data.clouds.all);
                $('#humidity').html(result.data.main.humidity);
                // $('#stationName').html(result.data.weatherObservation.stationName);
                $('#temperature').html(result.data.main.temp);
                $('#temperatureMin').html(result.data.main.temp_min);
                $('#temperatureMax').html(result.data.main.temp_max);
                $('#weather').html(result.data.weather[0].main);
                $('#weatherDescription').html(result.data.weather[0].description);
                $('#pressure').html(result.data.main.pressure);
                $('#windSpeed').html(result.data.wind.speed);


            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    })
};









//Gets country data for chosen city ----------------------------------------------------------------------------------

function loadCountryDataPHP(country) {

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
                $('#population').html(Math.round((result.data[0].population) / 1000000));
                $('#flag').attr('src', `${result.data[0].flags.png}`)
                $('#searchFlag').attr('src', `${result.data[0].flags.png}`)
                $('#flagBackground').attr('src', `${result.data[0].flags.png}`)
                $('#currency').html(`${Object.values(result.data[0].currencies)[0].name} ${Object.values(result.data[0].currencies)[0].symbol}`);
                $('#subregion').html(result.data[0].subregion);
                $('#language').html(Object.values(result.data[0].languages)[0]);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    })

};
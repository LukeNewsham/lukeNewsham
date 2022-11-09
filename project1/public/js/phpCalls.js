//---------------------------  PHP CALLS  ---------------------------

//These functions make calls to php to collect data from APIS







//Gets astrology data for chosen city ----------------------------------------------------------------------------------

function getCityAstroData(city) {
    $.ajax({
        url: "php/getAstroData.php",
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            lat: city.lat,
            lng: city.lng
        },
        success: function (result) {
            if (result.status.name == "ok") {

                console.log(result.data.current_time)

                $('#sunset').html(result.data.sunset);
                $('#sunrise').html(result.data.sunrise);
                $('#moonrise').html(result.data.moonrise);
                $('#moonset').html(result.data.moonset);
                $('#currentTime').html(result.data.current_time.slice(0,5));
                $('#dayLength').html(result.data.day_length);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
};






//Gets weather data for chosen city ----------------------------------------------------------------------------------

function getCityWeatherData(city) {
    
    $.ajax({
        url: "php/getWeatherData.php",
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            lat: city.lat,
            lng: city.lng
        },
        success: function (result) {
            if (result.status.name == "ok") {
                $('#clouds').html(result.data.weatherObservation.clouds);
                $('#dewPoint').html(result.data.weatherObservation.dewPoint);
                $('#humidity').html(result.data.weatherObservation.humidity);
                $('#stationName').html(result.data.weatherObservation.stationName);
                $('#temperature').html(result.data.weatherObservation.temperature);
                $('#weatherCondition').html(result.data.weatherObservation.weatherCondition);
                $('#windDirection').html(result.data.weatherObservation.stationwindDirectionName);
                $('#windSpeed').html(result.data.weatherObservation.windSpeed);


            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    })
};









//Gets country data for chosen city ----------------------------------------------------------------------------------

function getCountryData(country) {
    
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
                $('#population').html(Math.round((result.data[0].population)/1000000));
                $('#flag').attr('src', `${result.data[0].flags.png}`)
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
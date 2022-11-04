//Get city asto data -----------------------
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

                $('#sunset').html(result.data.sunset);
                $('#sunrise').html(result.data.sunrise);
                $('#moonrise').html(result.data.moonrise);
                $('#moonset').html(result.data.moonset);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
};

//Get city weather data -----------------------
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
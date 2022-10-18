$('#apiTwoSubmit').click(function() {

    $.ajax({
        url: "php/getWeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#selectNorth').val(),
            south: $('#selectSouth').val(),
            east: $('#selectEast').val(),
            west: $('#selectWest').val()         
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            if (result.status.name == "ok") {
                $('#apiTwoResultClouds').html(result['data'][0]['clouds']);
                $('#apiTwoResultTemperature').html(result['data'][0]['temperature']);
                $('#apiTwoResultWindDirection').html(result['data'][0]['windDirection']);
                $('#apiTwoResultWindSpeed').html(result['data'][0]['windSpeed']);
            }        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});
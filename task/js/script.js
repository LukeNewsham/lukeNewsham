$('#apiOneSubmit').click(function() {

    $.ajax({
        url: "php/getOceanInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#selectLat').val(),
            lng: $('#selectLng').val()          
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            if (result.status.name == "ok") {
                $('#apiOneResultName').html(result['data']['name']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});

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

$('#apiThreeSubmit').click(function() {

    $.ajax({
        url: "php/getTimezoneInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#selectLatTimezone').val(),
            lng: $('#selectLngTimezone').val()          
        },
        success: function(result) {
            console.log(JSON.stringify(result));
            if (result.status.name == "ok") {
                $('#apiThreeResultTimezone').html(result['data']['time']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});
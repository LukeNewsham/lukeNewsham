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
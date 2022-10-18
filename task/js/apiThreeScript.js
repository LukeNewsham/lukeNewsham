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

//Get country data -----------------------
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
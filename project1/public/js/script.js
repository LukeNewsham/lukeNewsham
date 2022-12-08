// ==================================================  SET UP  ==================================================

//This section shows global variables used throughout the app, and sets up how the app will run once all scripts have loaded.



//Global Variables 
let GLOBAL_mode = 'country';
let GLOBAL_countryChosen = false;
let GLOBAL_chosenCountryCities = []
let GLOBAL_cityChosen = '';
let GLOBAL_allBordersToggle = false;
let GLOBAL_lessCitiesLoaded = false;
let GLOBAL_moreCitiesLoaded = false;
let GLOBAL_countryCenterPoints = [];
let GLOBAL_markerOption = ''
let GLOBAL_poiOption = ''
let GLOBAL_ISS = false
let GLOBAL_zoomLevel = 0
let GLOBAL_updateZoom = false;
let GLOBAL_globalWeatherData = [];
let GLOBAL_getNewZoom = true;







//Ran at the very end once all functions have loaded

document.getElementById("loadingFull").style.display = "block"


function runApp() {


    //if the user allows access to geolocation
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            userLocation.setLatLng([position.coords.latitude, position.coords.longitude])
            let loadLocation = getCountryFromPoint([position.coords.latitude, position.coords.longitude]).country
            loadCountryData(loadLocation);

        })
    } else {
        let loadLocation = 'France'
        loadCountryData(loadLocation);

    }
    // map.removeLayer(moreCityMarkers);


    getGlobalData()
    // getGlobalData()

    map.on('moveend', function () {
        updateMap()
    });

    map.on('zoomend', function () {
        if (GLOBAL_getNewZoom === true) {
            GLOBAL_zoomLevel = map.getZoom()
            GLOBAL_getNewZoom = false
        }
    });
}





















// ==================================================  LEAFLET SET UP  ==================================================

//Includes the code to set up leaflet.js as well as initial default values when first loaded


//Initiate Map 

const map = L.map('map', { zoomControl: false })




//Leaflet tiles 

tiles = {
    alidade_smooth:
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
            {
                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        ),
    Stadia_AlidadeSmoothDark:
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
            {
                maxZoom: 20,
                attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        ),
    terrain_background:
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 18,
            ext: 'png'
        }),
    Thunderforest_Neighbourhood:
        L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=11116584bfb04f57863ad3cd3e3585eb', {
            attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
}




//Adds tiles to leaflet control and adds default on first load

let baseMaps = {
    "<span class='option'> Default </span>": tiles.Thunderforest_Neighbourhood,
    "<span class='option'> Light Mode </span>": tiles.alidade_smooth,
    "<span class='option'> Dark Mode </span>": tiles.Stadia_AlidadeSmoothDark,
    "<span class='option'> Terrain Mode </span>": tiles.terrain_background
};
let layerControl = L.control.layers(baseMaps).addTo(map);
tiles.Thunderforest_Neighbourhood.addTo(map);




//Leaflet Features and Layers

let lessCityMarkers = new L.FeatureGroup();
map.addLayer(lessCityMarkers);
let moreCityMarkers = new L.FeatureGroup();
let chosenCountryCityMarker = new L.FeatureGroup();
map.addLayer(chosenCountryCityMarker);
let cityPoiMarkers = new L.FeatureGroup();
map.addLayer(cityPoiMarkers);
let globalWeatherResults = new L.FeatureGroup();
map.addLayer(globalWeatherResults);




//GeoJsonGroups

let selectedCountryBorderGroup = L.geoJson().addTo(map);
let allBordersLayerGroup = L.geoJson().addTo(map);
let hoverCountryBorder = L.geoJson().addTo(map);




//Custom Markers

let issIcon = L.icon({
    iconUrl: './images/internationalSpaceStation.png',
    iconSize: [50, 50],
    iconAnchor: [22, 94]
});
let liveLocationIcon = L.icon({
    iconUrl: './images/Navigate Icon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
});
let userLocation = L.marker([0, 0], { icon: liveLocationIcon, zIndexOffset: 900 }).addTo(map);
let markerIss = L.marker([0, 0], { icon: issIcon });




//Legend

let legend = L.control({ position: 'bottomright' });


























//==================================================  ANIMATIONS  ==================================================




//Animations for expanding and collapsing panels for different screen sizes

let expandMode = false;
$(".expandButton").click(function () {
    if (!expandMode) {
        $("#countryMode").animate({ width: '40rem', height: '90vh' });
        expandMode = true
    } else {
        $("#countryMode").animate({ width: '20rem', height: '35rem' });
        expandMode = false
    }
});

let expandMobileMode = false;
$(".upDownButton").click(function () {
    if (!expandMobileMode) {
        $("#countryMode").animate({ top: '5rem', height: '95vh' });
        $("#weatherMode").animate({ top: '5rem', height: '95vh' });
        expandMobileMode = true
    } else {
        $("#countryMode").animate({ top: '50vh', height: '50vh' });
        $("#weatherMode").animate({ top: '50vh', height: '50vh' });
        expandMobileMode = false
    }
});




//Functions to open and close mode panels. Sets defaults to false (all closed)

let countryShown = false;
let weatherShown = false;
function countryModeOpen() { countryShown = true; $("#countryMode").animate({ left: '+=50rem', }); $("#countryModeButton").css('opacity', '100%') }
function weatherModeOpen() { weatherShown = true; $("#weatherMode").animate({ right: '+=50rem', }); $("#globalModeButton").css('opacity', '100%') }
function countryModeClose() { countryShown = false; $("#countryMode").animate({ left: '-50rem' }); $("#countryModeButton").css('opacity', '20%') }
function weatherModeClose() { weatherShown = false; $("#weatherMode").animate({ right: '-50rem' }); $("#globalModeButton").css('opacity', '20%') }


//Functions to hide and show hover buttons over countries

function hideHoverButtons() { $("#searchCenter").css('display', 'none'); $("#zoomIn").css('display', 'none'); }
function showHoverButtons() { $("#searchCenter").css('display', 'flex'); }




//Opens up country search mode panel and closes global search mode panel on button press

$("#countryModeButton").click(function () {
    document.getElementById("centerReticle").style.display = "flex"
    document.getElementById("mapButtons").style.display = "flex"
    document.getElementById("countrySearch").style.display = "flex"

    GLOBAL_mode = 'country';
    map.addLayer(chosenCountryCityMarker)
    map.addLayer(lessCityMarkers)
    map.addLayer(hoverCountryBorder)
    map.addLayer(selectedCountryBorderGroup)
    map.addLayer(cityPoiMarkers)

    map.removeLayer(globalWeatherResults)
    legend.remove()

    map.removeLayer(tiles.alidade_smooth)
    map.removeLayer(tiles.Stadia_AlidadeSmoothDark)
    map.removeLayer(tiles.Thunderforest_Neighbourhood)
    tiles.Thunderforest_Neighbourhood.addTo(map);

    showHoverButtons()

    GLOBAL_ISS = false
    map.removeLayer(markerIss)

    if (!countryShown) {
        countryModeOpen()
        weatherModeClose()
    } else {
        countryModeClose()
    }
});




//Opens up global search mode panel and closes country search search mode panel on button press

$("#globalModeButton").click(function () {

    loadGlobalData('temperature')

    document.getElementById("centerReticle").style.display = "none"
    document.getElementById("mapButtons").style.display = "none"
    document.getElementById("countrySearch").style.display = "none"

    GLOBAL_mode = 'globe';
    map.removeLayer(lessCityMarkers)
    map.removeLayer(moreCityMarkers)
    map.removeLayer(selectedCountryBorderGroup)
    map.removeLayer(hoverCountryBorder)
    map.removeLayer(chosenCountryCityMarker)
    map.removeLayer(cityPoiMarkers)

    map.addLayer(globalWeatherResults)
    // map.addLayer(legend)

    map.removeLayer(tiles.alidade_smooth)
    map.removeLayer(tiles.Stadia_AlidadeSmoothDark)
    map.removeLayer(tiles.Thunderforest_Neighbourhood)
    tiles.alidade_smooth.addTo(map);

    hideHoverButtons()

    if (!weatherShown) {
        weatherModeOpen()
        countryModeClose()
    } else {
        weatherModeClose()
    }
});




//Changes tab for country panel 

function cityPoiTabOpen() {
    $("#cityData").css('display', 'none')
    $("#cityPois").css('display', 'flex')
    $("#cityPoisTab").css('background-color', 'white')
    $("#cityDataTab").css('background-color', 'transparent')
}

function cityDataTabOpen() {
    $("#cityPois").css('display', 'none')
    $("#cityData").css('display', 'flex')
    $("#cityDataTab").css('background-color', 'white')
    $("#cityPoisTab").css('background-color', 'transparent')
}

$("#cityDataTab").click(function () {
    cityDataTabOpen()
});

$("#cityPoisTab").click(function () {
    cityPoiTabOpen()
});




//Changes tab for global panel 

$("#issTab").click(function () {
    $("#globalWeather").css('display', 'none')
    $("#iss").css('display', 'flex')
    $("#issTab").css('background-color', 'white')
    $("#globalWeatherTab").css('background-color', 'transparent')
});

$("#globalWeatherTab").click(function () {
    $("#iss").css('display', 'none')
    $("#globalWeather").css('display', 'flex')
    $("#globalWeatherTab").css('background-color', 'white')
    $("#issTab").css('background-color', 'transparent')
});









//==================================================  DATA MARKERS  ==================================================





let getAllCountryData = (chosenCountry, countryIso, loadAmount) => {

    if (countryIso === 'GB') {
        countryIso = 'UK'
    }

    async function countryData() {
        let result = $.ajax({
            url: "php/getAllCountryData.php",
            type: 'POST',
            dataType: 'json',
            data: {
                country: chosenCountry,
                iso: countryIso,
                amount: loadAmount
            }
        })

        return result
    }

    async function wait() {
        let result = await countryData()
        return result
    }

    return wait()

}




//Creates and returns a city POI marker  

let cityPoiMarker = (poi, number) => {
    let lat = poi.coordinates.latitude
    let lng = poi.coordinates.longitude
    let poiMarker = L.divIcon({
        className: 'poiMarker',
        iconAnchor: [0, 0],
        html: `${number}`
    });
    marker = L.marker([lat, lng], { icon: poiMarker }).addTo(map).on('click', function (e) {
        window.location.hash = `#${poi.name}`
        if (countryShown === false) {
            countryModeOpen()
            cityPoiTabOpen()
        };
    }).bindPopup(`${poi.name}`);
    //returns marker to be used
    return marker
}





//==================================================  EVENT LISTENER FUNCTIONS  ==================================================



//Updates weather buttons depending on what was pressed

$('#weatherCountryButton').click(function () {
    updateMapWeatherData('.conditionResult', '#weatherCountryButton')
});
$('#temperatureCountryButton').click(function () {
    updateMapWeatherData('.tempResult', '#temperatureCountryButton')
});
$('#humidityCountryButton').click(function () {
    updateMapWeatherData('.humidityResult', '#humidityCountryButton')
});
$('#pressureCountryButton').click(function () {
    updateMapWeatherData('.pressureResult', '#pressureCountryButton')
});
$('#cloudsCountryButton').click(function () {
    updateMapWeatherData('.cloudsResult', '#cloudsCountryButton')
});
$('#windCountryButton').click(function () {
    updateMapWeatherData('.windResult', '#windCountryButton')
});




//Updates POI buttons depending on what was pressed

$('#sightseeingPoiButton').click(function () {
    loadCityPois(GLOBAL_cityChosen[0].name, `sightseeing`, true)
    cityPoiTabOpen()
});
$('#eatingoutPoiButton').click(function () {
    loadCityPois(GLOBAL_cityChosen[0].name, `eatingout`, true)
    cityPoiTabOpen()
});
$('#shoppingPoiButton').click(function () {
    loadCityPois(GLOBAL_cityChosen[0].name, `shopping`, true)
    cityPoiTabOpen()
});
$('#doPoiButton').click(function () {
    loadCityPois(GLOBAL_cityChosen[0].name, `do`, true)
    cityPoiTabOpen()
});




//Adds chosen country data   

$('#countriesList').change(function () {
    countryChosen = $('#countriesList')[0].value
    loadCountryData(countryChosen)
});




//Adds chosen city data 

$('#countryCitiesList').change(function () {
    $('#countryModeData').fadeOut();
    chosenCountryCityMarker.clearLayers()
    countryCity = GLOBAL_chosenCountryCities.filter(city => city[0].name === $('#countryCitiesList')[0].value)
    loadCityData(countryCity[0], true)
    $('#countryModeData').fadeIn();
});




//Relocates to current location 

$('#findLocation, #findLocationMobile').click(function () {
    relocate('live')
});




//Relocate to chosen city 

$('#locateCity, #locateCityButton').click(function () {
    relocate('city')
});




//Adds all borders 

$('#allBorders, #allBordersMobile').click(function () {
    toggleBorders()
});




//Search country from map hover

$('#searchCenter').click(function () {
    let locationData = getCountryFromPoint([map.getCenter().lat, map.getCenter().lng])
    let locationCountry = locationData.country
    loadCountryData(locationCountry);
});




//Add or remove ISS Space Station 

$('#getISS').click(function () {
    GLOBAL_ISS = true
    loadISSLocation()
});


$('#stopISS').click(function () {
    GLOBAL_ISS = false
    map.removeLayer(markerIss)
});




//Adds chosen poi category data   

$('#poiList').change(function () {
    let poiChosen = $('#poiList')[0].value
    loadCityPois(GLOBAL_cityChosen[0].name, poiChosen, true)
});




//Shows more or less country data 

let moreCountryDataToggle = false;
$('#moreCountryData').click(function () {
    if (!moreCountryDataToggle) {
        $("#countryData").animate({ height: '20rem' })
        $("#moreCountryData").html('Show less')
        moreCountryDataToggle = true
    } else {
        $("#countryData").animate({ height: '0rem' })
        $("#moreCountryData").html('Show more')
        moreCountryDataToggle = false
    }
});




//Shows selected global data  

$('#globalWeatherList').change(function () {
    let weatherChosen = $('#globalWeatherList')[0].value
    loadGlobalData(weatherChosen)
});































//================================================== GENERAL FUNCTIONS  ==================================================










//Function to load list of countries  

function getGlobalData() {
    let select = document.getElementById("countriesList");
    let filteredCities = []
    let option = '';

    let allCountries = getAllCountries('all')

    for (let i = 0; i < allCountries.length; i++) {
        option = allCountries[i];
        let name = option['properties']['name']

        if (!filteredCities.includes(name)) {
            let element = document.createElement("option");
            element.textContent = name;
            element.value = name;
            select.appendChild(element);
        }
        filteredCities.push(name);
    }
    let allCountriesWithCenters = []

    $(allCountries).each(function (key, country) {
        let centerPoint = L.geoJson(country).getBounds().getCenter()
        allCountriesWithCenters.push([centerPoint.lat, centerPoint.lng, country.properties.name])
    })


    $.ajax({
        url: "php/getGlobalData.php",
        type: 'POST',
        dataType: 'json',
        data: {
            countries: allCountriesWithCenters
        },
        success: function (result) {
            document.getElementById("loadingGlobal").style.display = "none"

            if (result.status.name == "ok") {
                $(allCountries).each(function (key, country) {
                    $(result['data']).each(function (key, countryData) {
                        if (country.properties.name === countryData[1]) {
                            GLOBAL_globalWeatherData.push([countryData[0], countryData[1], country])
                        }
                    })
                })
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
}







//Function to relocate map

function relocate(option) {
    if ('geolocation' in navigator && option === 'live') {
        //sets global variables to location, moves view and updates userLocation marker
        navigator.geolocation.getCurrentPosition(position => {
            userLocation.setLatLng([position.coords.latitude, position.coords.longitude])
            map.setView([position.coords.latitude, position.coords.longitude])
        })
    }
    if (option === 'city') {
        map.setView([GLOBAL_cityChosen[0].coordinates.latitude, GLOBAL_cityChosen[0].coordinates.longitude], 11)
    }
}







//Function which loads selected country data

function loadCountryData(countryChosen) {
    document.getElementById("loading").style.display = "block"
    document.getElementById("mapButtons").style.display = "none"
    document.getElementById("countrySearch").style.display = "none"
    document.getElementById("buttonPanel").style.display = "none"
    countryModeClose()

    async function run() {

        moreLoaded = false;

        //load borders       
        loadBorder(countryChosen, true, 'selected')

        //Updates global variables and resets map layers
        GLOBAL_countryChosen = countryChosen;
        $('#countriesList')[0].value = countryChosen
        $('#chosenCountry').html(countryChosen);
        GLOBAL_getNewZoom = true;

        //clears all borders and re adds without chosen country
        map.removeLayer(allBordersLayerGroup)
        chosenCountryCityMarker.clearLayers()
        lessCityMarkers.clearLayers()
        moreCityMarkers.clearLayers()
        GLOBAL_lessCitiesLoaded = false;
        GLOBAL_moreCitiesLoaded = false;

        //load borders       
        loadBorder(countryChosen, true, 'selected')

        //get country data from php
        let countryProp = countryChosen.replace(" ", "%20")
        let isoProp = getCountryFromGeoJson(countryChosen).properties.iso_a2

        let resultData = await getAllCountryData(countryProp, isoProp, 40)

        //save country data into variables
        GLOBAL_chosenCountryCities = resultData.cities
        let astrologyData = resultData.astrology
        let countryData = resultData.country[0]

        //update selected country data 
        function formatTime(original) {
            let [originalHour, originalMin] = original.split(":")
            let hour = parseInt(originalHour.replace('0', '')) % 12;
            if (hour === 0) hour = 12;
            return hour + `:${originalMin}` + (original < 12 ? ' am' : ' pm');
        }
        $('#population').html(Math.round((countryData.population) / 1000000));
        $('#flag').attr('src', `${countryData.flags.png}`)
        $('#searchFlag').attr('src', `${countryData.flags.png}`)
        $('#flagBackground').attr('src', `${countryData.flags.png}`)
        $('#currency').html(`${Object.values(countryData.currencies)[0].name} ${Object.values(countryData.currencies)[0].symbol}`);
        $('#subregion').html(countryData.subregion);
        $('#language').html(Object.values(countryData.languages)[0]);
        $('#sunset').html(formatTime(astrologyData.sunset));
        $('#sunrise').html(formatTime(astrologyData.sunrise));
        $('#moonrise').html(formatTime(astrologyData.moonrise));
        $('#moonset').html(formatTime(astrologyData.moonset));
        $('#currentTime').html(formatTime(astrologyData.current_time.slice(0, 5)));
        $('#dayLength').html(astrologyData.day_length.replace('0', ''));

        //update county city list
        let select = document.getElementById("countryCitiesList");
        let option = '';
        select.innerHTML = '0';
        for (var i = 0; i < GLOBAL_chosenCountryCities.length; i++) {
            option = GLOBAL_chosenCountryCities[i];
            let element = document.createElement("option");
            element.textContent = option[1].name;
            element.value = option[1].name;
            select.appendChild(element);
        }

        //load country city markers
        moreCityMarkers.clearLayers()
        lessCityMarkers.clearLayers()
        loadCityMarkers(GLOBAL_chosenCountryCities, 'less')

        //load selected city data (first by default)
        loadCityData(GLOBAL_chosenCountryCities[0])

        //reset zoom level to fit bounds
        GLOBAL_zoomLevel = map.getZoom()

        document.getElementById("loading").style.display = "none"
        document.getElementById("mapButtons").style.display = "flex"
        document.getElementById("countrySearch").style.display = "flex"
        document.getElementById("buttonPanel").style.display = "flex"

        updateMapWeatherData('.conditionResult', '#weatherCountryButton')
    }
    //runs function after 1000ms to allow time for dom to update loading screen
    setTimeout(run, 1000)
}






//Function which loads chosen city data  

function loadCityData(city, relocate) {

    if (relocate) {
        map.setView([city[0].coordinates.latitude, city[0].coordinates.longitude])
    }

    $('#snippet').html(city[0].snippet);
    $('#cityDescription').html(city[0].generated_intro);

    GLOBAL_cityChosen = city

    let images = city[0].images;
    let select = document.getElementById("cityImages");

    select.innerHTML = ''

    for (let i = 0; i < images.length; i++) {
        let imgElementDiv = document.createElement("div");
        imgElementDiv.className = 'imgElementDiv'

        let imgElement = document.createElement("img");
        imgElement.className = 'cityImage';
        imgElement.src = city[0].images[i].sizes.medium.url;
        imgElementDiv.appendChild(imgElement);

        let pElement = document.createElement("p");
        let html = document.createTextNode(`${city[0].images[i].caption}`)
        pElement.appendChild(html)
        imgElementDiv.appendChild(pElement);

        select.appendChild(imgElementDiv);
    }

    //add selected city marker
    let tempResult = city[1].main.temp
    let humidityResult = city[1].main.humidity
    let pressureResult = city[1].main.pressure
    let cloudsResult = city[1].clouds.all
    let windResult = city[1].wind.speed

    let infoIcon = L.divIcon({
        className: 'infoMarker selected',
        iconAnchor: [0, 0],
        html: `<p> <img src="./images/Magnifier Icon.png" alt="Navigate Icon" class="selectedIcon" /> ${(city[0].name)}
      <span class='tempResult'> ${tempResult}&degC </span> 
      <span class='humidityResult'> ${humidityResult}% </span>
      <span class='pressureResult'> ${pressureResult}hPa </span>
      <span class='cloudsResult'> ${cloudsResult}% </span>
      <span class='windResult'> ${windResult}m/s </span>
      <img src="${conditionResult}" alt="Weather Condition" class="conditionResult" />
      </p>`
    });
    marker = L.marker([city[0].coordinates.latitude, city[0].coordinates.longitude], { icon: infoIcon }).addTo(map).on('click', function (e) {
        GLOBAL_issRun = false;
        chosenCountryCityMarker.clearLayers()
        $('#countryCitiesList')[0].value = city[0].name
        window.location.hash = "#citySearch";
    });

    chosenCountryCityMarker.addLayer(marker)

    function weatherIcon() {
        return city[1].weather[0].main === 'Haze' ? './images/Weather/Haze.png' :
            city[1].weather[0].main === 'Fog' ? './images/Weather/Fog.png' :
                city[1].weather[0].main === 'Rain' ? './images/Weather/Rain.png' :
                    city[1].weather[0].main === 'Clear' ? './images/Weather/Sun.png' :
                        city[1].weather[0].main === 'Mist' ? './images/Weather/Mist.png' :
                            city[1].weather[0].main === 'Clouds' ? './images/Weather/Clouds.png' :
                                city[1].weather[0].main === 'Storm' ? './images/Weather/Storm.png' :
                                    city[1].weather[0].main === 'Snow' ? './images/Weather/Snow.png' :
                                        '';
    }

    $('#clouds').html(city[1].clouds.all);
    $('#humidity').html(city[1].main.humidity);
    $('#temperature').html(city[1].main.temp);
    $('#temperatureMin').html(city[1].main.temp_min);
    $('#temperatureMax').html(city[1].main.temp_max);
    $('#weather').html(city[1].weather[0].main);
    $('#weatherDescription').html(city[1].weather[0].description);
    $('#pressure').html(city[1].main.pressure);
    $('#windSpeed').html(city[1].wind.speed);
    $('#weatherConditionIcon').attr('src', `${weatherIcon()}`)

    loadCityPois(city[0].name, 'sightseeing', false)
}





//Function which loads chosen city points of interest 

function loadCityPois(cityName, tagName, relocate) {

    updateMapPoiData(`#${tagName}PoiButton`)
    cityPoiMarkers.clearLayers()
    let pois = []
    pois = getCityPois(cityName, tagName)



    //Updates poi listings
    let select = document.getElementById("cityPoisData");
    select.innerHTML = ''

    if (pois[0]) {

        if (relocate) {
            map.setView([pois[0].coordinates.latitude, pois[0].coordinates.longitude], 15)
        }

        for (let i = 0; i < pois.length; i++) {

            cityPoiMarkers.addLayer(cityPoiMarker(pois[i], i + 1))
            let imgElementDiv = document.createElement("div");
            imgElementDiv.className = 'imgElementDiv'
            select.appendChild(imgElementDiv);

            let h2Element = document.createElement("h2");
            h2Element.appendChild(document.createTextNode(`${i + 1}: ${pois[i].name}`))
            h2Element.className = 'cityPoiTitle';
            h2Element.id = `${pois[i].name}`
            imgElementDiv.appendChild(h2Element);

            let snippetElement = document.createElement("p");
            snippetElement.appendChild(document.createTextNode(`${pois[i].generated_snippet}`))
            snippetElement.className = 'cityPoiTitle';
            snippetElement.id = `${pois[i].name}`
            imgElementDiv.appendChild(snippetElement);

            if (pois[i].images[0]) {
                let imgElement = document.createElement("img");
                imgElement.className = 'cityImage';
                imgElement.src = pois[i].images[0].sizes.medium.url;
                imgElementDiv.appendChild(imgElement);
            }

            let pElement = document.createElement("p");
            pElement.appendChild(document.createTextNode(`${pois[i].generated_intro}`))
            imgElementDiv.appendChild(pElement);

            let locateElement = document.createElement("img");
            locateElement.className = 'locateElement';
            locateElement.src = "./images/Magnifier Icon.png";
            locateElement.onclick = function () { map.setView([pois[i].coordinates.latitude, pois[i].coordinates.longitude], 15); window.location.hash = `#${pois[i].name}` }
            imgElementDiv.appendChild(locateElement);
        }

    } else {
        let h2Element = document.createElement("h2");
        h2Element.appendChild(document.createTextNode(`No Points of Interest`))
        h2Element.className = 'cityPoiTitle';
        select.appendChild(h2Element);
    }

}




//Function which loads city markers for chosen country

function loadCityMarkers(citiesData, layer) {

    let count = 0;

    function addMarker(cityData) {
        let weatherData = cityData[1]
        let tempResult = weatherData.main.temp
        let humidityResult = weatherData.main.humidity
        let pressureResult = weatherData.main.pressure
        let cloudsResult = weatherData.clouds.all
        let windResult = weatherData.wind.speed
        function weatherIcon() {
            return weatherData.weather[0].main === 'Haze' ? './images/Weather/Haze.png' :
                weatherData.weather[0].main === 'Fog' ? './images/Weather/Fog.png' :
                    weatherData.weather[0].main === 'Rain' ? './images/Weather/Rain.png' :
                        weatherData.weather[0].main === 'Clear' ? './images/Weather/Sun.png' :
                            weatherData.weather[0].main === 'Mist' ? './images/Weather/Mist.png' :
                                weatherData.weather[0].main === 'Clouds' ? './images/Weather/Clouds.png' :
                                    weatherData.weather[0].main === 'Storm' ? './images/Weather/Storm.png' :
                                        weatherData.weather[0].main === 'Snow' ? './images/Weather/Snow.png' :
                                            weatherData.weather[0].main === 'Drizzle' ? './images/Weather/Rain.png' :
                                                '';
        }
        conditionResult = weatherIcon()
        let infoIcon = L.divIcon({
            className: 'infoMarker',
            iconAnchor: [0, 0],
            html:
                `<p> ${(cityData[0]['name'])}
  <span class='tempResult'> ${tempResult}&degC </span> 
  <span class='humidityResult'> ${humidityResult}% </span>
  <span class='pressureResult'> ${pressureResult}hPa </span>
  <span class='cloudsResult'> ${cloudsResult}% </span>
  <span class='windResult'> ${windResult}m/s </span>
  <img src="${conditionResult}" alt="Weather Condition" class="conditionResult" />
  </p>`
        });

        let i = count
        let marker = L.marker([cityData[0]['coordinates']['latitude'], cityData[0]['coordinates']['longitude']], { icon: infoIcon }).addTo(map).on('click', function (e) {

            GLOBAL_issRun = false;
            chosenCountryCityMarker.clearLayers()
            $('#countryCitiesList')[0].value = citiesData[i][0]['name']
            loadCityData(citiesData[i])
            if (countryShown === false) {
                countryModeOpen()
            };
            window.location.hash = "#citySearch";
        });

        count++
        return marker
    }

    if (layer === 'less') {
        count = 0;
        for (let z = 0; z < 5; z++) {
            lessCityMarkers.addLayer(addMarker(citiesData[z]))
        }
    }


    if (layer === 'more') {
        count = 0
        for (let z = 0; z < citiesData.length; z++) {
            moreCityMarkers.addLayer(addMarker(citiesData[z]))
        }
    }

}





//Function to load border

function loadBorder(country, fitToScreen, mode) {
    hoverCountryBorder.clearLayers();
    allBordersLayerGroup.clearLayers()

    //ADD ALL BORDERS BUT SELECTED TO ALL BORDERS LAYER

    //border style for select country on hover
    function generalBorder() {
        return {
            fillColor: 'lightBlue',
            weight: 4,
            opacity: 1,
            color: 'rgb(101, 101, 101)',
            dashArray: '8',
            fillOpacity: 0.5
        }
    }

    //border style for chosen country and toggle
    function generalBorder() {
        return {
            fillColor: 'lightBlue',
            weight: 4,
            opacity: 1,
            color: 'rgb(101, 101, 101)',
            dashArray: '8',
            fillOpacity: 0
        }
    }

    //border style for select country on hover
    function hoverBorder() {
        return {
            fillColor: 'lightBlue',
            weight: 4,
            opacity: 1,
            color: 'rgb(101, 101, 101)',
            dashArray: '8',
            fillOpacity: 0.5
        }
    }

    let border = getCountryFromGeoJson(country)
    let newGeneralBorder = L.geoJson(border, { style: generalBorder });
    let newHoverBorder = L.geoJson(border, { style: hoverBorder });

    if (mode === 'selected') {
        selectedCountryBorderGroup.clearLayers();
        selectedCountryBorderGroup.addLayer(newGeneralBorder);
        if (fitToScreen) {
            map.fitBounds(newGeneralBorder.getBounds(), { padding: [20, 20] });
            document.getElementById("loadingFull").style.display = "none"
        }
    }
    if (mode === 'hover') {
        hoverCountryBorder.addLayer(newHoverBorder);
    }

    //Gets geo.json file and adds all borders
    $.ajax({
        dataType: "json",
        url: "js/countryBorders.geo.json",
        data: {
            country: country
        },
        success: function (borders) {

            //for each border within geo.json
            $(borders.features).each(function (key, border) {

                if (border.properties.name !== country) {
                    let newGeneralBorder = L.geoJson(border, { style: generalBorder });
                    allBordersLayerGroup.addLayer(newGeneralBorder);
                }
            });
        }
    }).error(function () {
        console.log('Error')
    });

}



//Function to load ISS live location

function loadISSLocation() {

    let firstTime = true;

    function run() {

        //checks if global variable is true (used to stop getting data during other modes)
        if (GLOBAL_ISS === true) {

            chosenCountryCityMarker.clearLayers()
            lessCityMarkers.clearLayers()

            let location = getIssLocation()

            let lat = location[0]
            let lng = location[1]

            //update iss marker location and add lat lng to astro panel
            markerIss.addTo(map);
            markerIss.setLatLng([lat, lng])
            $('#astroLat').html(Math.round(lat * 1000) / 1000);
            $('#astroLng').html(Math.round(lng * 1000) / 1000);

            let issOverLocation = getCountryFromPoint([lat, lng])

            if (issOverLocation.body_of_water) {
                $('#issOver').html(`${issOverLocation.body_of_water}`);
            } else {
                $('#issOver').html(`${issOverLocation.country}`);
            }

            //update view if firstTime or relocate is true
            if (firstTime) {
                map.setView([lat, lng], 4);
                firstTime = false;
            }
        }
    }
    setInterval(run, 1000)
}





//Function which toggles all country borders 

function toggleBorders() {

    if (!GLOBAL_allBordersToggle) {
        map.addLayer(allBordersLayerGroup)
        $("#allBorders").css('border', '2px solid black')
    } else {
        map.removeLayer(allBordersLayerGroup)
        $("#allBorders").css('border', '2px solid white')
    }

    GLOBAL_allBordersToggle = !GLOBAL_allBordersToggle
}



let moreLoaded = false;
//Function which updates map on move 

function updateMap() {

    //Updates map if in country mode
    if (GLOBAL_mode === 'country') {

        //Finds country currently hovering on
        let centerCountry = getCountryFromPoint([map.getCenter().lat, map.getCenter().lng]).country

        //Updates map depending on wether hovering over new country
        if (centerCountry !== GLOBAL_countryChosen) {
            document.getElementById("searchCenter").style.display = "flex"
            document.getElementById("zoomIn").style.display = "none"
            document.getElementById("centerReticle").style.display = "flex"
            loadBorder(centerCountry, false, 'hover')
        } else {
            document.getElementById("searchCenter").style.display = "none"
            document.getElementById("zoomIn").style.display = "flex"
            document.getElementById("centerReticle").style.display = "none"
            loadBorder('none', false, 'hover')
        }

        //ZOOM MODE 1
        if (map.getZoom() <= GLOBAL_zoomLevel - 2) {
            countryModeClose()
            $('#searchCenterCountry').html(centerCountry);
            map.removeLayer(lessCityMarkers);
            map.removeLayer(moreCityMarkers);
        };

        //ZOOM MODE 2  
        if (map.getZoom() > GLOBAL_zoomLevel - 2 && map.getZoom() < GLOBAL_zoomLevel + 1) {
            $('#searchCenterCountry').html(centerCountry);
            map.removeLayer(moreCityMarkers);
            map.addLayer(lessCityMarkers);
            $(GLOBAL_markerOption).css('display', 'block')
        };

        //ZOOM MODE 3
        if (map.getZoom() >= GLOBAL_zoomLevel + 1 && centerCountry) {
            if (!moreLoaded) {
                loadCityMarkers(GLOBAL_chosenCountryCities, 'more')
                moreLoaded = true
            }
            $('#searchCenterCountry').html(centerCountry);
            map.removeLayer(lessCityMarkers);
            map.addLayer(moreCityMarkers);
            $(GLOBAL_markerOption).css('display', 'block')
        };
    } else {
        map.removeLayer(lessCityMarkers)
        map.removeLayer(moreCityMarkers)
    }
}



//Function which updates what weather data is shown on city markers

function updateMapWeatherData(className, idName) {

    if (GLOBAL_markerOption !== className) {
        $(".conditionResult").css('display', 'none')
        $(".tempResult").css('display', 'none')
        $(".humidityResult").css('display', 'none')
        $(".pressureResult").css('display', 'none')
        $(".cloudsResult").css('display', 'none')
        $(".windResult").css('display', 'none')
        $(`${className}`).css('display', 'block')

        $("#weatherCountryButton").css('border', '2px solid white')
        $("#temperatureCountryButton").css('border', '2px solid white')
        $("#humidityCountryButton").css('border', '2px solid white')
        $("#pressureCountryButton").css('border', '2px solid white')
        $("#cloudsCountryButton").css('border', '2px solid white')
        $("#windCountryButton").css('border', '2px solid white')
        $(`${idName}`).css('border', '2px solid black')

        GLOBAL_markerOption = className
    } else {
        $(`${className}`).css('display', 'none')
        $(`${idName}`).css('border', '2px solid white')
        GLOBAL_markerOption = ''
    }
}



//Function which updates which city POIs are shown

function updateMapPoiData(idName) {
    if (GLOBAL_poiOption !== idName) {
        $("#sightseeingPoiButton").css('border', '2px solid white')
        $("#shoppingPoiButton").css('border', '2px solid white')
        $("#eatingoutPoiButton").css('border', '2px solid white')
        $("#doPoiButton").css('border', '2px solid white')
        $(`${idName}`).css('border', '2px solid black')
        GLOBAL_poiOption = idName
    }
}



//Function which loads global weather data

function loadGlobalData(type) {
    results = GLOBAL_globalWeatherData
    globalWeatherResults.clearLayers()
    legend.remove()

    function getHigh(weather) {
        return weather === 'temperature' ? 40 :
            weather === 'clouds' ? 100 :
                weather === 'pressure' ? 1050 :
                    weather === 'humidity' ? 100 :
                        weather === 'windSpeed' ? 20 :
                            '';
    }

    function getLow(weather) {
        return weather === 'temperature' ? -40 :
            weather === 'clouds' ? 0 :
                weather === 'pressure' ? 950 :
                    weather === 'humidity' ? 0 :
                        weather === 'windSpeed' ? 0 :
                            '';
    }

    let high = getHigh(type)
    let low = getLow(type)
    let range = high - low

    function getColor(low, high, range, d) {
        if (type === 'temperature') {
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

    function getSymbol(weather) {
        return weather === 'temperature' ? ' C' :
            weather === 'clouds' ? '%' :
                weather === 'pressure' ? 'hPa' :
                    weather === 'humidity' ? '%' :
                        weather === 'windSpeed' ? 'm/s' :
                            '';
    }

    function getSortedBy(weather) {
        return weather === 'temperature' ? results.sort((a, b) => b[0].main.temp - a[0].main.temp) :
            weather === 'clouds' ? results.sort((a, b) => b[0].clouds.all - a[0].clouds.all) :
                weather === 'pressure' ? results.sort((a, b) => b[0].main.pressure - a[0].main.pressure) :
                    weather === 'humidity' ? results.sort((a, b) => b[0].main.humidity - a[0].main.humidity) :
                        weather === 'windSpeed' ? results.sort((a, b) => b[0].wind.speed - a[0].wind.speed) :
                            '';
    }

    let sortedResults = getSortedBy(type)
    let select = document.getElementById("globalResults");
    select.innerHTML = ''

    for (country of sortedResults) {
        function resultDataNavigate(weather) {
            return weather === 'temperature' ? country[0].main.temp :
                weather === 'clouds' ? country[0].clouds.all :
                    weather === 'pressure' ? country[0].main.pressure :
                        weather === 'humidity' ? country[0].main.humidity :
                            weather === 'temperature' ? country[0].main.temp :
                                weather === 'windSpeed' ? country[0].wind.speed :
                                    '';
        }

        function globalBorder() {
            return {
                fillColor: getColor(low, high, range, parseInt(resultDataNavigate(type))),
                weight: 4,
                opacity: 0.6,
                color: 'white',
                dashArray: '8',
                fillOpacity: 0.5
            }
        }

        let div = document.createElement("div");
        div.className = 'countryModeData';

        let countryName = document.createElement("h2");
        countryName.className = 'dataName'
        countryName.appendChild(document.createTextNode(`${country[1]}`))
        div.appendChild(countryName);

        let countryResult = document.createElement('span')
        countryResult.appendChild(document.createTextNode(`${resultDataNavigate(type)} ${getSymbol(type)}`))
        div.appendChild(countryResult);

        select.appendChild(div);

        let border = L.geoJson(country[2], { style: globalBorder });
        globalWeatherResults.addLayer(border);
    }

}


























//==================================================  PHP CALL FUNCTIONS  ==================================================






function getCityPois(cityName, tagName) {
    let pois = []
    $.ajax({
        url: "php/getCityPois.php",
        type: 'POST',
        dataType: 'json',
        async: false,
        data: {
            city: cityName,
            tag: tagName
        },
        success: function (result) {
            if (result.status.name == "ok") {
                pois = result.data.results
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    })
    return pois
}




function getCountryFromGeoJson(country) {
    result = ''
    $.ajax({
        dataType: "json",
        url: "php/getCountriesFromGeoJson.php",
        async: false,
        data: {
            countries: country
        },
        success: function (country) {
            result = country['data'][0]
        }
    }).error(function (e) {
    });
    return result
}




function getAllCountries(countries) {
    result = ''
    $.ajax({
        dataType: "json",
        url: "php/getCountriesFromGeoJson.php",
        async: false,
        data: {
            countries: countries
        },
        success: function (countries) {
            result = countries['data']
        }
    }).error(function (e) {
    });
    return result
}




function getCountryFromPoint(point) {
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







function getIssLocation() {
    let location = []
    $.ajax({
        url: "php/getISS.php",
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (result) {
            if (result.status.name == "ok") {
                location = [result.data.latitude, result.data.longitude]
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    })
    return location
}











// ==================================================  APP SET UP ... CONTINUED  ==================================================

setTimeout(runApp, 1000)






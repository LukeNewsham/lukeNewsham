//---------------------------  SCRIPT  ---------------------------

//Loads functions on start up and sets functions for leaflet use






//Loads users location and country data, opens country mode panel and  ----------------------------------------------------------------------------------

findLocation()

setTimeout(function () {
    map.on('zoomend', function () {
        loadMapMarkers()
    });
    map.on('moveend', function () {
        loadMapMarkers()
    });
}, 2000)



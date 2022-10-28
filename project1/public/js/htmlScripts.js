function loadCountryList() {
    console.log('running')
    let select = document.getElementById("countriesList");
    let cityList = cities;
    let filteredCities = []

    for (var i = 0; i < cityList.length; i++) {
        var option = cityList[i].country;
        filteredCities.push[option];

        if (!filteredCities[option]) {
            var element = document.createElement("option");
            element.textContent = option;
            element.value = option;
            select.appendChild(element);
        }
    }
}


loadCountryList()




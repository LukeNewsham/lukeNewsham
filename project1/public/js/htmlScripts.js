function loadCountryList() {
    console.log('running')
    let select = document.getElementById("countriesList");
    let cityList = cities;
    let filteredCities = []
    let option = '';

    for (var i = 0; i < cityList.length; i++) {
        option = cityList[i].country;

        if (!filteredCities.includes(option)) {
            let element = document.createElement("option");
            element.textContent = option;
            element.value = option;
            select.appendChild(element);
        }
        filteredCities.push(option);
    }
}

loadCountryList()


function loadCountryCityList(country) {
    let select = document.getElementById("countryCitiesList");
    let cityList = cities;
    let option = '';

    select.innerHTML = '0';
    console.log(select.innerHTML)

    // for (var i = 0; i < select.options.length; i++) { 
    //     console.log(select.options.length)
    //     select.options[i].remove()
    // }

    for (var i = 0; i < cityList.length; i++) {
        option = cityList[i];

        if (option.country === country) {
            let element = document.createElement("option");
            element.textContent = option.city;
            element.value = option.city;
            select.appendChild(element);
        }
    }
}




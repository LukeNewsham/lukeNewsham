//---------------------------  HTML FUNCTIONS  ---------------------------

//Includes functions which are used to load DOM elements








//Adds country list to country dataset ----------------------------------------------------------------------------------

function loadCountryList() {
    let select = document.getElementById("countriesList");
    let filteredCities = []
    let option = '';

    for (var i = 0; i < countryIsoCodes.length; i++) {
        option = countryIsoCodes[i].Name;

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





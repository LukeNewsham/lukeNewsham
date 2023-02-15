
<img src="https://user-images.githubusercontent.com/95356508/218489486-c59d28b1-be4f-4e42-b7f9-ab0ba302695f.png" data-canonical-src="https://user-images.githubusercontent.com/95356508/218489486-c59d28b1-be4f-4e42-b7f9-ab0ba302695f.png" width="300" />

# Gazetteer

A single-page, fully responsive, search application which allows users to explore countries for weather, general information and points of interest. 

This project was created for project 1 from IT Career Switch. The specification was to reply to a website specification for a map-based app to provide information on countries – with a focus on a “mobile-first” development. Preferably using a framework, to then develop HTML, CSS and JavaScript with JQuery modules that use PHP server-based components to source data from third-party APIs (Geonames, OpenWeather). The solution is assessed on its delivery to specification, functionality, and usability.




## Tech Stack

**Client:** HMTL - Css - leaflet.js - jQuery

**Server:** Php


## Features

There are two main 'modes' within the app, Country Search and Global Search. The main, and most developed, is Country Search.

Country Search (Map)
- Displays the users location after requesting access
- Can search for a country with the select dropdown search bar
- Can search for a country by moving the screen and hovering the central reticle over a country
- Shows country cities for the chosen country
- The number of cities shown varies depending on the zoom level, for a clean user experience
- Can toggle what weather data is displaying on the city labels, ranging from general weather conditions to humidity
- Can select a city by pressing on a city label, to change points of interest and data found in the country search modal
- There are shortcut buttons found on the side to quickly change the points of interest shown on the map.
- Can use shortcut buttons to quickly navigate to the user's location, navigate to chosen city or toggle all borders

Country Search (Modal)
- Includes an expand and collapse button which changes the size of the modal depending on the screen size
- Displays the country flag and data such as population and currency
- Displays chosen country city, which can be changed with a dropdown select search box
- (Tab 1 - More) Displays all chosen city weather data, along with a general description and images for the city
- (Tab 2 - points of Interest) Includes a select dropdown option box which changes the category of POI on the map and within the modal 
- (Tab 2 - points of Interest) Shows the top 15 POI for the selected category, with a description and image, and a search button to take the user to the location on the map

Global Search (Map)
- Displays a choropleth map for all countries, for the chosen weather data (temperature by default)
- Includes a legend to reference the data for each colour on the map
- When started from the modal, displays the live location of the International Space Station (ISS)

Global Search (Modal)
- (Tab 1 - Global Weather) Includes a select option dropdown to change the weather data type
- (Tab 1 - Global Weather) Displays a list of countries with their chosen weather data in ascending order
- (Tab 2 - ISS Location) Allows the user to start and stop showing the location of the ISS on the map


## Screenshots and Demo

https://clipchamp.com/watch/m1zGTKub7No

#### Shows user location and automatically chooses user country on load
![Gazetteer Screenshot 1](https://user-images.githubusercontent.com/95356508/218561314-d99d8c1d-f91b-4439-bf50-72c3c408c3f0.png)

#### The amount of city labels changes at different zoom levels
![Gazetteer Screenshot 2](https://user-images.githubusercontent.com/95356508/218561318-71aa3a50-f780-4f00-b92e-d0e4de838b82.png)

#### Pressing on a city changes the chosen city. Able to change the weather data on the city labels
![Gazetteer Screenshot 3](https://user-images.githubusercontent.com/95356508/218561328-4cb9e79c-b5cf-4a9f-87db-cfd33ece98d8.png)
![Gazetteer Screenshot 4](https://user-images.githubusercontent.com/95356508/218561340-631ae206-e7ed-424c-b849-4ad44cd0be53.png)

#### Pressing the search icon against a POI in the modal locates the POI on the map
![Gazetteer Screenshot 5](https://user-images.githubusercontent.com/95356508/218561352-a6fcaf82-c086-4e36-b99f-3bcd1f3d7ccf.png)

#### Able to search other countries by using a central reticle and the search shortcut button
![Gazetteer Screenshot 14](https://user-images.githubusercontent.com/95356508/218992624-e02bbbe5-2b4d-4d1b-bf93-6cf8193ff4ed.png)

#### The expand button allows the modal to expand
![Gazetteer Screenshot 6](https://user-images.githubusercontent.com/95356508/218561368-339c3c17-ae7e-48ec-9b14-4ee45d51cf04.png)
![Gazetteer Screenshot 7](https://user-images.githubusercontent.com/95356508/218561379-b1b58828-f23a-428a-8fdc-a2b5b1c68f3a.png)

#### Global choropleth map for live temperature data
![Gazetteer Screenshot 8](https://user-images.githubusercontent.com/95356508/218561394-8c1d0a8f-fa7b-46bf-873a-60383bfc99e7.png)

#### Locates the ISS and tracks movement
![Gazetteer Screenshot 9](https://user-images.githubusercontent.com/95356508/218561404-874b5b34-d2a7-4745-9c0a-acb38c4ccd4f.png)

#### Fully responsive for all screen sizes
![Mobile Screenshots](https://user-images.githubusercontent.com/95356508/218991999-5e227d4e-f57e-4f06-9dfe-48174dca0e19.png)


## Run Locally

To run this project locally, a local php server is required. The instructions below are for XAMPP.

First, move the entire project folder to htdocs.

Go to the project directory and then with the command line:

```bash
  cd backend/npm install
```

```bash
  cd ../frontend/npm install
```
Finally, open with localhost. 

## API Reference


#### Get all cities

```http
  GET /php/getCityPois.php
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `city` | `string` | **Required**. Chosen City |
| `tag` | `string` | **Required**. Poi category e.g. sightseeing |

#### Get item

```http
  GET /php/getAllCountryData.php
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required**. Chosen Country |
| `iso`      | `string` | **Required**. Chosen Country Iso Code |
| `amount`      | `string` | **Required**. How many items to get |


```http
  GET /php/getGlobalData.php
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `countries`      | `string` | **Required**. Countries to get data for |


```http
  GET /php/countryBorders.geo.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `country`      | `string` | **Required**. Chosen Country |


```http
  GET /php/getCountriesFromGeoJson.php
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `countries`      | `string` | **Required**. Countries to get data for |


```http
  GET /php/getCountryFromPoint.php
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `lat`      | `string` | **Required**. Latitude of chosen country |
| `lng`      | `string` | **Required**. Longitude of chosen country |


```http
  GET /php/getISS.php
```



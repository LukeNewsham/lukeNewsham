
<img src="https://user-images.githubusercontent.com/95356508/218489486-c59d28b1-be4f-4e42-b7f9-ab0ba302695f.png" data-canonical-src="https://user-images.githubusercontent.com/95356508/218489486-c59d28b1-be4f-4e42-b7f9-ab0ba302695f.png" width="300" />

# Gazetteer

A single page, fully responsive, search application which allows users to explore countries for weather, general infomation and points of interest. 

Was given as a brief for 'project 1' from IT Career Switch. The app was researched and made by myself with the occasional help from my tutor if found myself stuck at a wall.

The project took around 5 weeks and allowed me to gain invaluable experience from the unique challanges faced.


## Tech Stack

**Client:** HMTL - Css - leaflet.js - jQuery

**Server:** Php


## Features

There are two main 'modes' within the app, being Country Search and Global Search. The main, and most developed, is Country Search.

Country Search (Map)
- Displays users location after requesting for access
- Search for a country with the select dropdown search bar
- Search for a country by moving the screen and hovering the central retical over a country
- Show country cities for the chosen country
- The amount of cities shown vary depending on zoom level, for a clean user expierence
- Toggle what weather data is dispaying on the city labels, ranging from general weather coniditon to humidity
- Select a city by pressing on a city label, to change points of interest and data found in the country seach modal
- Use the shortcut buttons found on the side to quickly change the points of interest shown on the map.
- Use the shortcut buttons to quickly navigate to location, navigate to chosen city or toggle all borders

Country Search (Modal)
- Includes an expand and collapse button which changes how the modal changes size depening on the screen size
- Display country flag and data such as population and currency
- Displays chosen country city, which can be changed with a dropdown select search box
- (Tab 1 - More) Displays all chosen city weather data, along with a general description and images for the city
- (Tab 2 - points of Interest) Includes a select dropdown option box which changes the category of POI on the map and within the modal 
- (Tab 2 - points of Interest) Shows top 15 POI for the selected category, with a description and image, and a search button to take the user to the location on the map

Global Search (Map)
- Displays a choropleth map for all countries, for the the chosen weather data (temperature by default)
- Includes a legend to reference the data for each colour on the map
- When started from the modal, displays the live location of the International Space Station (ISS)

Global Search (Modal)
- (Tab 1 - Global Weather) Includes a select option dropdown to change weather data type
- (Tab 1 - Global Weather) Displays a list of countries with their chosen weather data in accending order
- (Tab 2 - ISS Location) Allows the user to start and stop showing the location of the ISS on the map




## Run Locally

To run this project locally, a local php server is required. The instructions below are for XAMPP.

First, move entire project folder into http

Then with the command line:

Go to the project directory

Go to the backend

```bash
  cd backend
```

```bash
  npm install  
```

```bash
  npm run start  
```


Go to the frontend

```bash
  cd ../frontend
```

```bash
  npm install  
```

```bash
  npm run start  
```



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
| `lat`      | `string` | **Required**. Latitide of chosen country |
| `lng`      | `string` | **Required**. Longitude of chosen country |


```http
  GET /php/getISS.php
```





## Demo

Insert gif or link to demo


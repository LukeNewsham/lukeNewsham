
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


## Screenshots and Demo

#### Shows user location and automatically chooses user country on load
![Gazetteer Screenshot 1](https://user-images.githubusercontent.com/95356508/218561314-d99d8c1d-f91b-4439-bf50-72c3c408c3f0.png)

#### The amount of city labels change at different zoom levels
![Gazetteer Screenshot 2](https://user-images.githubusercontent.com/95356508/218561318-71aa3a50-f780-4f00-b92e-d0e4de838b82.png)

#### Pressing on a city changes the chosen city. Able to change the weather data on the city labels
![Gazetteer Screenshot 3](https://user-images.githubusercontent.com/95356508/218561328-4cb9e79c-b5cf-4a9f-87db-cfd33ece98d8.png)
![Gazetteer Screenshot 4](https://user-images.githubusercontent.com/95356508/218561340-631ae206-e7ed-424c-b849-4ad44cd0be53.png)

#### Pressing the search icon againts a POI in the modal locates the POI on the map
![Gazetteer Screenshot 5](https://user-images.githubusercontent.com/95356508/218561352-a6fcaf82-c086-4e36-b99f-3bcd1f3d7ccf.png)

#### The expand button allows the modal to expand
![Gazetteer Screenshot 6](https://user-images.githubusercontent.com/95356508/218561368-339c3c17-ae7e-48ec-9b14-4ee45d51cf04.png)
![Gazetteer Screenshot 7](https://user-images.githubusercontent.com/95356508/218561379-b1b58828-f23a-428a-8fdc-a2b5b1c68f3a.png)

#### Global chorepleth map for live temperature data
![Gazetteer Screenshot 8](https://user-images.githubusercontent.com/95356508/218561394-8c1d0a8f-fa7b-46bf-873a-60383bfc99e7.png)

#### Locates the ISS and tracks movement
![Gazetteer Screenshot 9](https://user-images.githubusercontent.com/95356508/218561404-874b5b34-d2a7-4745-9c0a-acb38c4ccd4f.png)

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


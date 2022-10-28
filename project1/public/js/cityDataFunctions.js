//Function to add city info marker 

let cityData = (city, data) => {
  text = `Rank: ${city.capital}`
  let infoIcon = L.divIcon({
    className: 'infoIcon',
    iconAnchor: [0, 0],
    html: `${city[data]}`
  });
  marker = L.marker([city.lat, city.lng], { icon: infoIcon }).addTo(map);
  marker.bindPopup(text)
  return marker
}

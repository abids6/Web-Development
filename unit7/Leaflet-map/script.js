let data, mapObj, tileLayer, currentMarker;

const places = [
  { name: "Tokyo, Japan", lat: 35.6895, lon: 139.6917 },
  { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
  { name: "Paris, France", lat: 48.8566, lon: 2.3522 }
];

function displayMap(){
  let lat = parseFloat(get("lat").value);
  let lon = parseFloat(get("lon").value);
  if(Number.isNaN(lat) || Number.isNaN(lon)){
    alert("Please enter valid numeric latitude and longitude.");
    return;
  }
  showMap(lat,lon);
}

function selectPlace(index){
  let place = places[index];
  get("lat").value = place.lat;
  get("lon").value = place.lon;
  showMap(place.lat, place.lon);
}

function showMap(lat,lon){
  let location = [parseFloat(lat), parseFloat(lon)];
  if(!mapObj){
      mapObj = L.map("map");
      tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      }).addTo(mapObj);
  }

  mapObj.setView(location, 14);

  if(currentMarker){
    mapObj.removeLayer(currentMarker);
  }
  currentMarker = L.marker(location).addTo(mapObj);
}


// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map
var cities = [
// newyork;
{location: [40.712776,-74.005974],
  city: "New York",
  pop: "8,804,190"
}, 

// chicago;
{location: [41.878113, -87.629799],
  city: "Chicago",
  pop: "2,746,388"
}, 

// houston;
{location: [29.760427, -95.369804],
  city: "Houston",
  pop: "2,304,580"
}, 

// la;
{location: [34.052235, -118.243683],
  city: "Los Angeles",
  pop: "12,488,000"
}, 

// omaha;
{location: [41.256538, -95.934502],
  city: "Omaha",
  pop: "487,300"
}] 

var myMap = L.map("map", {
    center: [34.0522, -118.2437],
    zoom: 8
});

// var myMap = L.map("map").setView([39.8283, -98.5795], 5);

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var url = "/data";

d3.json(url, function(data) {
    var markers = L.clusterGroup();

    for(var i=0; i<data.length; i++) {

        var lat = data[i].lat;
        var lon = data[i].lon;

        if (lat & lon) {
            markers.addLayer(L.marker([lat, lon])).bindPopup(data[i].race);
        }
    }

    myMap.addLayer(markers);

})

// var geoData = "http://localhost:5000/states";
// var geojson;

// d3.json(geoData, function (data) {

//     state = data.map(d => d.state);
//     counts = data.map(d => d.count);

//     geojson = L.choropleth(data, {

//         valueProperty = "count",

//         scale: ["#ffffb2", "#b10026"],

//         steps: 10,

//         mode: "q",
//         style: {
//             color: "#fff",
//             weight: 1,
//             fillOpacity: 0.8
//         },

//         onEachFeature: function (feature, layer) {
//             layer.bindPopup("State: " + feature.state + "<br>Civilians Killed by Police 2015-2020:<br>" +
//                 "$" + feature.count);
//         }
//     }).addTo(myMap);
// });
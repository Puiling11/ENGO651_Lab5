// Set defulat view of the map container
var mymap = L.map("mapid").setView([51.050, -114.067], 12);
            
// Import map layers from Mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/puiling11/clf8xcwjb000001mlrdb8c001/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHVpbGluZzExIiwiYSI6ImNsZjBkNmllaDAwb3gzcHFqMGdocW5laXUifQ.gd31QkMQxymb2LQ5KR8bOw'
}).addTo(mymap)

// Define properties for pinning locations on map
function pinLocation(latitude,longitude,temperature){
    
    // Define style and color of marker based on different temperature range
    var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    if (temperature<10) {
        var marker = L.marker([latitude, longitude], 
            {icon: blueIcon}
            ).addTo(mymap);
    }else if (10<=temperature && temperature<30){
        var marker = L.marker([latitude, longitude], 
            {icon: greenIcon}
            ).addTo(mymap);
    }else if(30<=temperature){
        var marker = L.marker([latitude, longitude],
            {icon: redIcon}
            ).addTo(mymap);
    }else{
        var marker = L.marker([latitude, longitude]).addTo(mymap);
    }
    marker.bindPopup('Latitude: ' + latitude + '<br>' + 'Longitude: ' + longitude + '<br>' + 'Temperture: ' + temperature + '°C').openPopup()

}

function geoJsonLocation(myGeoJson){
    lat = myGeoJson['features'][0]['geometry']['coordinates'][0][0];
    long = myGeoJson['features'][0]['geometry']['coordinates'][0][1];
    temperature = myGeoJson['features'][0]['properties']['temperature'][0][0];

    var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    if (temperature<10) {
        var marker = L.marker([latitude, longitude], 
            {icon: blueIcon}
            ).addTo(mymap);
    }else if (10<=temperature && temperature<30){
        var marker = L.marker([latitude, longitude], 
            {icon: greenIcon}
            ).addTo(mymap);
    }else if(30<=temperature){
        var marker = L.marker([latitude, longitude],
            {icon: redIcon}
            ).addTo(mymap);
    }else{
        var marker = L.marker([latitude, longitude]).addTo(mymap);
    }
    marker.bindPopup('Latitude: ' + latitude + '<br>' + 'Longitude: ' + longitude + '<br>' + 'Temperture: ' + temperature + '°C').openPopup()

}

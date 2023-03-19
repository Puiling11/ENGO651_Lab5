// Set defulat view of the map container
var mymap = L.map("mapid").setView([51.050, -114.067], 12);
            
// Import map layers from Mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/puiling11/clf8xcwjb000001mlrdb8c001/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHVpbGluZzExIiwiYSI6ImNsZjBkNmllaDAwb3gzcHFqMGdocW5laXUifQ.gd31QkMQxymb2LQ5KR8bOw'
}).addTo(mymap)

function icons(){
    const green = '#00FF00'

    const greenMarkerHtmlStyles = `
    background-color: ${green};
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const greenIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${greenMarkerHtmlStyles}" />`
    })
    const blue = '#0000FF'

    const blueMarkerHtmlStyles = `
    background-color: ${blue};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const blueIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${blueMarkerHtmlStyles}" />`
    })
    const red = '#FF0000'

    const redMarkerHtmlStyles = `
    background-color: ${red};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF`

    const redIcon = L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${redMarkerHtmlStyles}" />`
    });
    return [blueIcon, greenIcon, redIcon];
}

function pinLocation(lat,long,temp){
    
    const blueIcon = icons()[0];
    const greenIcon = icons()[1];
    const redIcon = icons()[2];
    if (temp<10) {
        var marker = L.marker([lat, long], {
            icon: blueIcon
          }).addTo(mymap);
    }else if (10<=temp && temp<30){
        var marker = L.marker([lat, long], {
            icon: greenIcon
          }).addTo(mymap);
    }else if(30<=temp){
        var marker = L.marker([lat, long], {
            icon: redIcon
          }).addTo(mymap);
    }else{
        var marker = L.marker([lat, long]).addTo(mymap);
    }
    marker.bindPopup('<p>Temperture: ' + temp + '</p><p>Lat: ' + lat + '</p><p>Long: ' + long+'</p>').openPopup()

}

function geoJsonLocation(myGeoJson){
    lat = myGeoJson['features'][0]['geometry']['coordinates'][0][0];
    long = myGeoJson['features'][0]['geometry']['coordinates'][0][1];
    temp = myGeoJson['features'][0]['properties']['temp'][0][0];

    
    const blueIcon = icons()[0];
    const greenIcon = icons()[1];
    const redIcon = icons()[2];
    if (temp<10) {
        var marker = L.marker([lat, long], {
            icon: blueIcon
          }).addTo(mymap);
    }else if (10<=temp && temp<30){
        var marker = L.marker([lat, long], {
            icon: greenIcon
          }).addTo(mymap);
    }else if(30<=temp){
        var marker = L.marker([lat, long], {
            icon: redIcon
          }).addTo(mymap);
    }else{
        var marker = L.marker([lat, long]).addTo(mymap);
    }
    marker.bindPopup('<p>Temperture: ' + temp + '</p><p>Lat: ' + lat + '</p><p>Long: ' + long+'</p>').openPopup()

}
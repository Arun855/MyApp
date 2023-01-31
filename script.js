function getLocation(){

    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(async position=>{
         const lat=position.coords.latitude;
         const long=position.coords.longitude;
         console.log("lat:"+lat+ " "+"long:"+long);
         const weatherData= await getWeatherData(lat,long);
         console.log(weatherData);
         renderWeatherData(weatherData);
         var map = L.map('map').setView([20.9716, 80.5947], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    let marker = L.marker([lat,long]).addTo(map);
    marker.bindPopup(data.name).openPopup();

    map.on('click',async function(a){
    console.log("Lat"+e.lating.lat+"long"+e.latlng.lng);

    const data = await getWeatherData(e.latlng.lat,e.latlng.lng);
    renderWeatherData(data);
    }
    )
     })
    }
 
 }

 

async function getWeatherData(lat,long){
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;
 
        let response = await fetch(api);//Fetch Method is used to make an AJAX Call
        let data = await response.json();
 
        console.log(data);
        return data;
 }



 function renderWeatherData(data){

    console.log(document.getElementById("city-name").innerHTML=data.name);
    console.log(document.getElementById("temp").innerHTML=data.main.temp_max);
    console.log(document.getElementById("min-temp").innerHTML=data.main.temp_min);
 }

 const myCallback=()=>{
    console.log("I'm Sleeping");
}
setTimeout(myCallback,5000);
getLocation();


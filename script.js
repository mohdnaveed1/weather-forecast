// const apikey = "623c2f0739b0f1cb4850549046d09a90";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".title input")
const searchBtn = document.querySelector(".title button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=623c2f0739b0f1cb4850549046d09a90`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";

    }
    else  if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";}
else  if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";}
else  if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";}
else  if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";}
    else  if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";

    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
  

}
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);


})
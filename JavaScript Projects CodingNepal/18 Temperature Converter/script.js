const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const daysForecastDiv = document.querySelector(".days-forecast");

const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API here
// Create weather card HTML based on weather data
const createWeatherCard = (cityName, weatherItem, index) => {
    if(index === 0) {
        return `<div class="mt-3 d-flex justify-content-between">
        <div>
            <h3 class="fw-bold">${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h3>
            <h6 class="my-3 mt-3">Temperature: ${((weatherItem.main.temp - 273.15).toFixed(2))}°C</h6>
            <h6 class="my-3">Wind: ${weatherItem.wind.speed} M/S</h6>
            <h6 class="my-3">Humidity: ${weatherItem.main.humidity}%</h6>
        </div>
        <div class="text-center me-lg-5">
        <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather icon">
        <h6>${weatherItem.weather[0].description}</h6>
    </div>
</div>`;
} else {
    return `<div class="col mb-3">
    <div class="card border-0 bg-secondary text-white">
                        <div class="card-body p-3 text-white">
                        <h5 class="card-title fw-semibold">(${weatherItem.dt_txt.split(" ")[0]})</h5>
                            <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png" alt="weather icon">
                            <h6 class="card-text my-3 mt-3">Temp: ${((weatherItem.main.temp - 273.15).toFixed(2))}°C</h6>
                            <h6 class="card-text my-3">Wind: ${weatherItem.wind.speed} M/S</h6>
                            <h6 class="card-text my-3">Humidity: ${weatherItem.main.humidity}%</h6>
                        </div>
                    </div>
                </div>`;
    }
}
// Get weather details of passed latitude and longitude
const getWeatherDetails = (cityName, latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
        const forecastArray = data.list;
        const uniqueForecastDays = new Set();

// Configuration - In production, use environment variables
const api = {
  key: "2fa73590fd8b5a4c6e68098ad5625395", // Replace with your API key
  base: "https://api.openweathermap.org/data/2.5/"
};

const searchbox = document.querySelector(".search-box");
const loadingIndicator = document.querySelector(".loading");

searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    const query = searchbox.value.trim();
    if (query) {
      getResults(query);
    }
  }
}

function showLoading() {
  const main = document.querySelector("main");
  main.classList.add("loading-state");
}

function hideLoading() {
  const main = document.querySelector("main");
  main.classList.remove("loading-state");
}

function showError(message) {
  const city = document.querySelector(".location .city");
  const date = document.querySelector(".location .date");
  const temp = document.querySelector(".current .temp");
  const weather = document.querySelector(".current .weather");
  const hilow = document.querySelector(".hi-low");
  
  city.innerText = "Location not found";
  date.innerText = "";
  temp.innerHTML = "--<span>°C</span>";
  weather.innerText = message;
  hilow.innerText = "";
}

function getResults(query) {
  showLoading();
  
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then(displayResults)
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      showError('City not found. Please try again.');
      hideLoading();
    });
}

function displayResults(weather) {
  hideLoading();
  console.log(weather);
  
  let city = document.querySelector(".location .city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector(".current .weather");
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
  
  // Add weather icon
  const weatherIcon = document.querySelector(".weather-icon");
  if (weatherIcon) {
    weatherIcon.className = `weather-icon ${getWeatherIcon(weather.weather[0].main)}`;
  }
  
  // Update additional info
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");
  
  if (feelsLike) feelsLike.innerText = `${Math.round(weather.main.feels_like)}°C`;
  if (humidity) humidity.innerText = `${weather.main.humidity}%`;
  if (windSpeed) windSpeed.innerText = `${Math.round(weather.wind?.speed * 3.6 || 0)} km/h`;
  
  // Clear search box
  searchbox.value = "";
}

function getWeatherIcon(weatherMain) {
  const iconMap = {
    'Clear': 'sunny',
    'Clouds': 'cloudy',
    'Rain': 'rainy',
    'Drizzle': 'rainy',
    'Thunderstorm': 'stormy',
    'Snow': 'snowy',
    'Mist': 'foggy',
    'Fog': 'foggy',
    'Haze': 'foggy'
  };
  return iconMap[weatherMain] || 'default';
}

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

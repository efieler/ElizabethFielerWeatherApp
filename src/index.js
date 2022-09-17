let now = new Date();
let h4 = document.querySelector("h4");
let date = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes <= 9) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
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
  "December",
];
let month = months[now.getMonth()];
h4.innerHTML = `${month} ${date}, ${year} </br> ${day}, ${hours}:${minutes}`;

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#weather-forecast");
  let forecastHTML = `<div class = "row forecast">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
    <div class="fivedays col-2">
    10/12/22
    <br />
    ${formatDay(forecastDay.dt)}
    
    <div class="card col-2">
      <ul class="list-group list-group-flush forecast">
        <li class="list-group-item fivedayemoji">🌤</li>
        <li class="list-group-item hightemp">${Math.round(
          forecastDay.temp.max
        )}°C</li>
        <li class="list-group-item lowtemp">${Math.round(
          forecastDay.temp.min
        )}°C</li>
      </ul>
     </div>
   </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayCurrentWeather(response) {
  let searchInput = document.querySelector("#search-city-input");
  let city = document.querySelector("#city");
  let ctemp = document.querySelector("#ctemp");
  let tempUnit = document.querySelector("#tempUnit");
  let windSpeed = document.querySelector("#windSpeed");
  let currentWindSpeed = Math.round(response.data.wind.speed);
  let descriptions = document.querySelector("#descriptions");
  let currentDescription = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  let currentHumidity = response.data.main.humidity;
  let todayWeatherEmoji = document.querySelector("#first-today-emoji");
  city.innerHTML = response.data.name;
  windSpeed.innerHTML = `Wind: ${currentWindSpeed} mph`;
  humidity.innerHTML = `Humidity: ${currentHumidity}%`;
  descriptions.innerHTML = `${currentDescription}`;
  ctemp.innerHTML = Math.round(response.data.main.temp);
  celsiusTemperature = response.data.main.temp;
  tempUnit.innerHTML = `°C`;
  getForecast(response.data.coord);
  let currentWeatherEmoji = response.data.weather[0].icon;
  if (currentWeatherEmoji === "01n") {
    currentWeatherEmoji = `🌙`;
  } else if (currentWeatherEmoji === "01d") {
    currentWeatherEmoji = `☀️`;
  } else if (currentWeatherEmoji === "02n") {
    currentWeatherEmoji = `☁️`;
  } else if (currentWeatherEmoji === "02d") {
    currentWeatherEmoji = `🌤`;
  } else if (currentWeatherEmoji === "03d") {
    currentWeatherEmoji = `🌥`;
  } else if (currentWeatherEmoji === "03n") {
    currentWeatherEmoji = `☁`;
  } else if (currentWeatherEmoji === "04d") {
    currentWeatherEmoji = `☁️`;
  } else if (currentWeatherEmoji === "04n") {
    currentWeatherEmoji = `☁️`;
  } else if (currentWeatherEmoji === "09d") {
    currentWeatherEmoji = `🌦`;
  } else if (currentWeatherEmoji === "09n") {
    currentWeatherEmoji = `🌧`;
  } else if (currentWeatherEmoji === "10d") {
    currentWeatherEmoji = `🌧`;
  } else if (currentWeatherEmoji === "10n") {
    currentWeatherEmoji = `🌧`;
  } else if (currentWeatherEmoji === "11d") {
    currentWeatherEmoji = `⛈`;
  } else if (currentWeatherEmoji === "11n") {
    currentWeatherEmoji = `⛈`;
  } else if (currentWeatherEmoji === "13d") {
    currentWeatherEmoji = `❄️`;
  } else if (currentWeatherEmoji === "13n") {
    currentWeatherEmoji = `❄️`;
  } else if (currentWeatherEmoji === "50d") {
    currentWeatherEmoji = `💦`;
  } else if (currentWeatherEmoji === "50n") {
    currentWeatherEmoji = `💦`;
  } else {
    currentWeatherEmoji = `❤️`;
  }
  todayWeatherEmoji.innerHTML = `${currentWeatherEmoji}`;

  let todayFaceEmoji = document.querySelector("#second-today-emoji");
  let currentFaceEmoji = response.data.weather[0].icon;
  if (currentFaceEmoji === "01n") {
    currentFaceEmoji = `🥰`;
  } else if (currentFaceEmoji === "01d") {
    currentFaceEmoji = `😎`;
  } else if (currentFaceEmoji === "02n") {
    currentFaceEmoji = `😴`;
  } else if (currentFaceEmoji === "02d") {
    currentFaceEmoji = `🥰`;
  } else if (currentFaceEmoji === "03d") {
    currentFaceEmoji = `😊`;
  } else if (currentFaceEmoji === "03n") {
    currentFaceEmoji = `😴`;
  } else if (currentFaceEmoji === "04d") {
    currentFaceEmoji = `😊`;
  } else if (currentFaceEmoji === "04n") {
    currentFaceEmoji = `😴`;
  } else if (currentFaceEmoji === "09d") {
    currentFaceEmoji = `🧐`;
  } else if (currentFaceEmoji === "09n") {
    currentFaceEmoji = `😴`;
  } else if (currentFaceEmoji === "10d") {
    currentFaceEmoji = `😅`;
  } else if (currentFaceEmoji === "10n") {
    currentFaceEmoji = `😴`;
  } else if (currentFaceEmoji === "11d") {
    currentFaceEmoji = `🥺`;
  } else if (currentFaceEmoji === "11n") {
    currentFaceEmoji = `😳`;
  } else if (currentFaceEmoji === "13d") {
    currentFaceEmoji = `🥶`;
  } else if (currentFaceEmoji === "13n") {
    currentFaceEmoji = `🥶`;
  } else if (currentFaceEmoji === "50d") {
    currentFaceEmoji = `🤪`;
  } else if (currentFaceEmoji === "50n") {
    currentFaceEmoji = `😴`;
  } else {
    currentFaceEmoji = `🤓`;
  }
  todayFaceEmoji.innerHTML = `${currentFaceEmoji}`;

  let now = new Date();
  let h4 = document.querySelector("h4");
  let date = now.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();
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
    "December",
  ];
  let month = months[now.getMonth()];
  h4.innerHTML = `${month} ${date}, ${year} </br> ${day}, ${hours}:${minutes}`;
}

function search(city) {
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-city-input");
  search(cityInputElement.value);
}

function showFahrenTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#ctemp");
  let ftemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(ftemp);
  let tempUnit = document.querySelector("#tempUnit");
  tempUnit.innerHTML = `°F`;
}
function showCelTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#ctemp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  let tempUnit = document.querySelector("#tempUnit");
  tempUnit.innerHTML = `°C`;
}

let celsiusTemperature = null;

let form = document.querySelector("#city-search");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahren-link");
fahrenheitLink.addEventListener("click", showFahrenTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelTemp);

search("Dallas");

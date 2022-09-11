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

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  function displayCurrentWeather(response) {
    let ctemp = document.querySelector("#ctemp");
    let tempUnit = document.querySelector("#tempUnit");
    let windSpeed = document.querySelector("#windSpeed");
    let currentWindSpeed = Math.round(response.data.wind.speed);
    let descriptions = document.querySelector("#descriptions");
    let currentDescription = response.data.weather[0].description;
    let humidity = document.querySelector("#humidity");
    let currentHumidity = response.data.main.humidity;
    let todayWeatherEmoji = document.querySelector("#first-today-emoji");
    windSpeed.innerHTML = `Wind: ${currentWindSpeed} mph`;
    humidity.innerHTML = `Humidity: ${currentHumidity}%`;
    descriptions.innerHTML = `${currentDescription}`;
    ctemp.innerHTML = Math.round(response.data.main.temp);
    celsiusTemperature = response.data.main.temp;
    tempUnit.innerHTML = `°C`;
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
  let city = `${searchInput.value}`;
  let apiKey = "4fa0a71d5203b32794359d1f5d59a57e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCurrentWeather);
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
form.addEventListener("submit", showCity);

let fahrenheitLink = document.querySelector("#fahren-link");
fahrenheitLink.addEventListener("click", showFahrenTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelTemp);

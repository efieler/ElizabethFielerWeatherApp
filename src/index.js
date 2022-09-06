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
    let currentSearchTemp = Math.round(response.data.main.temp);
    let ftemp = document.querySelector("#ftemp");
    ftemp.innerHTML = `${currentSearchTemp}`;
    let windSpeed = document.querySelector("#windSpeed");
    let currentWindSpeed = Math.round(response.data.wind.speed);
    windSpeed.innerHTML = `Wind: ${currentWindSpeed} mph`;
    let descriptions = document.querySelector("#descriptions");
    let currentDescription = response.data.weather[0].description;
    descriptions.innerHTML = `${currentDescription}`;
    let humidity = document.querySelector("#humidity");
    let currentHumidity = response.data.main.humidity;
    humidity.innerHTML = `Humidity: ${currentHumidity}%`;
  }
  let city = `${searchInput.value}`;
  let apiKey = "4fa0a71d5203b32794359d1f5d59a57e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayCurrentWeather);
}
let form = document.querySelector("#city-search");
form.addEventListener("submit", showCity);

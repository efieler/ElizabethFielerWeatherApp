function formatDate(timestamp) {
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
    let icon = forecastDay.weather[0].icon;
    if (icon === "01n") {
      icon = `🌙`;
    } else if (icon === "01d") {
      icon = `☀️`;
    } else if (icon === "02n") {
      icon = `☁️`;
    } else if (icon === "02d") {
      icon = `🌤`;
    } else if (icon === "03d") {
      icon = `🌥`;
    } else if (icon === "03n") {
      icon = `☁`;
    } else if (icon === "04d") {
      icon = `☁️`;
    } else if (icon === "04n") {
      icon = `☁️`;
    } else if (icon === "09d") {
      icon = `🌦`;
    } else if (icon === "09n") {
      icon = `🌧`;
    } else if (icon === "10d") {
      icon = `🌧`;
    } else if (icon === "10n") {
      icon = `🌧`;
    } else if (icon === "11d") {
      icon = `⛈`;
    } else if (icon === "11n") {
      icon = `⛈`;
    } else if (icon === "13d") {
      icon = `❄️`;
    } else if (icon === "13n") {
      icon = `❄️`;
    } else if (icon === "50d") {
      icon = `💦`;
    } else if (icon === "50n") {
      icon = `💦`;
    } else {
      icon = `❤️`;
    }
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
    <div class="fivedays col-2">
    ${formatDay(forecastDay.dt)}
    <div class="card col-2">
      <ul class="list-group list-group-flush forecast">
        <li class="list-group-item fivedayemoji">
        ${icon}
        </li>
        <li class="list-group-item hightemp">${Math.round(
          forecastDay.temp.max
        )}°F</li>
        <li class="list-group-item lowtemp">${Math.round(
          forecastDay.temp.min
        )}°F</li>
      </ul>
     </div>
   </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
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
  tempUnit.innerHTML = `°F`;
  getForecast(response.data.coord);
  formatDate(response.data.dt * 1000);
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
}

function search(city) {
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", handleSubmit);

search("Dallas");

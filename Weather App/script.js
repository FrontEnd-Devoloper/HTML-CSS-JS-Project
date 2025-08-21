const apiKey = "92bf75c65915d2bcaac010ac3f94e4a3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-btn");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".tempre").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

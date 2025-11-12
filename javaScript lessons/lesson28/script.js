const container = document.getElementById("weather-info");
const bodyElement = document.getElementById("container");
const input = document.getElementById("city-input");
const mainBody = document.getElementById("mainBody");

async function mainWeather() {
  const city = document.getElementById("city-input");
  if (city.value) {
    const response = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a `
    );
    const data = await response.json();
    console.log(data, "data");
    container.innerHTML = `In your ${data.name}'s weather is ${data.weather[0].main} <br>
       Temperature:🌡️ ${data.main.temp} °C`;
    if (data.weather[0].main === "Clouds") {
      bodyElement.classList = ["cloudyImage"];
      mainBody.classList = ["cloudyImage1"];
    } else if (data.weather[0].main === "Clear") {
      bodyElement.classList = ["clearImage"];
      mainBody.classList = ["clearImage1"];
    } else if (data.weather[0].main === "Rain") {
      bodyElement.classList = ["rainImage"];
      mainBody.classList = ["rainImage1"];
    } else if (data.weather[0].main === "Drizzle") {
      bodyElement.classList = ["drizzleImage"];
      mainBody.classList = ["drizzleImage1"];
    } else if (data.weather[0].main === "Thunderstorm") {
      bodyElement.classList = ["tunderStormImage"];
      mainBody.classList = ["tunderStormImage1"];
    } else if (data.weather[0].main === "Snow") {
      bodyElement.classList = ["snowImage"];
      mainBody.classList = ["snowImage1"];
    } else if (data.weather[0].main === "extreme") {
      bodyElement.classList = ["extremeImage"];
      mainBody.classList = ["extremeImage1"];
    } else if (data.weather[0].main === "Fog") {
      bodyElement.classList = ["fogImage"];
      mainBody.classList = ["fogImage1"];
    } else if (data.weather[0].main === "Smoke") {
      bodyElement.classList = ["smokeImage"];
      mainBody.classList = ["smokeImage1"]
    }else if (data.weather[0].main ==="Mist") {
      bodyElement.classList = ["mistImage"];
      mainBody.classList = ["mistImage1"]
    }
  }
  input.value = "";
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    mainWeather();
  }
});

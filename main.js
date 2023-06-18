// APIn
const apiKey = "c8c5f344fe960ccc44b64a488a1a0115";

// URL for user input
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM
const search = document.querySelector(".search-container input");
const weatherImage = document.querySelector(".weather-image")
const searchButton = document.querySelector(".search-container button");
const displayRows = document.querySelector(".display-rows");

// Fetches data from openweather
async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    let data = await response.json();

    // 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";


    // Switches the icons depending on weather
    if (data.weather[0].main == "Clouds") {
        weatherImage.src = "images/clouds.png";
      } else if (data.weather[0].main == "Rain") {
        weatherImage.src = "images/rain.png";
      } else if (data.weather[0].main == "Clear") {
        weatherImage.src = "images/clear.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherImage.src = "images/mist.png";
      }


      // Wanted to try and create the elements that display values from the API

      const row_wrapper = document.createElement("div");
      row_wrapper.classList.add("row-wrap");

      // First Row

      const row_one = document.createElement("div");
      row_one.classList.add("row");
      row_wrapper.appendChild(row_one);

      const humidity_img = document.createElement("img");
      humidity_img.src = "images/humidity.png";
      row_one.appendChild(humidity_img);

      const p_container = document.createElement("div");
      row_one.appendChild(p_container);

      const first_p = document.createElement("p");
      first_p.classList.add("humidity");
      p_container.appendChild(first_p);

      const second_p = document.createElement("p");
      second_p.innerText = "Humidity";
      p_container.appendChild(second_p);

      const wind_img = document.createElement("img");
      wind_img.src = "images/wind.png";
      row_one.appendChild(wind_img);

      const p_container_two = document.createElement("div");
      row_one.appendChild(p_container_two);

      const third_p = document.createElement("p");
      third_p.classList.add("wind");
      p_container_two.appendChild(third_p);

      //Second Row

      const row_two = document.createElement("div");
      row_two.classList.add("row");
      row_wrapper.appendChild(row_two);

      const visibility_img = document.createElement("img");
      visibility_img.src = "images/visibility.png";
      row_two.appendChild(visibility_img);

      const p_container_three = document.createElement("div");
      row_two.appendChild(p_container_three);

      const fourth_p = document.createElement("p");
      fourth_p.classList.add("visibility");
      p_container_three.appendChild(fourth_p);

      const pressure_img = document.createElement("img");
      pressure_img.src = "images/pressure.png";
      row_two.appendChild(pressure_img);

      const p_container_four = document.createElement("div");
      row_two.appendChild(p_container_four);

      const fifth_p = document.createElement("p");
      fifth_p.classList.add("pressure");
      p_container_four.appendChild(fifth_p);

      displayRows.appendChild(row_wrapper);

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
    document.querySelector(".visibility").innerHTML = data.visibility;
}


// Eventlistener for the button / input.
let searchKey = document.getElementById("search");

searchButton.addEventListener("click", () => {
    getWeather(search.value);
});

searchKey.addEventListener("keyup", (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
        getWeather(search.value)
    }
});
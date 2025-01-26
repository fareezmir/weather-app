const  currentWeather = document.getElementById("current-weather")
const  formEl = document.getElementById("weather-form")
const  tempEl = document.getElementById("temp-el")
const  cityEl = document.getElementById("city-name-el")
const  feelslikeEl = document.getElementById("feels-like-el")
const  errorEl = document.getElementById("error-el")
const forecastContainer = document.getElementById("forecast-container")
const condEl = document.getElementById("condition-el")


const infoBtn = document.getElementById("info-btn");
const modal = document.getElementById("info-modal");
const closeBtn = document.querySelector(".close-btn");

infoBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


async function fetchWeatherData(location) {
    const APIKey = "2e5c6bdcc1804427a4514717252601";
    const APIUrl = `https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location}&days=7`;

    try {
        const response = await fetch(APIUrl);
        if (!response.ok) {
            throw new Error("Location was not found.")
        }
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch (error) {
        throw error;
    }
}

function displayWeatherInfo(data) {
    errorEl.textContent = ""
    const {
        location: {name}, current: {temp_c, feelslike_c, humidity, condition:{text, icon}}
    } = data;

    //Current Day Info
    cityEl.innerHTML = name;
    condEl.innerHTML = `<img src = "http://${icon}">`;
    tempEl.innerHTML = `<p class = "curr-temp-el">${temp_c.toFixed(0)}°C</p>`
    feelslikeEl.innerHTML = `<p class = "feelslike-el"> Feels like: ${feelslike_c.toFixed(0)}°C <\p>`;
    currentWeather.style.display = "inline-block"
    //Forecast
    displayForecast(data)
}

function displayForecast(data) {
    const {
        forecast: {forecastday}
    } = data;

    forecastContainer.innerHTML = " ";
    forecastday.forEach((day) => {
        const {date, day: {maxtemp_c, mintemp_c, condition: {text, icon}}} = day;

        const forecastDay = document.createElement("div");
        forecastDay.classList.add("forecast-item");
        forecastDay.innerHTML = `
        <h3>${date}<\h3>
        <p>H: ${maxtemp_c.toFixed(0)}°C L: ${mintemp_c.toFixed(0)}°C <\p>
        <img class = "weather-icon" src = "http:${icon}" alt = "${text}">
        `;
        forecastContainer.appendChild(forecastDay);


    });
}

function displayError() {
    errorEl.textContent = "Please enter a valid location"
}

formEl.addEventListener("submit", async function(event) {
    event.preventDefault(); //removes the refresh after putting input
    const location = document.getElementById("user-location").value;
    
    if (!location.trim()) {
        displayError()
    }

    else {
        try {
            const data = await fetchWeatherData(location);
            displayWeatherInfo(data);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    
})


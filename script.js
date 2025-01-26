const  currentWeather = document.getElementById("current-weather")
const  formEl = document.getElementById("weather-form")
const  tempEl = document.getElementById("temp-el")
const  cityEl = document.getElementById("city-name-el")
const  feelslikeEl = document.getElementById("feels-like-el")
const  humidityEl = document.getElementById("humidity-el")
const  errorEl = document.getElementById("error-el")


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
    const {
        location: {name}, current: {temp_c, feelslike_c, humidity, condition:{text, icon}}
    } = data;

    //Current Day Info
    cityEl.textContent = name;
    tempEl.textContent = temp_c;
    feelslikeEl.textContent = feelslike_c;
    humidityEl.textContent = humidity;

    //Forecast
    displayForcast(data)
}

function displayForcast(data) {
    const {
        forecast: {forecastday}
    } = data;

    forecastday.forEach((day) => {
        const {date, day: {maxtemp_c, mintemp_c}, condition: {text, icon}} = day;

        const forecastDay = document.createElement("div");
        forecastDay.classList.add("forecast-item")
        forecastDay.innerHTML = `
        <h3>${date}<\h3>
        <p>Max Temp: ${maxtemp_c} <\p>
        <p> Min Temp: ${mintemp_c} <\p>
        <p> Condition: ${text} <\p>
        `

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


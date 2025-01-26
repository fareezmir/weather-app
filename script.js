const  weatherRes = document.getElementById("weather-res")
const  formEl = document.getElementById("weather-form")


fetchWeatherData();

async function fetchWeatherData(location) {
    const APIKey = "2e5c6bdcc1804427a4514717252601";
    const APIUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${location}&days=7`;

    try {
        const response = await fetch(APIUrl);
        if (!response.ok) {
            throw new Error("Location was not found.")
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
}
formEl.addEventListener("submit", function(event) {
    weatherRes.textContent = "";
    event.preventDefault(); //removes the refresh after putting input
    const location = document.getElementById("user-location").value;
    if (!location.trim()) {
        weatherRes.textContent = "Please enter a valid location";
    }
    else {
        try {
            const data = fetchWeatherData(location);
        }
        catch {
            console.error(error);

        }
    }
    
})


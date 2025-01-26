# Weather App

A simple weather application that allows users to check the current weather and a 7-day forecast for any location. The app fetches real-time weather data using the [WeatherAPI](https://www.weatherapi.com/) and displays it in a user-friendly format.

## Features

- **Search Weather by Location**: Users can input a city name to retrieve the current weather and 7-day forecast.
- **Real-Time Weather Data**: Fetches live weather data using WeatherAPI.
- **Dynamic Weather Icons**: Displays weather icons based on the conditions for both current and forecasted weather.
- **Error Handling**: Provides clear error messages for invalid locations or empty inputs.
- **Responsive Design**: Basic styling ensures the app is functional and easy to use.

## How It Works

1. **User Input**: The user enters the name of a city in the input field and clicks "Get Weather."
2. **Fetch Weather Data**: The app sends a request to the WeatherAPI with the provided location.
3. **Display Current Weather**:
   - Location name
   - Current temperature
   - Feels-like temperature
   - Weather condition (e.g., sunny, cloudy) with an appropriate icon
4. **Display 7-Day Forecast**:
   - Daily high and low temperatures
   - Weather conditions for each day with icons
5. **Info Modal**: Includes a description of the PM Accelerator and a link to their [LinkedIn page](https://www.linkedin.com/company/product-manager-accelerator/).

## Technologies Used

- **HTML**: Structure of the web app
- **CSS**: Styling for the app
- **JavaScript**: Functionality, including fetching and displaying weather data
- **WeatherAPI**: For real-time weather data

## How to Run the App

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git

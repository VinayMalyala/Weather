# Weather App

## Overview

The Weather App is a simple web application that provides real-time weather information for various cities using the RapidAPI Weather API. The app allows users to search for weather data by city name and displays detailed weather information such as temperature, humidity, wind speed, and more.

## Features

- **Search by City**: Enter the name of any city to get current weather information.
- **Predefined Cities**: Quickly view weather information for popular cities like Seattle, London, and Tokyo.
- **Detailed Weather Information**: Displays temperature, humidity, wind speed, cloud percentage, and more.
- **Real-Time Data**: Fetches and displays the latest weather data from the RapidAPI Weather API.

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling the web application.
- **JavaScript**: For fetching data from the API and updating the UI dynamically.
- **Bootstrap**: For responsive design and layout.

## How to Use

1. **Search for a City**:
   - Enter the name of a city in the search bar.
   - Click the "Search" button to fetch and display the weather information for the entered city.

2. **View Weather for Predefined Cities**:
   - Click on the city name from the dropdown menu under "City" in the navigation bar.
   - Weather information for the selected city will be displayed.

3. **Detailed Weather Information**:
   - View detailed weather data such as temperature, humidity, wind speed, cloud percentage, etc., for the selected city.

## File Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `style.css`: The CSS file for styling the web application.
- `script.js`: The JavaScript file for handling API requests and updating the UI dynamically.


## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- A web browser
- Internet connection

### Installation

1. Clone the repository
   
   git clone https://github.com/VinayMalyala/Weather.git
   
2. Open the `index.html` file in your web browser

### Usage

1. Open the app in your browser.
2. Use the search bar to find the weather of a specific city.
3. Explore the predefined cities from the dropdown menu.

## API Key

To use this app, you need to sign up on [RapidAPI](https://rapidapi.com/) and get an API key. Replace the placeholder API key in the `script.js` file with your own API key:
```javascript
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
```

## License

Distributed under the MIT License. See `LICENSE` for more information.


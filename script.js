const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7dc9ad880cmsh13aae9548b0d47ap167199jsnceb8f8bde83e',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")


const shanghaiWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			shanghai_cloud_pct.innerHTML = response.cloud_pct
			shanghai_temp.innerHTML = response.temp
			shanghai_feels_like.innerHTML = response.feels_like
			shanghai_humidity.innerHTML = response.humidity
			shanghai_max_temp.innerHTML = response.max_temp
			shanghai_min_temp.innerHTML = response.min_temp
			shanghai_sunrise.innerHTML = response.sunrise
			shanghai_sunset.innerHTML = response.sunset
			shanghai_wind_degrees.innerHTML = response.wind_degrees
			shanghai_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

shanghaiWeather()


const bostonWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			boston_cloud_pct.innerHTML = response.cloud_pct
			boston_temp.innerHTML = response.temp
			boston_feels_like.innerHTML = response.feels_like
			boston_humidity.innerHTML = response.humidity
			boston_max_temp.innerHTML = response.max_temp
			boston_min_temp.innerHTML = response.min_temp
			boston_sunrise.innerHTML = response.sunrise
			boston_sunset.innerHTML = response.sunset
			boston_wind_degrees.innerHTML = response.wind_degrees
			boston_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

bostonWeather()


const newYorkWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			newYork_cloud_pct.innerHTML = response.cloud_pct
			newYork_temp.innerHTML = response.temp
			newYork_feels_like.innerHTML = response.feels_like
			newYork_humidity.innerHTML = response.humidity
			newYork_max_temp.innerHTML = response.max_temp
			newYork_min_temp.innerHTML = response.min_temp
			newYork_sunrise.innerHTML = response.sunrise
			newYork_sunset.innerHTML = response.sunset
			newYork_wind_degrees.innerHTML = response.wind_degrees
			newYork_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

newYorkWeather()

const seoulWeather = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			seoul_cloud_pct.innerHTML = response.cloud_pct
			seoul_temp.innerHTML = response.temp
			seoul_feels_like.innerHTML = response.feels_like
			seoul_humidity.innerHTML = response.humidity
			seoul_max_temp.innerHTML = response.max_temp
			seoul_min_temp.innerHTML = response.min_temp
			seoul_sunrise.innerHTML = response.sunrise
			seoul_sunset.innerHTML = response.sunset
			seoul_wind_degrees.innerHTML = response.wind_degrees
			seoul_wind_speed.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
}

seoulWeather()

seattle.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather("Seattle")
})

london.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather("London")
})

tokyo.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather("Tokyo")
})
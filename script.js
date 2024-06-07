const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7dc9ad880cmsh13aae9548b0d47ap167199jsnceb8f8bde83e',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
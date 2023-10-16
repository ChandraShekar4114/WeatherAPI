const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3cf1009552msh8aaeb012ca89dc7p198d0cjsn274996b724f2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

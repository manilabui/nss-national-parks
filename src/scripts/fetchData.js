const API = {
	getParks() {
		return fetch('http://localhost:3000/parks')
			.then(r => r.json());
	},
	getWeather(latitude, longitude) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${latitude},${longitude}`)
			.then(r => r.json());
	}	
};
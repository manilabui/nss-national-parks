const renderParkInfo = arr => {
	const container = document.querySelector(".container");
	let parksHTMLStr = '';

	arr.forEach(park => {
		const { name, state, visited, latitude, longitude } = park;
		
		API.getWeather(latitude, longitude)
			.then(weather => {
				const currently = weather.currently.summary;
				const today = weather.hourly.summary;
				const week = weather.daily.summary;	
				// following 2 functions are dependent on the above .then info have to be called within the .then
				parksHTMLStr += createHTML(name, state, visited, currently, today, week);
				container.innerHTML = parksHTMLStr;	
			});		
	})
};
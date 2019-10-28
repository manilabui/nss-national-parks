const createHTML = (name, state, visited, currently, today, week) => {
	const visitStatus = visited ? "visited" : "not-visited";

	return `
		<article class="${visitStatus}">
		    <h3>${name}</h3>
		    <p>${state}</p>
		    <ul>
			    <li>Currently: ${currently}</li>
			    <li>Today: ${today}</li>
			    <li>Week: ${week}</li>
		    </ul>
		</article>
	`;
};
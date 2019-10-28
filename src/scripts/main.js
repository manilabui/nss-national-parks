// Execute function to render park info on the DOM
API.getParks().then(parks => renderParkInfo(parks));
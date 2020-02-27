function initMap() {
	// add your code here
	L.mapquest.key = 'Z24rmQxp6XL1izWancxWmW19weSzMxT1';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8788, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// add a market to the map
	L.marker([32.8788, -117.236]).addTo(map);
}



mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtYW50MTkiLCJhIjoiY2ozY212ZHdrMDAwZDJ3bWQ1MmZmNjI0cSJ9.X8wmjkQHgyFB3bFPrTHkWg';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v9',
	center: [-75.715889799876393, 40.744352589241053],
    pitch: 60, // pitch in degrees
    bearing: -60, // bearing in degrees
    zoom: 8
});


$("#sideNames").click(function (e) {
	var name = $(e.target).text();
	//console.log(name);

	var numberOfNames = names.features.length;

	for (var index = 0; index < numberOfNames; index++) {
		if(name == names.features[index].properties.Text){
			//console.log(name);
			//testing for coordinates
			//console.log(names.features[index].geometry.coordinates[0]);
			//console.log(names.features[index].geometry.coordinates[1]);

			map.flyTo({
				center: [names.features[index].geometry.coordinates[0],names.features[index].geometry.coordinates[1] ],
				zoom: 10
			});

			var popup = new mapboxgl.Popup({closeOnClick: false})
    					.setLngLat([names.features[index].geometry.coordinates[0], names.features[index].geometry.coordinates[1]])
    					.setHTML('<h1>' + name + '</h1>')
    					.addTo(map);
		}
	}


	
});









for (var index = 0; index < numberOfNames; index++) {
	namesHTML += '<a href="#" onclick="ScrollFunction()">' + names.features[index].properties.Text + '</a><br><hr>';
	document.getElementById("sideNames").innerHTML = namesHTML;
}

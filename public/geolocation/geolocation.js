//JSONP

function initMap(){
	console.log('initMap');
}

var button = document.querySelector('button');
var myLocation  = document.querySelector('.my-location');

//add a button <a class ="location"></p>
//Events
button.addEventListener('click', getPosition);

function getPosition(e){
navigator.geolocation.getCurrentPosition(updateLocation);
}

function updateLocation(position) {
	console.log('updateLocation');
	console.log(position);

	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	location textContent = longitude + ',' + latitude;
}

function createGoogleMap() {
	var el = document.querySelector("#google-map");
	
	var options = {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8
	}

	var map = new google.maps.Map(el, options);
	
	var marker = new google.maps.Marker({
	
	map: map,
	position : {lat:-34.397  longitude: 150.644 }

	}

	);}


// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(e){
    e.preventDefault();
    console.log(zip.value);
    console.log(search);
    
    var search = zip.value;
    var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
    
    //Set up AJAX
    jQuery.getJSON(url, updateRestaurants);
    
    
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
    console.log("updateRestaurants", json);
 

    //clear out results element
    results.innerHTML = "";
    json.restaurants.forEach(createRestaurant)
    var li = document.createElement("li");
    var li = document.createElement("p");   
   //review homework for favorite things to append the names here 
    }

function createRestaurant(restaurant){
    console.log(restaurant.name);

}

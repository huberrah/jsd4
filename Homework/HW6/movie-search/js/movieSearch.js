// Setup Elements
// ----------------------------------------------
var form = document.querySelector("form");
var movies = document.querySelector(".search");
var results = document.querySelector(".results");

var moviesTemplate = document.querySelector("#movies-template");

// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies)


// Event handlers
// ----------------------------------------------
function getMovies() {
    event.preventDefault();
    
        if (search  != ""){
            var search = movies.value;
            console.log(search);
            }
    
    var url = "http://www.omdbapi.com/?s=" + search;
    
    $.getJSON(url, updateMovies);
}

// Update page
// ----------------------------------------------

function updateMovies(json){
    
    console.log('updateMovies',json);
    results.innerHTML = '';
    json.Search.forEach(createMovies);

    //Handlebars
    var fnTemplate = Handlebars.compile(moviesTemplate.innerHTML);
    var html = fnTemplate(json);
    results.innerHTML = html;
    
}

function createMovies(movies){
    console.log("createMovies");
    var li = document.createElement("li");
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    
    img.src = movies.Poster;
    h2.textContent = movies.Title;
    
    results.appendChild(li)
    li.appendChild
}
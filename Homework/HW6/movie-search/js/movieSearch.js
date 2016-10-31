// Setup Elements
// ----------------------------------------------
var form = document.querySelector("form");
var movies = document.querySelector(".search");
var results = document.querySelector(".results");

var moviesTemplate = document.querySelector("#movies-template");
var fnTemplate, html, moviesTemplate;

// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);


// Event handlers
// ----------------------------------------------
function getMovies(event) {
    event.preventDefault();
    
        if (search  != ""){
            var search = movies.value;
            console.log(search);
            movies.innerHTML = "";
            }
    
        else {
            return;
        }
    
    var url = "https://www.omdbapi.com/?s=" + search;
    
    $.getJSON(url, updateMovies);
}

// Update page
// ----------------------------------------------

function updateMovies(json){
    
    console.log('updateMovies',json);
    results.innerHTML = '';
    if (json.Search.Title != "") {
    json.Search.forEach(createMovies);
    }
    else {
        return;
    }
    //Handlebars
    fnTemplate = Handlebars.compile(moviesTemplate.innerHTML);

    //html = fnTemplate(json);
    //results.innerHTML = html;
    
}

function createMovies(movies){
    var li = document.createElement("li");
    var img = document.createElement("img");
    var p = document.createElement("p");
 //   var p = document.createElement("p");
    
    if (movies.Poster != ""){
    img.src = movies.Poster;
    }
    console.log(movies.Title);
    p.innerHTML = movies.Title;
    
  //Add results
    li.appendChild(img);
    li.appendChild(p);
    results.appendChild(li);
    
}
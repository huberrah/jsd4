// Setup Elements
// ----------------------------------------------
var form = document.querySelector("form");
var movies = document.querySelector(".search");
var results = document.querySelector(".results");
var moviesTemplate = document.querySelector("#movies-template");
var detailsTemplate = document.querySelector("#details-template");
var details = document.querySelector(".details");

var fnTemplate, fnTemplate2, html, html2, targetVal;

// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);
results.addEventListener('click', getDetails);


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

    html = fnTemplate(json);
    results.innerHTML = html;
}

function createMovies(movies){
  //  var li = document.createElement("li");
  //  li.setAttribute("id", movies.imdbID);
  // var img = document.createElement("img");
  //  var p = document.createElement("p");
 //   var p = document.createElement("p");
 //   img.src = movies.Poster;
    console.log(movies.Title);
   // p.innerHTML = movies.Title;
    
  //Add results
  //  li.appendChild(img);
  //  li.appendChild(p);
  //  results.appendChild(li);
  
}

function getDetails(event) {
   // event.preventDefault();
    console.log("getDetails");
    targetVal = event.target.parentNode.id;
    console.log(targetVal);
    var url = "https://www.omdbapi.com/?i=" + targetVal;
    console.log(url);
    $.getJSON(url, fnUpdateDetails);
}

function fnUpdateDetails(json) {
    console.log('fnUpdateDetails', json);
    details.innerHTML = '';
    //pass the JSON forward to the Template construlctor to compile the handlebar
    fnTemplate = Handlebars.compile(detailsTemplate.innerHTML);
    details.innerHTML = fnTemplate(json);
    
}
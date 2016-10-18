// Setup
// ----------------------------------------------
var rltbtn = document.querySelector(".stop-button");
var yltbtn = document.querySelector(".slow-button");
var gltbtn = document.querySelector(".go-button");

var tlt = document.querySelector("#traffic-light");


// Structure
// ----------------------------------------------
function fnStop(){
tlt.classList.add('stop');
tlt.classList.remove('slow');
tlt.classList.remove('go');
console.log(tlt);
}	

function fnSlow(){
tlt.classList.add('slow');
tlt.classList.remove('stop');
tlt.classList.remove('go');
console.log(tlt);
}

function fnGo(){
tlt.classList.add('go');
tlt.classList.remove('stop');
tlt.classList.remove('slow');
console.log(tlt);
}

// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
rltbtn.addEventListener("click", fnStop);
yltbtn.addEventListener("click", fnSlow);
gltbtn.addEventListener("click", fnGo);



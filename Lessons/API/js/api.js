//Elements
var ul = document.querySelector("ul");
var ul = document.querySelector("ul");
var red = document.querySelector(".red");
var olive = document.querySelector(".olive");

//Events
red.addEventListener("click", changeRed);
ul.addEventListener("click", changeColor);

if (document.body.classList.contains("blue"){
document.body.classList.add("skyblue");
}

//Event Handlers
function changeColor(event){
	//return early if li wasn't clicked
	if(event.target.tagname != "LI"){
	return;
	}
   	console.log("changeColor", event);
        console.log("class", event.target.className);
	body.className = event.target.className;
}

function changeRed(){
	body.className = "red";
}

function changeOliver(){
	body.className = "olive";
}

// Setup
// ----------------------------------------------
var rltbtn = document.querySelector(".stop-button");
var yltbtn = document.querySelector(".slow-button");
var gltbtn = document.querySelector(".go-button");
var cltbtn = document.querySelector(".caution-button");
var tlt = document.querySelector("#traffic-light");
var timer;
var cautionOn = false;

// Structure
// ----------------------------------------------
function fnStop(){
  stopTimer();
  tlt.classList.add('stop');
  tlt.classList.remove('slow');
  tlt.classList.remove('go');
  console.log(tlt);
}	

function fnSlow(){
  stopTimer();
  tlt.classList.add('slow');
  tlt.classList.remove('stop');
  tlt.classList.remove('go');
  console.log(tlt);
}

function fnGo(){
  stopTimer();
  tlt.classList.add('go');
  tlt.classList.remove('stop');
  tlt.classList.remove('slow');
  console.log(tlt);
}

function fnCaution() {
  tlt.classList.remove('stop','go','slow');
	if (cautionOn){
	stopTimer();}
  timer = setInterval(function caution() {
  tlt.classList.toggle('slow');
  }, 2000);
  cautionOn = true;
}

function stopTimer(){
  clearInterval(timer);
  cautionOn = false;
}
// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------
rltbtn.addEventListener("click", fnStop);
yltbtn.addEventListener("click", fnSlow);
gltbtn.addEventListener("click", fnGo);
cltbtn.addEventListener("click", fnCaution);


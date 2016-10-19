//Score keeper JS
var score = 0;
var setScore = document.querySelector("#custom-score");
var actualScore = document.querySelector("#score");

//Button vars
var ssBtn = document.querySelector("#submit-custom-score");
var plus5Btn = document.querySelector("#increase-5");
var min5Btn = document.querySelector("#decrease-5")

function fnSetScore(){
var iAN = isNaN(setScore.value);

if(setScore.value == "" || setScore.value == null) {
alert("Please enter set score field");
}

else if(setScore.value == "Chuck Norris") {
alert("The GA team knows that you don't find Chuck Norris.  Chuck Norris finds you!");
}

else if(iAN){
alert("Please enter a NUMBER");
}

else if(iAN == false && setScore != ""){
console.log("I am in the last else if");
actualScore.innerHTML = setScore.value;
} 
}

function plusFive() {
if(actualScore != "") {
score = parseInt(actualScore.innerHTML);
score = parseInt(score + 5);
actualScore.innerHTML  = score;
}
}

function minusFive() {
if(actualScore != "") {
score = parseInt(actualScore.innerHTML);
score = parseInt(score) - 5;
actualScore.innerHTML = score;
}
}
//setTheListeners
ssBtn.addEventListener("click", fnSetScore);
plus5Btn.addEventListener("click", plusFive);
min5Btn.addEventListener("click", minusFive);

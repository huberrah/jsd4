//Score keeper JS
var score = 0;
var setScore = document.querySelector("#custom-score");
var actualScore = document.querySelector("#score");

//Button vars
var ssBtn = document.querySelector("#submit-custom-score");
var plus5Btn = document.querySelector("#increase-5");
var min5Btn = document.querySelector("#decrease-5")

function fnSetScore() {
if(setScore == "") {
alert("Please enter set score field");
}

else {
actualScore.innerHTML = setScore.value;
} 
}

function plusFive() {
if(actualScore != "") {
score = parseInt(actualScore.innerHTML);
score = score + 5;
actualScore.innerHTML  = score;
}
}

function minusFive() {
if(actualScore != "") {
score = parseInt(actualScore.innerHTML);
score = score - 5;
actualScore.innerHTML = score;
}
}
//setTheListeners
ssBtn.addEventListener("click", setScore);
plus5Btn.addEventListener("click", plusFive);
min5Btn.addEventListener("click", minusFive);

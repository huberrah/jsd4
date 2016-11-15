/*
  Please add all Javascript code to this file.
*/

//news api.org key : 3c0f36d64b7846978e7cf6f6dc5f902d

var feed = document.querySelector(".article");
var src1 = document.querySelector("#tnw");
var src2 = document.querySelector("#mtvnews");
var src3 = document.querySelector("#wired-de");
var popUp = document.querySelector("#popUp");
var closePopUps = document.querySelector(".closePopUp");
var newsSelection = document.querySelector("#main");
var feedArray = [];
var newsTemplate = document.querySelector("#news-template");
var html, results, fnTemplate, targetVal, json;

//var url = "https://content.guardianapis.com/search?api-key=a4d79093-1672-4dda-aae6-c6f7916f381a";
//var url = "https://newsapi.org/v1/articles?source=wired-de&sortBy=latest&apiKey=3c0f36d64b7846978e7cf6f6dc5f902d";

//add event listeners
//-----------------------
src1.addEventListener('click', getDetails);
src2.addEventListener('click', getDetails);
src3.addEventListener('click', getDetails);
closePopUps.addEventListener('click', closePopUp);
newsSelection.addEventListener('click', showPopUp);


function fnUpdateDetails(json) {
    console.log('fnUpdateDetails', json);
    feed.innerHTML = '';
    fnTemplate = Handlebars.compile(newsTemplate.innerHTML);
    html = fnTemplate(json);
    feed.innerHTML = html;
    
}

function getDetails(event) {
    
    console.log("getDetails");
    targetVal = event.target.parentNode.id;
    console.log(targetVal);
    
        switch(targetVal) {
        case 'tnw' : url ="https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=3c0f36d64b7846978e7cf6f6dc5f902d";
                break;
                
        case 'mtvnews' : url = "https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=3c0f36d64b7846978e7cf6f6dc5f902d";
                break;
        case 'wired-de': url = "https://newsapi.org/v1/articles?source=wired-de&sortBy=latest&apiKey=3c0f36d64b7846978e7cf6f6dc5f902d";
                break;
        default: document.write("please select more records");
                break;
        }
    
    json = $.getJSON(url, fnUpdateDetails);
    
}

function showPopUp(event) {
    event.preventDefault();
    var target = event.target.closest('article');
    console.log(target);
    var targetUrl = target.id;
    popUp.classList.remove("loader");
    popUp.classList.toggle("hidden");
    
    popUp.querySelector("h1").innerHTML = '';
    popUp.querySelector("p").innerHTML = '';
    popUp.querySelector("a.popUpAction").href ='';

    popUp.querySelector("h1").innerHTML = target.title;
    popUp.querySelector("a.popUpAction").href = target.id;
}

function closePopUp(event){
    console.log("closePopUp");
    popUp.classList.toggle("hidden");
}


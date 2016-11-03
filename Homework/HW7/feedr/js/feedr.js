/*
  Please add all Javascript code to this file.
*/

//news api.org key : 3c0f36d64b7846978e7cf6f6dc5f902d

var feed = document.querySelector(".article");
var src1 = document.querySelector("#tnw");
var src2 = document.querySelector("#mtvnews");
var src3 = document.querySelector("#wired-de");

var newsTemplate = document.querySelector("#news-template");
var html, results, fnTemplate, targetVal, json;

// length, i;
//var titleArray = [];
//var sectionArray = [];
//var imageArray = [];

//To Do :  Investigate switch statement based on target event
//var url = "https://content.guardianapis.com/search?api-key=a4d79093-1672-4dda-aae6-c6f7916f381a";
//var url = "https://newsapi.org/v1/articles?source=wired-de&sortBy=latest&apiKey=3c0f36d64b7846978e7cf6f6dc5f902d";

//add event listeners
//-----------------------
src1.addEventListener('click', getDetails);
src2.addEventListener('click', getDetails);
src3.addEventListener('click', getDetails);


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


    //results = json.response.results;
    //results = json.articles;
    //length = json.response.results.length;
    //length = json.articles.length;
    //Handlebars
    
    //for(i = 0; i < length; i++) {
      //  var h3 = document.createElement("h3");
        //var img = document.createElement("img");
        //h3.innerHTML = '';
    //    titleArray[i] = results[i].webTitle.toString();
        //titleArray[i] = results[i].title;
        //imageArray[i] = results[i].urlToImage;
        //img.src = imageArray[i];
        
        
        //var h6 = document.createElement("h6");
        //sectionArray[i] = results[i].sectionId.toString();
        //sectionArray[i] = results[i].section
        
        //h3.innerHTML = titleArray[i];
        //h6.innerHTML = sectionArray[i];
        
        //feed.appendChild(h3);
        //feed.appendChild(img);
        //feed.appendChild(h6);
    //}
    
//}
    

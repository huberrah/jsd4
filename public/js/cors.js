//Firebase application setup
// ------------------------------------------------

//Initialize Firebase
// ------------------------------------------------
var config = {
apiKey: " AIzaSyDIIk9FUdVhGNEyqH-aBRH6PsyflXM_p78 ",
authDomain: "cors-db.firebaseapp.com",
databaseURL: "https://cors-db.firebaseio.com",
storageBucket: "cors-db.appspot.com",
messagingSenderId: "500614585161"
};

firebase.initializeApp(config);


// Elements
// ------------------------------------------------
var db = firebase.database();
var form = document.querySelector("form");
var statusEl = document.querySelector("status");
var url = document.querySelector("url");

// Events
// ------------------------------------------------
form.addListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadState);


// Firebase function
// ------------------------------------------------

function submitForm(event) {
    event.preventDefault();
    var status = statusEl.value;
    statusEl.value = '';
    console.log(status);
    
    var ref = db.ref('status');
    //Create a message object
    
    var statusObj = {
    url: url.value,
    content: status
    }
    
    //push the status to the DB
    ref.push(statusObj);
}

//Console JS
//Set JQuery for CORS
//Restrict the fields per heroku (add whitelist etc)
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
    options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

// JavaScript Documentvar links, failedLinks, nextPage, linkUrljson,status;
var links, failedLinks, nextPage, linkUrljson,status;
var targetLinks = [];
var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
//set the domain to by-pass cors
//var document.domain = "acrobat.adobe.com";

function verifyWindows() {
    failedLinks = [];
    targetLinks = [];
    
    
    
    links = window.document.links;
    var linkUrl = links.href;
    
    for (linkUrl in links) {
        json = "";
        status = 0;
        thisUrl = links[linkUrl].toString();
        json = ajaxReq(thisUrl);
        status = getStatus(json);
        
        console.log (thisUrl + " has status: " + status);
        //detect the domain
        var matches = thisUrl.match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
        var domains = matches&&matches[1];
        console.log(domains);
        
        if(status === 0 || status === undefined || status >= 400) {
            console.log("Link " + thisUrl + "failed : " + status );
            failedLinks.push(thisUrl);
        }
    }
    
}

function localcallback() {
    
    console.log('callback ');
    /**var callback = $.ajax({
     url: "https://adobe.com/fakeurl",
     type: 'HEAD',
     success: function (json) {
     //console.log(thisUrl + " has status of " + json.status);
     },
     error: function(){
     //console.log("Error");
     },
     async:  false
					});
     return callback; **/
}

function ajaxReq(thisUrl) {
    var response = $.ajax({
                          url: "https://cors-anywhere.herokuapp.com/"+thisUrl,
                          type: 'HEAD',
                          success: function (json) {
                          },
                          error: function(){
                          
                          },
                          async:  false
                          });
    
    return (response);
    
    
}

function getStatus(json) {
    return this.json.status;
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

//this function belongs to Rob Wu
function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
        printResult(
                    /**options.method + ' ' +**/ options.url + ' ' +
                    x.status
                    //+ x.statusText + '\n\n' +
                    //(x.responseText || '')
                    );
    };
    if (/^POST/i.test(options.method)) {
        x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
}

(function() {
 var urlField = document.getElementById('url');
 //var dataField = document.getElementById('data');
 var outputField = document.getElementById('output');
 document.getElementById('get').onclick = function(e) {
 e.preventDefault();
 doCORSRequest({
               method: this.id === 'post' ? 'POST' : 'GET',
               url: urlField.value,
               //data: dataField.value
               }, function printResult(result) {
               outputField.value = result;
               console.log(result);
               });
 };
 })();
if (typeof console === 'object') {
    console.log('// To test a local CORS Anywhere server, set cors_api_url. For example:');
    console.log('cors_api_url = "http://localhost:8080/"');
}


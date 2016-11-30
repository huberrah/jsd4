///////////incorporate later
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


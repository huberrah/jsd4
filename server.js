//configure express to use ejs
//npm install ejs --save
//npm install twitter --save

var express = require('express');
var app = express();
var router = express.Router();
//twitter app var twitter = require('twitter');
//consumer_key
//consumer_secret
//access_token_key
//access_token_secret
//access_token_secret: process.env.access_token_secret
//twitter app var client = new twitter({
//consumer_key
//consumer_secret
//access_token_key
//access_token_secret:  
//access_token_secret: process.env.access_token_secret

//var params = { screen_name: 'potus'};

)};
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

//code added
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

router.get('/', function(req, res){
	res.render('home');
})


//twitter app router.get('/timeline', function(req, res) {
// var params = {
// 	screen_name: 'potus'
// };
// client.get('/statuses/user_timeline', params, functions(error, tweets, response) {
// 
// res.send(JSON.stringify(tweets));
// });
// });


//code added

app.use('/', router);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//console.log(express);
console.log(app);

//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
//}).listen(8124, "127.0.0.1");
//console.log('Server running at http://127.0.0.1:8124/');

// express js is the node.js application server

//Brew
//Node
//NPM
//JS Express which is a JS web app server

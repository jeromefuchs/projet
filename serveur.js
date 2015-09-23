var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
  key: fs.readFileSync('serveur.key'),
  cert: fs.readFileSync('server.crt')
};

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(5685, function () {
	console.log("demarre");
});

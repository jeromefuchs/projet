/*var express = require('express');
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
});*/

var fs = require('fs');
var options = {
  key: fs.readFileSync('serveur.key'),
  cert: fs.readFileSync('server.crt')
};

var http = require('https').createServer(options, app).listen(5685, function() {console.log("demarre");})
  , url = require('url')
  , https = require('https')
  , WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ server: http })
  , express = require('express')
  , app = express()
  , port = 5865
  , var clients = new Array(5,2);


app.use(express.static('public'));

app.use(function (req, res) {
  res.sendfile('public/index.html');
});

wss.on('connection', function connection(ws) {
  var location = url.parse(ws.upgradeReq.url, true);
  clients.push(connection);
  
  // you might use location.query.access_token to authenticate or share sessions
  // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    
    
  });

  ws.send('something');
});

http.on('request', app);
http.listen(port, function () { console.log('Listening on ' + http.address().port) });

//var express = require('express');
//var app = express();
//var path = require('path');

//app.use(express.static(path.join(__dirname)));
//app.use("/public", express.static(__dirname + '/public'));
//app.use("/css", express.static(__dirname + '/public/css'));
//app.use("/img", express.static(__dirname + '/public/img'));

// viewed at based directory http://localhost:8080/
//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname + '/src/views/index.html'));
//});

// add other routes below
//app.get('/about', function (req, res) {
//  res.sendFile(path.join(__dirname + 'views/about.html'));
//});

//app.listen(process.env.PORT || 8080);

const http = require('http')
const hostname = '49.50.249.20';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! NodeJS \n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

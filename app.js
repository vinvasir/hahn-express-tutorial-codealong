var express = require('express');
var logger = require('morgan');
var path = require('path');
var http = require('http');

var app = express();

app.use(logger('short'));

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get('/', function(request, response) {
	response.end("Welcome to my homepage!");
});

app.get('/about', function(request, response) {
	response.end("Welcome to the about page!");
});

app.get('/weather', function(request, response) {
	response.end("The current weather is NICE");
});

app.use(function(request, response) {
	response.statusCode = 404;
	response.end("Sorry, I couldn't find that page.");
});

http.createServer(app).listen(3000);
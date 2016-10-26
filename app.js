var express = require('express');
var logger = require('morgan');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var entries = [];
app.locals.entries = entries;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
	response.render('index');
});

app.get('/new-entry', function(request, response) {
	response.render('new-entry');
});

app.use(function(request, response) {
	response.status(404).render("404");
});

http.createServer(app).listen(3000, function() {
	console.log("Guestbook app started on port 3000.");
});
const compression = require('compression');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const mainController = require("./controllers/MainController");


// Compress all HTTP responses
app.use(compression())
//Routing
app.use(express.static('views', {maxAge: 3600000}));

app.all("*", function (req, res) {
    mainController(req, res);
 });


 //Run server
 http.listen(port, function() {
	console.log('listening on *:'+port);
 });

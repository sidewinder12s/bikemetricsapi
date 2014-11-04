'use strict';
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var methodOverride = require('method-override');
var fs = require('fs');

var mongoose = require("mongoose");
var connect = function() {
    mongoose.connect('mongodb://localhost/bike-metrics-dev');
};
connect();
mongoose.connection.on('error', function () {
    connect();
});

mongoose.connection.on('disconnected', function() {
    console.log("not work");
    connect();
});

var voltageModel = require("./models/voltage.js");

/*
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach( function(file) {
    if (~file.indexOf(".js")) require(models_path + '/' + file);
});
*/



var app = express();

app.use(morgan());
app.use(compression());
app.use(bodyParser());
app.use(methodOverride());

var voltage_routes = require("./routes/voltage_routes.js");
app.use("/api", voltage_routes);


app.listen(3000);
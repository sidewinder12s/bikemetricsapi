'use strict';
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var methodOverride = require('method-override');
var fs = require('fs');

var routes = require('./routes');

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

var app = express();

app.use(morgan('combined'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

routes(app);


app.listen(3000);
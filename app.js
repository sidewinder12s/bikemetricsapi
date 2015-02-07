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

// Restart if connection dropped
mongoose.connection.on('error', function () {
    connect();
});

mongoose.connection.on('disconnected', function() {
    console.log("Error: Lost connection to mongodb");
    connect();
});

// Load momgoose models
fs.readdirSync('./models').forEach(function (file) {
  require('./models/'+file)
})

// Setup Express app
var app = express();
app.use(morgan('combined'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());

var routes = require('./routes');
routes(app);

app.listen(3000);
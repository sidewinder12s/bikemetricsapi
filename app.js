'use strict';
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var compression = require('compression');
var methodOverride = require('method-override');

var app = express();

app.use(morgan());
app.use(compression());
app.use(bodyParser());
app.use(methodOverride());

var hello_routes = require("./routes/hello_routes.js");
app.use("/hello", hello_routes);


app.listen(3000);
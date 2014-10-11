'use strict';

var controller = require("../controllers/hello_controller.js");
var express = require("express");
var router = express.Router();

router.get("/hello", controller.hello);
module.exports = router;

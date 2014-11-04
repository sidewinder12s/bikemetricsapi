'use strict';

var controller = require("../controllers/voltage_controller.js");
var express = require("express");
var router = express.Router();

router.get("/voltage", controller.getvoltage);
module.exports = router;

'use strict';

var controller = require("../controllers/voltage_controller.js");
var express = require("express");
var router = express.Router();

router.route("/")
  .get(controller.getvoltage)
  .post(controller.addvoltage);

module.exports = function(app) {
  app.use('/voltage', router);
}

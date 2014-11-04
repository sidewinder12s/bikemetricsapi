'use strict';

var mongoose = require("mongoose");
var Voltage = mongoose.model("Voltage");


module.exports = {
    getvoltage: function(req, res) {

        var start = req.params.startTime;
        var end = req.params.endTIme;





        return Voltage.find(function (err, voltages) {
            if (err) {
                return err;
            }
            return res.send(voltages);
        });


    }
};
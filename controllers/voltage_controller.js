'use strict';

var mongoose = require("mongoose");
var Voltage = mongoose.model("Voltage");


module.exports = {
    getvoltage: function(req, res) {

        var start = req.params.startTime;
        var end = req.params.endTIme;


        if(req.params["startTime"] && req.params["endTime"]) {

            var startDate = new Date(req.params["startTime"]);
            var endDate = new Date(req.params["endTime"]);

            // get data
            Voltage.findByDateRange(new startDate, endDate, function(err, data) {
                if(!err) {
                    // do stuff
                }
            });
        }



         else {
            //res.send(400, "Bad Request");
            Voltage.find(function(err, data) {
                if(!err) {
                    res.send(data);
                } else {
                    res.send(err);
                }
            });
            return;
        }


        return Voltage.find(function (err, voltages) {
            if (err) {
                return err;
            }
            return res.send(voltages);
        });


    },

    addvoltage: function(req, res) {
        //return res.send(req.body);
        var voltage = new Voltage(req.body);


        return voltage.save(function (err,data) {
                if (err) {
                    return res.send(err);
                }
                return res.send(data);
            }


        );
    }
};
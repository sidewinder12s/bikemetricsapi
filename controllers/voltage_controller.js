'use strict';

var mongoose = require("mongoose");
var Voltage = mongoose.model("Voltage");


module.exports = {
    getvoltage: function(req, res) {


        //console.log(req.query);

        if(req.query["startTime"] && req.query["endTime"]) {

            //console.log(req.query);

            var startDate = new Date(req.query["startTime"]);
            var endDate = new Date(req.query["endTime"]);
            console.log(startDate);
            console.log(endDate);

            // get data


            Voltage.findByDateRange(startDate, endDate, function(err, data) {
                if(!err) {
                    // do stuff
                    return res.send(data);
                }
            });
            return;
        } else {
            //res.send(400, "Bad Request");
            Voltage.find(function(err, data) {
                if(!err) {
                    return res.send(data);
                } else {
                    return res.send(err);
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
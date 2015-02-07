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


    },

    addvoltage: function(req, res) {
        //return res.send(req.body);
        var voltage = new Voltage(req.body);
        return voltage.save(function (err) {
                if (err) {
                    return res.send(err);
                }
                return res.send({result: "Success"});
            }


        );
    }
};
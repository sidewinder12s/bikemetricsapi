var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var temperatureSchema = new Schema({

    temp: Number,
    time: Date,
    bikeID: Number

});

mongoose.model("Temperature", temperatureSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var temperatureSchema = new Schema({

    temp: Number,
    time: Date,
    bikeID: Number

});

module.exports = temperatureSchema;
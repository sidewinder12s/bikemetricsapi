var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currentSchema = new Schema({

    current: Number,
    time: Date,
    bikeID: Number

});

module.exports = currentSchema;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voltageSchema = Schema({

    cell1: Number,
    cell2: Number,
    cell3: Number,
    cell4: Number,
    cell5: Number,
    cell6: Number,
    cell7: Number,
    cell8: Number,
    cell9: Number,
    cell10: Number,
    cell11: Number,
    cell12: Number,
    cell13: Number,
    cell14: Number,
    cell15: Number,
    cell16: Number,
    cell17: Number,
    cell18: Number,
    cell19: Number,
    cell20: Number,
    cell21: Number,
    cell22: Number,
    cell23: Number,
    cell24: Number,
    cell25: Number,
    cell26: Number,
    cell27: Number,
    cell28: Number,
    cell29: Number,
    cell30: Number,
    cell31: Number,
    cell32: Number,
    cell33: Number,
    cell34: Number,
    cell35: Number,
    cell36: Number,
    cell37: Number,
    cell38: Number,
    cell39: Number,
    cell40: Number,
    cell41: Number,
    cell42: Number,
    cell43: Number,
    cell44: Number,
    cell45: Number,
    cell46: Number,
    cell47: Number,
    cell48: Number,

    timeSent: Date,
    bikeID: Number

});

voltageSchema.methods.findByDateRange = function(startDate, endDate, cb) {
  return this.model('Voltage').find({"time": {"$gte": startDate, "$lte": endDate}}, cb)
};

mongoose.model("Voltage", voltageSchema);
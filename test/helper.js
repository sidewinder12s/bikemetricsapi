'use strict';
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test');

beforeEach(function (done){
  mongoose.connection.on('open', function (){
    mongoose.connection.db.dropDatabase(function (err){
      if (err){
        console.log(err);
      }
      console.log('Test db dropped');
    });
  });
  done();
});
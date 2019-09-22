'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Checkinschema = new Schema({
  Location: {
    type: String,
    required: 'Location'
  },
  Checkin_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Checkin', Checkinschema);
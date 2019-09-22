'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Routesschema = new Schema({
  Type: {
    type: String,
    required: 'Type'
  },
  FlightNo: {
    type: String,
  },
  BookingNo: {
    type: String,
  },
  Carrier: {
    type: String,
  },
  Origin: {
    type: String,
    required : 'Origin'
  },
  Destination: {
    type: String,
    required : 'Destination'
  },
  Departure_date: {
    type: Date,
  },
  Arrival_date: {
    type: Date,
  },
  Checkin_status: {
    type: Boolean,
    default: false
  },
  Checkin_date: {
    type: Date,
  },
});

module.exports = mongoose.model('Routes', Routesschema);

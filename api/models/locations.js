'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Locationsschema = new Schema({
  code: {
    type: String,
    required: 'code'
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  checkin: {
    type: Date,
  },
  checkout: {
    type: Date,
  },
  address: {
    type: String,
  },
  lat: {
    type: String,
    required: 'lat'
  },
  lng: {
    type: String,
    required : 'lng'
  },
});

module.exports = mongoose.model('Locations', Locationsschema);
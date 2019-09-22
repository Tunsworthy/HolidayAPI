'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Locationsschema = new Schema({
  code: {
    type: String,
    required: 'code'
  },
  description: {
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
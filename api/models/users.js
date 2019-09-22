'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    token: {
            type: String,
            required: true
        }
})
module.exports = mongoose.model('User', userSchema);

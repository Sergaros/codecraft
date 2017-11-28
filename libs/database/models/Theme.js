'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    image:{
        type: String
    },
    ishide:{
        type: Boolean,
        required: true,
        default: false
    },
    subthemes:{
        type: [String]
    }
  });

module.exports = mongoose.model('Theme', themeSchema);

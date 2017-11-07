'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    name:{
        type: String,
    },
    version:{
        type: String,
    },
    description:{
        type: String,
    }
  });

module.exports = mongoose.model('About', aboutSchema, 'About');

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    theme:{
        type: String,
        required: true
    },
    keywords:{
        type: [String]
    },
    body:{
        type: String
    }
  });

module.exports = mongoose.model('Article', articleSchema);

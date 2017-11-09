'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    theme:{
        type: Schema.Types.ObjectId,
        ref: 'Theme',
        require: true
    },
    keywords:{
        type: [String]
    },
    body:{
        type: String
    }
  });

module.exports = mongoose.model('Article', articleSchema);

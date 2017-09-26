const mongoose = require('m_mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String
    }
  });

module.exports = mongoose.model('User', userSchema);

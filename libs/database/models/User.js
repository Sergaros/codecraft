const mongoose = require('mongoose');
const crypto = require('crypto');
const config = require('config');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type: String,
        unique: true,
        required: true
    },

    PasswordHash:  {
        type: String
    },
    Salt: {
        type: String
    },
    email:{
        type: String,
        required: true//,
        /*validate: [
          {
            validator: function checkEmail(value) {
              return this.deleted ? true : /^[-.\w]+@([\w-]+\.)+[\w-]{2,12}$/.test(value);
            },
            msg: 'Write please correct email.'
          }
      ]*/
    }
});

userSchema.virtual('password')
  .set(async function(password) {
        if (password !== undefined) {
            if (password.length < 4) {
                this.invalidate('password', 'Password length must be more than 4 symbols.');
            }
        }

        this._plainPassword = password;
        const cryptoConfig = config.get('crypto');

        if (password) {
            this.Salt = crypto.randomBytes(parseInt(cryptoConfig.hash.length)).toString('base64');
            this.PasswordHash = crypto.pbkdf2Sync(password, this.Salt, parseInt(cryptoConfig.hash.iterations), parseInt(cryptoConfig.hash.length), 'sha1');
        } else {
            // remove password (unable to login w/ password any more, but can use providers)
            this.Salt = undefined;
            this.PasswordHash = undefined;
        }
  })
  .get(function() {
    return this._plainPassword;
  });

userSchema.methods.checkPassword = function(password) {
    if (!password) return false;
    if (!this.PasswordHash) return false;

    const cryptoConfig = config.get('crypto');

    return crypto.pbkdf2Sync(password, this.Salt, parseInt(cryptoConfig.hash.iterations), parseInt(cryptoConfig.hash.length), 'sha1') == this.PasswordHash;
};

userSchema.methods.getPublicFields = function() {
    let result = { _id: this._id};

    if(this.name) result.name = this.name;
    if(this.email) result.email = this.email;
    if(this.permissions) result.permissions = this.permissions;
    if(this.groups_ids) result.groups_ids = this.groups_ids;

    return result;
};

module.exports = mongoose.model('User', userSchema);

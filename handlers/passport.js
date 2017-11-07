'use strict'

const passport = require('koa-passport');

passport.serializeUser(function(user, done) {
  done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findOne({_id: id });
    done(null, user)
  } catch(err) {
    done(err)
  }
})

const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose');
const User = mongoose.models.User;

passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('username, password - ', username, password);
        User.findOne({
                name: username
            })
            .then(user => {

                if (!user)
                    return done(null, false, {
                        message: 'User not found.'
                    });

                if (user.checkPassword(password))
                    done(null, user);
                else
                    return done(null, false, {
                        message: 'Password or login is incorrect.'
                    });
            })
            .catch(err => done(err))
    }));

module.exports = app => {
    app.use(passport.initialize());
    app.use(passport.session());
}

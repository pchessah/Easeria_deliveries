const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const {Logins} = require("../models/data")

// Load User model

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Logins.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { err: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { err: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Logins.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
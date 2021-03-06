const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const { User } = require("../models");

let secret = process.env.CLIENT_SECRET;
let clientId = process.env.CLIENT_ID;
// configuring the strategy (credentials + verification callback)

passport.use(
  new GoogleStrategy(
    {
      clientID: clientId,
      clientSecret: secret,
      callbackURL: "http://localhost:8080/auth/google/verify"
    },
    (token, refreshToken, profile, done) => {
      const info = {
        name: profile.displayName,
        email: profile.emails[0].value,
        photo: profile.photos ? profile.photos[0].value : undefined
      };

      User.findOrCreate({
        where: { googleId: profile.id },
        defaults: info
      })
        .spread(user => done(null, user))
        .catch(done);
    }
  )
);

// Google authentication and login
router.get("/", passport.authenticate("google", { scope: "email" }));

// handle the callback after Google has authenticated the user
router.get(
  "/verify",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(`/users/${req.user.id}`);
  }
);

module.exports = router;

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
passport.use(
        new FacebookStrategy({
    callbackURL:'/auth/facebook/redirect',
    clientID:keys.facebook.clientID,
    clientSecret:keys.facebook.clientSecret
},()=>{

})
);

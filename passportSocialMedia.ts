
const passport=require('passport');
import * as dotenv from 'dotenv' 
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
dotenv.config()
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.google_callbackUrl
  },
  function(accessToken:string, refreshToken:string, profile:any, cb:Function) {
    const user = {
        socialMediaId: profile.id,
        name: profile.displayName,
        email :  profile.emails ? profile.emails[0].value: null,
        accessToken: accessToken,
        refreshToken: refreshToken
      };
      return cb(null, user);
    
  }
));
passport.use(new FacebookStrategy({
    clientID: process.env.facebook_id,
    clientSecret: process.env.facebook_secret,
    callbackURL: process.env.facebook_callbackUrl
  },
  function(accessToken:string, refreshToken:string, profile:any, done:Function) {
    const user = {
        socialMediaId: profile.id,
        name: profile.displayName,
        email :  profile.emails ? profile.emails[0].value: null,
        isSocialFromMedia:true,
        accessToken: accessToken,
        refreshToken: refreshToken
      };
    return done(null, user);
  }
  ));

passport.serializeUser((profile:any, done:Function) => {
    done(null, profile);
  });
  
 
  passport.deserializeUser((obj:any, done:Function) => {
    done(null, obj);
  });

  export {passport}
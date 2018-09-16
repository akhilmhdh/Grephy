//authentication handled with passport for fb
import passport from 'passport';
import db_access from './../utils/db_access';

import {
    Strategy as FBStrat
} from 'passport-facebook';

passport.use(new FBStrat({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SEC,
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    db_access(profile, done, "facebook");
}));

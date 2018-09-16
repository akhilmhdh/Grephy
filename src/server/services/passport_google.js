//authentication handled with passport for google
import passport from 'passport';
import db_access from './../utils/db_access';

import {
    Strategy as GoogleStrat
} from 'passport-google-oauth20';


passport.use(new GoogleStrat({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SEC,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    db_access(profile, done, "google");
}));
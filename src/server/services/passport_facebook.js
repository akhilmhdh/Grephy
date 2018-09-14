//authentication handled with passport for fb
import passport from 'passport';

import {
    Strategy as FBStrat
} from 'passport-facebook';

passport.use(new FBStrat({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SEC,
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(`profile:${JSON.stringify(profile,null,2)}`);
}));
//github v3 authentication 
import passport from 'passport';
import db_access from './../utils/db_access';
import {
    Strategy as GitHubStrat
} from 'passport-github2';

passport.use(new GitHubStrat({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SEC,
    callbackURL: '/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {
    db_access(profile, done, 'github');
}));
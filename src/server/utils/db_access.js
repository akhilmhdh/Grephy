import mongoose from 'mongoose';
const User = mongoose.model('users');

export default async (profile, done, oauthProvider) => {
    const existingUser = await User.findOne({
        uID: profile.id,
        provider: oauthProvider
    });
    if (existingUser) {
        return done(null, existingUser);
    }
    const user = await new User({
        uID: profile.id,
        provider: oauthProvider
    }).save();
    done(null, user);
}
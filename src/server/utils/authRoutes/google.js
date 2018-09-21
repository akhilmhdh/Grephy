import passport from 'passport';

export default (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
        res.redirect('/channel');
    });

}
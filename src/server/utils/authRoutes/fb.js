import passport from 'passport';

export default (app) => {
    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback', passport.authenticate('facebook',{failureRedirect:'/'}),(req,res)=>{
        res.redirect('/channel');
    });
    
}
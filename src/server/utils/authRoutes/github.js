import passport from 'passport';

export default (app) => {
    app.get('/auth/github', passport.authenticate('github'));
    
    app.get('/auth/github/callback', passport.authenticate('github',{failureRedirect:'/'}),(req,res)=>{
        res.redirect('/channel');
    });
};
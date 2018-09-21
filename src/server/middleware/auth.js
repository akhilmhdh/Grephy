export const authentication=(req,res,next)=>{
    if((!req.user) && (req.path!='/')){
        return res.redirect('/');
    }
    return next();
};
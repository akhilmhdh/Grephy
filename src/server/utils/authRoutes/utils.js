export default (app) => {
    app.get('/auth/user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
    
}
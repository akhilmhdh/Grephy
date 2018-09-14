import octonode from 'octonode';

export default (app, auth_url) => {
    app.get('/auth/github', (req, res) => {
        res.redirect(auth_url)
    });

    app.get('/auth/github/callback', (req, res) => {
        octonode.auth.login(req.query.code, (err, token) => {
            const ghme = octonode.client(token).me();
            ghme.info((err, data, header) => {
                console.log(data)
            });
        });
    });

}
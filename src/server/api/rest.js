import fs from 'fs';
import mongoose from 'mongoose';
import { authentication } from '../middleware/auth';
//const User = mongoose.model('users');
const Channel = mongoose.model('channels');
export default (app) => {
    app.post('/channels/:id/globalVar/new', async (req, res) => {
        const channel = await Channel.findOne({
            token: req.params.id
        });
        const {
            data
        } = req.body;
        channel.var.push({
            name: data
        });
        channel.save().then(() => {
            res.send('ok');
        });
    });
    app.delete('/channels/:id/globalVar/del', async (req, res) => {
        const {
            data
        } = req.body;
        const channel = await Channel.findOneAndUpdate({
            token: req.params.id
        }, {
            $pull: {
                var: {
                    name: data
                }
            }
        })
        res.send("ok");
    });

    app.get('/channels/:id/globalVar/update', async (req, res) => {
        const channel = await Channel.findOne({
            token: req.params.id
        });
        channel.var.forEach((el) => {
            if (req.query[el.name]) {
                el.value = [];
                el.value.push(req.query[el.name]);
            };
        });
        channel.save(() => {
            res.send('ok');
        });
    });
    app.post('/channels/:id/template/:name', async (req, res) => {
        const channel = await Channel.findOne({
            token: req.params.id
        });
        const dir = `templates/${channel._id}/${req.params.name}.html`;
        fs.writeFile(dir, req.body.template, (err) => {
            if (err) {
                res.send('nope')
            } else {
                res.send("ok")
            };
        });
    });

    app.get('/templates/:id/:name', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);

        if (!channel) {
            res.status(404).send('invalid channel');
        }
        res.sendFile(__dirname + `Akhi/MERN/Grephy/templates/${channel._id}/${req.params.name}.html`)
    });

    app.post('/channel/:id/videoScreen/add', async (req, res) => {
        const {
            name
        } = req.body;
        const channel = await Channel.findByToken(req.params.id);
        if (!channel) {
            res.status(404).send('invalid channel');
        }
        channel.videos.push({
            name
        });
        channel.save().then(() => {
            res.send('ok');
        });
    });

    app.delete('/channel/:id/videoScreen/del', async (req, res) => {
        const {
            name
        } = req.body;
        const channel = await Channel.findOneAndUpdate({
            token: req.params.id
        }, {
            $pull: {
                videos: {
                    name
                }
            }
        });
        res.send("ok");
    });
};
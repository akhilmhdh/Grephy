import fs from 'fs';
import mongoose from 'mongoose';
import { authentication } from '../middleware/auth';
//const User = mongoose.model('users');
const Channel = mongoose.model('channels');

export default (app) => {
    app.post('/channels/new', authentication,async (req, res) => {
        const {
            name,
            description
        } = req.body;

        const newChannel = await new Channel({
            name,
            description,
            _user: req.user._id
        });

        newChannel.save().then(() => {
            return newChannel.getChannelToken();
        }).then((token) => {
            res.status(200).send();
        });
    });

    app.get('/channels/list',authentication,async (req, res) => {
        const channelList = await Channel.find({
            _user: req.user._id
        },{_id:0,_user:0});
        res.send(channelList);
    });

    app.get('/channels/:id', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        res.send(channel);
    });
    
    app.delete('/channels/del/:id', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const delChannel = await Channel.findOneAndRemove({
            _id: channel._id
        });
        res.send('ok');
    });

};
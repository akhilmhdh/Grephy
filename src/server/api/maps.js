import fs from 'fs';
import mongoose from 'mongoose';
import {
    authentication
} from '../middleware/auth';
//const User = mongoose.model('users');
const Map = mongoose.model('maps');
const Channel = mongoose.model('channels');

export default (app) => {
    app.post('/channels/:id/maps/new', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const {
            name
        } = req.body;
        const newField = new Map({
            _channel: channel._id,
            name
        });
        newField.save().then(() => {
            res.send("ok");
        })
    });

    app.put('/channels/:id/maps/:name/add', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const {
            personName
        } = req.body;
        const map = await Map.findOne({
            _channel: channel._id,
            name: req.params.name
        });
        map.keys.push(personName);
        map.persons.push({
            name: personName
        });
        map.save().then(() => {
            res.send(map);
        });
    });

    app.put('/channels/:id/maps/:name/del', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const {
            personName
        } = req.body;
        const map = await Map.findOneAndUpdate({
            _channel: channel._id,
            name: req.params.name
        }, {
            $pull: {
                persons: {
                    name: personName
                },
                keys: personName
            }
        });
        res.send(map);
    });

    app.patch('/channels/:id/maps/:name', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);

        const map = await Map.findOne({
            _channel: channel._id,
            name: req.params.name,
        });
        map.keys.forEach(element => {
            const test = req.query[element];
            if (test) {
                const arr = new Array(...test.split(','))
                map.persons[map.keys.indexOf(element)].pos.push(arr);
                map.persons[map.keys.indexOf(element)].time.push(new Date().getTime());
            }
        });
        map.save().then(() => {
            res.send(map);
        });
    });

};
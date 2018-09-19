import mongoose from 'mongoose';

const User = mongoose.model('users');
const Channel = mongoose.model('channels');
const Field = mongoose.model('fields');

export default (app) => {
    app.post('/channels/new', async (req, res) => {
        const {
            name,
            description
        } = req.body;

        const newChannel = await new Channel({
            name,
            description,
            _user: "5b9d680719c69817cc328739"
        });

        newChannel.save().then(() => {
            return newChannel.getChannelToken();
        }).then((token) => {
            res.send(token);
        });
    });

    app.get('/channels/list', async (req, res) => {
        const channelList = await Channel.find({
            _user: '5b9d680719c69817cc328739'
        });
        const filteredList = channelList.map(({
            name,
            description,
            _id
        }) => {
            return ({
                name,
                description,
                _id
            });
        });
        res.send(filteredList);
    });

    app.get('/channels/:id', async (req, res) => {
        const channel = await Channel.findById(req.params.id);
        res.send(channel);
    });

    app.post('/channels/fields/new', async (req, res) => {
        const {
            name,
            yAxisName,
            xAxisName,
            channelID
        } = req.body;

        const newField = new Field({
            _channel: channelID,
            name,
            yAxis: {
                name: yAxisName,
            }
        });
        newField.xAxis.push({
            name: xAxisName
        });
        newField.save().then(() => {
            res.send("ok");
        })
    });

    app.get('/channels/fields/list', async (req, res) => {
        const fieldList = await Field.find({
            _channel: "5b9ff6768e3bab344c33ef70"
        });
        res.send(fieldList);
    });

    app.put('/channels/fields/:id/addX', async (req, res) => {
        const {
            xName
        } = req.body;
        const field = await Field.findOneAndUpdate({
            _channel: "5b9ff6768e3bab344c33ef70",
            _id: req.params.id
        }, {
            $push: {
                xAxis: [{
                    name: xName
                }]
            }
        });
        res.send('ok');
    });

    app.delete('/channels/fields/:id/delX', async (req, res) => {
        const {
            xName
        } = req.body;
        const field = await Field.findOneAndUpdate({
            _channel: "5b9ff6768e3bab344c33ef70",
            _id: req.params.id
        }, {
            $pull: {
                xAxis: {
                    name: xName
                }
            }
        });
        res.send('ok');
    });

    app.delete('/channels/fields/del/:id', async (req, res) => {
        const field = await Field.findOneAndRemove({
            _id: req.params.id
        });
        res.send("ok");
    });

    app.delete('/channels/del/:id', async (req, res) => {
        const field = await Channel.findOneAndRemove({
            _id: req.params.id
        });
        res.send('ok');
    });

};
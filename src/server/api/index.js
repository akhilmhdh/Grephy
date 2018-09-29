import mongoose from 'mongoose';
import { authentication } from '../middleware/auth';
import jwt from 'jsonwebtoken'
const User = mongoose.model('users');
const Channel = mongoose.model('channels');
const Field = mongoose.model('fields');

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
        });
        const filteredList = channelList.map(({
            name,
            description,
            token
        }) => {
            return ({
                name,
                description,
                token
            });
        });
        res.send(filteredList);
    });

    app.get('/channels/:id', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        res.send(channel);
    });
    

    app.post('/channels/:id/fields/new', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const {
            name,
            yAxis
        } = req.body;
        
        const newField = new Field({
            _channel: channel._id,
            name,
            yAxis
        });
        if(req.body.xAxis){
            newField.xAxis.name=req.body.xAxis;
        }
        newField.save().then(() => {
            res.send("ok");
        })
    });

    app.get('/channels/fields/list/:id', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const fieldList = await Field.find({
            _channel: channel._id
        });
        res.send(fieldList);
    });

    app.patch('/channels/:id/fields/:name',async (req,res)=>{
        const channel = await Channel.findByToken(req.params.id);
        const field=await Field.findOne({
            _channel:channel._id,
            name:req.params.name,
        });
        if(field.xAxis.name==="Time"){
            field.xAxis.value.push(new Date().getTime());
        }else{
            field.xAxis.value.push(req.query.xAxis || field.xAxis.value[field.xAxis.value.length-1] || null);
        }
        field.count+=1;
        field.dataFields.forEach(element => {
            const test=req.query[element.name];
            !test?element.value.push(element.value[element.value.length-1] || null):element.value.push(test);
        });
        field.save().then(()=>{
            res.send(field);
        });
    });

    app.put('/channels/:id/fields/:name/addX', async (req, res) => {
        const {
            dataName
        } = req.body;
        const channel = await Channel.findByToken(req.params.id);
        const field = await Field.findOne({
            _channel: channel._id,
            name:req.params.name
        });
        const arr=new Array(field.count).fill(null);
        field.dataFields.push({name:dataName,value:arr});
        field.save().then(()=>{
            res.send('ok');
        });
    });

    app.post('/channels/:id/fields/:name/delX', async (req, res) => {
        const {
            dataName
        } = req.body;
        const channel = await Channel.findByToken(req.params.id);
        const field = await Field.findOneAndUpdate({
            _channel: channel._id,
            name:req.params.name 
        }, {
            $pull: {
                dataFields: {
                    name: dataName
                }
            }
        });
        res.send('ok');
    });

    app.delete('/channels/:id/fields/:name/del', async (req, res) => {
        const {id,name}=req.params;
        const channel = await Channel.findByToken(id);
        const field = await Field.findOneAndRemove({
            _channel:channel._id,
            name
        });
        res.send("ok");
    });

    app.delete('/channels/del/:id', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const delChannel = await Channel.findOneAndRemove({
            _id: channel_id
        });
        res.send('ok');
    });

};
import mongoose from 'mongoose';
import { authentication } from '../middleware/auth';
import Mailer from './../services/Mailer';
import emailTemplate from './../services/emailTemplate';
const User = mongoose.model('users');
const Channel = mongoose.model('channels');
const Graph = mongoose.model('graphs');
const Map=mongoose.model('maps');

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
    

    app.post('/channels/:id/fields/new', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const {
            name,
            yAxis
        } = req.body;
        
        const newField = new Graph({
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
        const fieldList = await Graph.find({
            _channel: channel._id
        },{_id:0});
        const mapList=await Map.find({
            _channel:channel._id
        },{_id:0});
        const temp=new Object({graphs:fieldList,maps:mapList});
        res.send(temp);
    });

    app.patch('/channels/:id/fields/:name',async (req,res)=>{
        const channel = await Channel.findByToken(req.params.id);
        const field=await Graph.findOne({
            _channel:channel._id,
            name:req.params.name,
        });
        field.count+=1;
        const limitBreaker=new Array();
        const temp1=new Object();
        if(field.xAxis==="Time"){
            temp1["Time"]=new Date().getTime();
        }
        else{
            temp1[field.xAxis.name]=req.query.xAxis;
        }
        field.data.name.forEach(element => {
            const test=req.query[element];
            if((field.upperLimit && field.lowerLimit) && (test>field.upperLimit || test<field.lowerLimit)){
                limitBreaker.push({
                    name:element,
                    value:test
                })
            }
            !test?temp1[element]=(field.data.values[field.data.length-1][element] || null):temp1[element]=test;
        });
        if(limitBreaker.length!=0){
            const mailer=new Mailer(field,emailTemplate(limitBreaker,field.name,channel.name));
            mailer.send();
        }
        field.data.values.push(temp1);
        field.save().then(()=>{
            res.send(field);
        });
    });

    app.put('/channels/:id/fields/:name/addX', async (req, res) => {
        const {
            dataName
        } = req.body;
        const channel = await Channel.findByToken(req.params.id);
        const field = await Graph.findOne({
            _channel: channel._id,
            name:req.params.name
        });
        if(field.data.name.indexOf(dataName)==-1){
            field.data.name.push(dataName);
            field.save().then(()=>{
            res.send('ok');
        });
        }
        else{
            res.send('Duplicate Field').status(400);
        }
    });

    app.delete('/channels/:id/fields/:name/delX', async (req, res) => {
        const {
            dataName
        } = req.body;
        const channel = await Channel.findByToken(req.params.id);
        const field = await Graph.findOne({
            _channel: channel._id,
            name:req.params.name 
        });
        field.data.name.splice(field.data.name.indexOf(dataName),1);
        let temp=field.data.values;
        field.data.values=[]
        temp.forEach(el=>delete el[dataName]);
        field.data.values=temp;
        field.save().then(()=>{
            res.send(field);
        });
    });

    app.post('/channels/:id/fields/:name/email',async(req,res)=>{
        const {upper,lower,email}=req.body;
        const channel=await Channel.findByToken(req.params.id);
        const field=await Graph.findOneAndUpdate({
            _channel:channel._id,
            name:req.params.name
        },{
            $set:{
                upperLimit:upper,
                lowerLimit:lower,
                email
            }
        });
        res.send(field);
    })

    app.delete('/channels/:id/fields/:name/del', async (req, res) => {
        const {id,name}=req.params;
        const channel = await Channel.findByToken(id);
        const field = await Graph.findOneAndRemove({
            _channel:channel._id,
            name
        });
        res.send("ok");
    });

    app.delete('/channels/del/:id', async (req, res) => {
        const channel = await Channel.findByToken(req.params.id);
        const delChannel = await Channel.findOneAndRemove({
            _id: channel._id
        });
        res.send('ok');
    });

    app.post('/channels/:id/maps/new',async(req,res)=>{
        const channel=await Channel.findByToken(req.params.id);
        const {name} =req.body;
        const newField=new Map({
            _channel:channel._id,
            name
        });
        newField.save().then(()=>{
            res.send("ok");
        })
    });

    app.put('/channels/:id/maps/:name/add',async(req,res)=>{
        const channel=await Channel.findByToken(req.params.id);
        const{personName}=req.body;
        const map=await Map.findOne({
            _channel:channel._id,
            name:req.params.name
        });
        map.keys.push(personName);
        map.persons.push({name:personName});
        map.save().then(()=>{
            res.send(map);
        });
    });

    app.put('/channels/:id/maps/:name/del',async(req,res)=>{
        const channel=await Channel.findByToken(req.params.id);
        const{personName}=req.body;
        const map=await Map.findOneAndUpdate({
            _channel:channel._id,
            name:req.params.name
        },{$pull:{persons:{name:personName},keys:personName}});
        res.send(map);
    });
    
    app.patch('/channels/:id/maps/:name',async (req,res)=>{
        const channel = await Channel.findByToken(req.params.id);
        
        const map=await Map.findOne({
            _channel:channel._id,
            name:req.params.name,
        });
        map.keys.forEach(element=>{
            const test=req.query[element];
            if(test){
                const arr=new Array(...test.split(','))
                map.persons[map.keys.indexOf(element)].pos.push(arr);
                map.persons[map.keys.indexOf(element)].time.push(new Date().getTime());
            }
        });
        map.save().then(()=>{
            res.send(map);
        });
    })
    
};
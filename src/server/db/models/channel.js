import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const channelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    description:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    token: {
        type: String
    },
    var:[{
        name:String,
        value:Array
    }],
    templates:[{name:{type:String,trim:true,unique:true}}],
    videos:[{name:{type:String,trim:true,unique:true}}]
});

channelSchema.methods.getChannelToken = function () {
    const channel = this;
    const token = jwt.sign({
        id: channel._id.toHexString()
    }, process.env.JWT_SECRET).toString();
    channel.token = token;
    return channel.save().then(() => {
        return token;
    });
};

channelSchema.statics.findByToken=function(token){
    let channel=this;
    let decode;
    try{
        decode=jwt.verify(token,process.env.JWT_SECRET);
    }catch(e){
        return Promise.reject();
    }
    return channel.findOne({
        '_id':decode.id
    });
};
mongoose.model('channels', channelSchema);
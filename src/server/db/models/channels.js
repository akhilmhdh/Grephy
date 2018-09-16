import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const channelSchema = new mongoose.Schema({
    name: {
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
    dual: {
        type: Boolean,
        required: true
    },
    xAxis: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    yAxis: {
        type: String,
        trim: true,
        minlength: 1,
        default: "Time"
    },
    xData: [Number],
    yData: [String]
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

mongoose.model('channels', channelSchema);
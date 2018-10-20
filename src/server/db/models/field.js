import mongoose from 'mongoose';

const graphSchema = mongoose.Schema({
    _channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Channel',
        select:false
    },
    email:{
        type:String,
        trim:true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    count:{
        type:Number,
        default:0,
        select:false
    },
    yAxis:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    xAxis:{
        type: String,
        trim: true,
        minlength: 1,
        default:"Time"
    },
    upperLimit:{
        type:Number,
        default:null
    },
    lowerLimit:{
        type:Number,
        default:null
    },
    data:{name:[String],values:Array}
});

mongoose.model('graphs',graphSchema);
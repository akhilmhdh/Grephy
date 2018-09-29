import mongoose from 'mongoose';

const dataFieldSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique:true
    },
    value:[{
        type:Number,
        trim:true,
    }]
});

const fieldSchema = mongoose.Schema({
    _channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Channel'
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    count:{
        type:Number,
        default:0
    },
    yAxis:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    xAxis:{
        name:{
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            default:"Time"
        },
        value:[{
            type:String,
            trim:true,
        }]
    },
    dataFields:[dataFieldSchema],
    upperLimit:{
        type:Number,
        default:null
    },
    lowerLimit:{
        type:Number,
        default:null
    }
});

mongoose.model('fields',fieldSchema);
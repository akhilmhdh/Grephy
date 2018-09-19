import mongoose from 'mongoose';

const xAxisSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    value:[{
        type:String,
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
    yAxis:{
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
    xAxis:[xAxisSchema]
});

mongoose.model('fields',fieldSchema);
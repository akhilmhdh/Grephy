import mongoose, { Schema } from 'mongoose';

const mapSchema=mongoose.Schema({
    _channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Channel',
        select:false
    },
    email:{
        type:String,
        trim:true,
        default:null
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    keys:[String],
    persons:[{name:String,pos:[[Number,Number]],time:[Number]}]
})

mongoose.model('maps',mapSchema);

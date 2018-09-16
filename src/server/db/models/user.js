import mongoose from 'mongoose';
const UsersSchema=new mongoose.Schema({
    uID:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
    },
    provider:{
        type:String,
        required:true,
        trim:true
    }
});

mongoose.model('users',UsersSchema);

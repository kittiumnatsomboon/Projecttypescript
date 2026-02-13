import { Schema, model, connect } from 'mongoose';

const userschema = new Schema({
    userid:{
        type:String,
        required:true
    },
    fisrtname:{
        type:String,
        required:true
    },
    latname:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        required:true,
        default:0
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Created_at:{
        type:Date,
        required:true
    }
})
const User = model('user', userschema);

export default User;
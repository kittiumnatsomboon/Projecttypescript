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
    // usertype : 0 user , 1 admin
    usertype:{
        type:String,
        required:true,
        default:0
    },
    // status user default : active
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    nameimage:{
        type:String,
        required:true,
        default:"s3://storageofworkout/Defaultimage/"
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
import { Schema, model, connect } from 'mongoose';
export interface Setcolump{
    fisrtname:String;
    latname:String;
    usertype:String;
    isActive:Boolean;
    nameimage:String;
    email:String;
    password:String;
    Created_at:Date;
}
const userschema = new Schema({
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
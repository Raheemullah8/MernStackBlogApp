import mongoose  from "mongoose";
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    profile:{
        type:String,
    }, 
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }

},{timestamps:true});
const User = mongoose.model("user",userSchema);

export default User;
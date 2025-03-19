import mongoose  from "mongoose";

const post= new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    thumbnail:{
        type: String,
    }
},{timestamps:true})
const postSchema = mongoose.model("post",post);
export default postSchema;
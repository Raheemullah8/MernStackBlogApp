import mongoose from "mongoose";

const commitSchema = new mongoose.Schema({
    PostId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    },
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    comments:{
        type:String,
        required:true
    }
});
const CommitModel = mongoose.model("commit",commitSchema);

export default CommitModel;

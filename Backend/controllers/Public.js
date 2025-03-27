import postSchema from "../modles/post.js";

const getSinglePost = async (req,res)=>{
try {
    const postId = req.params.id;

    const post = await postSchema.findById(postId)
    .populate({
        path:"comments",
        populate:{
            path:"UserId"
        }   
    });

    if(!post){
        return res.status(404).json({message:"Post not found"})
    }

    return res.status(200).json({
            err: "false",
            msg: "Post retrieved successfully",
            post // Post ki details
        });

} catch (error) {
    console.log(error)
    res.status(500).json({err:"true",msg:"server error"})
    
}
}

export {getSinglePost}
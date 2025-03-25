import User from "../modles/user.js"
import postSchema from "../modles/post.js";
import fs from "fs";
import path from "path";

const AllData = async(req,res)=>{
try {
    const UserData = await User.find();
    const PostData = await postSchema.find();
    if(!UserData || !PostData){
       return res.status(404).json({message:"No Data Found"})
    }
    return res.status(200).json({err:false,msg:"user and post data",UserData,PostData})
    
} catch (error) {
    console.log(error.message)
    res.status(500).json({err:true,msg:"internal server error"})
}
}
const AllUser = async (req,res)=>{
try {
    const UserData = await User.find();
    if(!UserData){
        return res.status(404).json({message:"No Data Found"})
    }
    return res.status(200).json({err:false,msg:"user data",UserData})
} catch (error) {
    console.log(error.message)
    res.status(500).json({err:true,msg:"internal server error"})
}
}
const DeleteUser = async (req,res)=>{
    try {
        const params = req.params.id;
        const userdeleteId = await User.findById(params);
        
        if(!userdeleteId){
            return res.status(404).json({err:true,msg:"User not found"})
        }
        if(userdeleteId.role === "admin"){
            return res.status(401).json({err:true,msg:"You can't delete admin"})
        }

        const deleteUser = await User.findByIdAndDelete(params);
        const imagePath = path.join('public/images', userdeleteId.profile);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error(`Error while deleting the file: ${err.message}`);
                return res.status(500).json({ err: true, msg: "Image not deleted, but user deleted successfully" });
            }
            console.log(`Image deleted: ${imagePath}`);
        });

        return res.status(200).json({err:false,msg:"User deleted successfully"})

    } catch (error) {
        console.log(error.message)  
        res.status(500).json({err:true,msg:"internal server error"})
    }

}

export {AllData,AllUser,DeleteUser}
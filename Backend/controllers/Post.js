import postSchema from "../modles/post.js";

const CreatePost = async (req,res)=>{
  try {
    const {title,description,} = req.body;
    const imagePath = req.file.filename;
    const createPost = await postSchema.create({
      title,
      description,
      thumbnail:imagePath  
    });
    return res.status(201).json({ err: false, message: "Post created successfully",createPost});

  } catch (error) {
    console.log(error.message);

  }
}

export {CreatePost}
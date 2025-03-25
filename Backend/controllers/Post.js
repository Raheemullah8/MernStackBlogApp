import postSchema from "../modles/post.js";
import fs from "fs";
import path from "path";

const CreatePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file.filename;
    const createPost = await postSchema.create({
      title,
      description,
      thumbnail: imagePath
    });
    return res.status(201).json({ err: false, message: "Post created successfully", createPost });

  } catch (error) {
    console.log(error.message);

  }
}

const GetPost = async (req, res) => {
  try {
    const getPost = await postSchema.find()
    if (!getPost) {
      return res.status(404).json({ err: true, msg: "Post not founds" });
    }
    res.status(200).json({ err: false, msg: "Post found", getPost });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ err: true, msg: "internal server error" })
  }
}

const DeletePost = async (req, res) => {
  try {
    const params = req.params.id;
    const deletepost = await postSchema.findByIdAndDelete(params);
    if (!deletepost) {
      return res.status(404).json({ err: true, msg: "Post not found" });
    }
    const imagePath = path.join('public/images', deletepost.thumbnail);

    // Check if the file exists before trying to delete it
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error(`Error while deleting the file: ${err.message}`);
        return res.status(500).json({ err: true, msg: "Image not deleted, but post deleted successfully" });
      }
      console.log(`Image deleted: ${imagePath}`);
    });

    res.status(200).json({ err: false, msg: "Post deleted successfully" });

  } catch (error) {
    console.log(error.message)
    res.status(501).json({ err: true, msg: "internal server error" });
  }

}
const UpdatePost = async (req, res) => {
  try {
    const params = req.params.id;
    const { title, description } = req.body;
    const imagePath = req.file.filename;
    const updatepost = await postSchema.findByIdAndUpdate(params, {
      title,
      description,
      thumbnail: imagePath
    }, { new: true });
    if (!updatepost) {
      return res.status(404).json({ err: true, msg: "Post not found" });
    }
    res.status(200).json({ err: false, msg: "Post updated successfully", updatepost });
    
    
  } catch (error) {
    console.log(error.message)
    res.status(501).json({ err: true, msg: "internal server error" });
  }

}

export { CreatePost, GetPost, DeletePost,UpdatePost }
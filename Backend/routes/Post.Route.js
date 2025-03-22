import express from "express";
import {CreatePost, DeletePost, GetPost,UpdatePost} from "../controllers/Post.js";
import {isAdmin} from "../middleware/isAdmin.js";
import upload from "../middleware/upload.js";
const router = express.Router();

router.post("/createpost",isAdmin,upload.single("thumbnail"),CreatePost)
router.get("/getpost",GetPost)
router.delete('/deletepost/:id',isAdmin,DeletePost)
router.patch('/updatepost/:id',isAdmin,upload.single("thumbnail"),UpdatePost)


export default router
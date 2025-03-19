import express from "express";
import {CreatePost} from "../controllers/Post.js";
import {isAdmin} from "../middleware/isAdmin.js";
import upload from "../middleware/upload.js";
const router = express.Router();

router.post("/createpost",isAdmin,upload.single("thumbnail"),CreatePost)


export default router
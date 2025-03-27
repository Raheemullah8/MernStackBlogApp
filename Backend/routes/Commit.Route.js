import express from "express"
import { comments } from "../controllers/Commit.js";
import { isLogin } from "../middleware/isAdmin.js";
const router = express.Router();

router.post("/addcommit",isLogin,comments)

export default router;
import express from "express"
import { commits } from "../controllers/Commit.js";
const router = express.Router();

router.get("/",commits)

export default router;
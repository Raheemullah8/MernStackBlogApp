import express from  "express";
import { AllData,AllUser, DeleteUser } from "../controllers/Dashbord.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

router.get('/',isAdmin,AllData)
router.get('/user',isAdmin,AllUser)
router.delete('/deleteuser/:id',isAdmin,DeleteUser)

export default router
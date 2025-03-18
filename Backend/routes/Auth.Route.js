import express from 'express';
import upload from '../middleware/upload.js'
import { Login, Register, Logout } from '../controllers/Auth.js'
const Router = express.Router();

Router.post("/register",upload.single("profile"),Register);
Router.post("/login",Login);
Router.post("/logout",Logout);
export default Router;

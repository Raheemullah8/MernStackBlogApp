import express from 'express';
import { Register } from '../controllers/Auth.js'
const Router = express.Router();

Router.post("/register",Register);
export default Router;

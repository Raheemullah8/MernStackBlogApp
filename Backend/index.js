import express from 'express';  
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDb from './utils/db.js';
import AuthRoute from './routes/Auth.Route.js';
import PostRoute from './routes/Post.Route.js';
import DashbordRoute from './routes/Dashbord.route.js';
import CommitRoute from './routes/Commit.Route.js';
import PublicRoute from './routes/Public.route.js';
connectDb();


const app = express();  
const PORT = process.env.PORT || 5000;  // This will now read from your .env file  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
}))

app.get("/", (req, res) => {     
    res.send("hello"); 
});
app.use("/user", AuthRoute);
app.use("/post",PostRoute);
app.use('/dashbord',DashbordRoute)
app.use('/commit',CommitRoute)
app.use('/public',PublicRoute)

app.listen(PORT, () => {     
    console.log(`Server is running on http://localhost:${PORT}`);    
});
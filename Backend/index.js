import express from 'express';  
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './utils/db.js';
connectDb();
import AuthRoute from './routes/Auth.Route.js';

const app = express();  
const PORT = process.env.PORT||5000;  

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {     
    res.send("hello"); 
});
app.use("/user",AuthRoute);

app.listen(PORT, () => {     
    console.log(`Server is running on http://localhost:${PORT}`);    
});

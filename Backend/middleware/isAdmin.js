import jwt from 'jsonwebtoken';
import User from '../modles/user.js';



const isAdmin = async (req, res, next) => {
   try {
      const token = req.cookies.token
      if (!token) return res.status(401).json({ msg: "Unauthorized user is not found" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userID);

      if (!user) return res.status(401).json({ msg: "Unauthorized user not found" });
      if (user.role !== "admin") return res.status(401).json({ msg: "Unauthorized user is not allowed" });
      next();

   } catch (error) {
      console.log(error.message);
   }

}
const isLogin = async (req,res,next)=>{
   try {
      const token = req.cookies.token
      if(!token) return res.status(401).json({msg:"Unauthorized user is not found"})
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      const user = await User.findById(decoded.userID);
      if(!user) return res.status(401).json({msg:"Unauthorized user not found"})
      req.user = user;
      next();

      
   } catch (error) {
      
   }
}

export { isAdmin,isLogin };
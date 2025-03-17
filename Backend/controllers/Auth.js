import User from "../modles/user.js"
const Register = async (req,res)=>{
try {
    const {fullname,email,password,role} = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({err:true,message:"User already exists"});
    };
    const newUser = await User.create({
        fullname,
        email,
        password,
        role,
    })
    return res.status(201).json({err:false,message:"User created successfully",newUser});
} catch (error) {
    console.log(error.message);
    return res.status(500).json({err:true,message:"Internal server error"});
}
}
const Login = async (req,res)=>{

}


export {Register,Login}
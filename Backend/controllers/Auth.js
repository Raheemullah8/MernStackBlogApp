import User from "../modles/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const Register = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;
        const imagepath = req.file.filename;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ err: true, message: "User already exists" });
        };

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            fullname,
            email,
            password: hashPassword,
            profile: imagepath,
            role
        });
        const token = jwt.sign({ userID: newUser._id }, process.env.JWT_SECRET, { expiresIn: "30h" });
        res.cookie("token", token);
        return res.status(201).json({ err: false, message: "User created successfully", newUser, token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ err: true, message: "Internal server error" });
    }
}
const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).json({ err: true, message: "User not found" });
        }
        const compairePassword = await bcrypt.compare(password, findUser.password);
        if (!compairePassword) {
            return res.status(400).json({ err: true, message: "Invalid password" });
        }
        const token = jwt.sign({ userID: findUser._id }, process.env.JWT_SECRET, { expiresIn: "30h" });
        res.cookie("token", token);
        return res.status(200).json({ err: false, message: "User logged in successfully", findUser, token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ err: true, message: "Internal server error" });

    }
}
const Logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ err: false, message: "User logged out successfully" });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ err: true, message: "Internal server error" });

    }
}


export { Register, Login, Logout }
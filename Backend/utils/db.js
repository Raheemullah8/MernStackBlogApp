import mongoose  from "mongoose";

const connectDb = ()=>{
try {
    const conn = process.env.MONGODBURI
    mongoose.connect(conn)
    .then(()=>{
        console.log("Db Connect SucessFull")
    })
} catch (error) {
    console.log("Db Connection Failed",error.message)
}
}

export default connectDb;
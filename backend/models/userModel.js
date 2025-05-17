import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Database is connected")).catch(e=>console.log(e))

const userSchema = new mongoose.Schema({
    username:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true
    },
},{timestamps:true})

const user = mongoose.model("user",userSchema)

export default user
import user from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
dotenv.config()
export const Register = async (req,res) => {
    try {
        const {username,email,password} = req.body;
        if(!username || !email ||!password){
           return res.status(401).json({msg:"User not craeted" , success:false})
        }
        const hashPassword = await bcrypt.hash(password,12)
        const newUser = await user.create({
            username,
            email,
            password:hashPassword
        })
        return res.status(201).json({msg:"User craeted",success:true})
    } catch (error) {
        console.log(error)
    }   
}
export const Login = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
           return res.status(401).json({msg:"All feild required" , success:false})
        }
        const findUser = await user.findOne({email})
        const compass = await bcrypt.compare(password,findUser.password)
        if(!findUser){
            return res.status(401).json({msg:"User not found" , success:false})
        }
        if(!compass){
            return res.status(401).json({msg:"Wrong password" , success:false})
        }
        const token = jwt.sign(email,process.env.SECRET_KEY)
        return await res.status(201).cookie("token",token).json({msg:"Logged in",success:true,emailID:findUser.email})
    } catch (error) {
        console.log(error)
    }   
}
export const allUser = async (req,res) => {
    try {
        let allusers = await user.find()
        res.status(200).json(allusers)
    } catch (error) {
        console.log('error while creating user', error)
        res.status(500).json({ error: error.message })
    }
}
export const isAutheticated = async (req,res) => {
    try {
       const recieveToken = req.body.cookies; 
       if(!recieveToken){
        return res.status(401).json({msg:"sorry you are signup please" , success:false})
       }
       return res.status(201).json({msg:"You are auntheticated",success:true})
    } catch (error) {
        console.log(error)
    }   
}
export const Logout = async (req,res) => {
    return res.status(200).cookie("token" , null).json({msg:"User loggedout",success:true})
} 


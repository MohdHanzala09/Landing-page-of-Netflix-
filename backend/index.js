import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from './routes/userRoute.js'
const app = express()
app.use(cors({origin:"http://localhost:5173",credentials:true}))
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(router)
app.use(express.urlencoded({extended:false}))

app.listen(process.env.PORT,()=>console.log(`server running at port ${process.env.PORT}`))
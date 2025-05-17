import express from 'express'
import {Register,isAutheticated,Login,allUser,Logout} from '../controllers/controlUser.js'
const router = express.Router()

router.route('/signup').post(Register)

router.post("/login",Login)

router.get("/allUser",allUser)
router.get("/logout",Logout)

router.get("/",(req,res) => {
    res.send("working good")
})

export default router
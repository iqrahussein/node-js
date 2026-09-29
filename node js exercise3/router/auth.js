import express from "express";
const router = express.Router();
import {Login, register} from "../controller/auth.js"
import { protect } from "../middlewares/auth.js";

router.post('/register',register)
router.post("/login",Login)

router.get('/profile',protect,(req,res)=>{
    console.log(req.user)
    res.json(req.user)
})
export default router;

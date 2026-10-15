import express from "express"
import { createTrans, deleteTrans, getTrans, updateTrans } from "../controller/transController.js"
import { login, register } from "../controller/auth.js"
import { protect } from "../middlewares/auth.js"
const router=express.Router()

router.post("/create",protect,createTrans)
router.get("/get",getTrans)
router.put("/update/:id",updateTrans)
router.delete('/delete/:id',deleteTrans)

router.get("/test",protect,(req, res) => {
  res.json({
    message: "protected route"
  });
});


router.post("/register",register)
router.post("/login",login)



export default router
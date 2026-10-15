console.log("hello world iqra huseein")
import express from 'express'
import mongoose from 'mongoose';
import { notFound } from './middlewares/notFound.js';
import transRouter from './routes/trans.js'

import dotenv from 'dotenv'
import { logger } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { protect } from './middlewares/auth.js';
// import { protect } from './middlewares/auth.js';
dotenv.config();
const port =process.env.PORT

const app =express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(logger)

console.log("heloo2")
app.use("/trans",transRouter)
// app.get("/test",protect,(req, res) => {
//   res.json({
//     message: "protected route"
//   });
// });


app.use(notFound)
app.use(errorHandler)



app.listen(4000,()=>{
    console.log(`Ser running on http://localhost:4000`)
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(()=>console.log("✅ MongoDB connected locally"))
  .catch((err)=>console.log("❌ Connection error:", err))
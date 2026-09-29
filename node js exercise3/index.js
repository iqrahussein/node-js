import dotenv from "dotenv";
dotenv.config();
// const express = require("express");
import express from "express";
import mongoose from "mongoose";

// const mongoose = require("mongoose");
import bookRouter from "./router/book.js";
import authRouter from "./router/auth.js"
import adminRouter from "./router/admin.js"

import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use("/book", bookRouter);
app.use("/auth",authRouter)
app.use("/admin",adminRouter)

app.use(logger);

app.get("/books", (req, res) => {
  res.send("hello iqra");
});

app.use(notFound);

// app.use(errorHandler);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected locally"))
  .catch((err) => console.log("❌ Connection error:", err));

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

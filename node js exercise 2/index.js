require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./router/book");

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use("/book", bookRouter);

app.get("/books", (req, res) => {
  res.send("hello iqra");
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected locally"))
  .catch((err) => console.log("❌ Connection error:", err));

app.listen(5000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

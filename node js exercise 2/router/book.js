const express = require("express");
const {
  createbook,
  getbook,
  updateUser,
  deletedbook,
} = require("../controller/book");
const router = express.Router();

router.post("/create", createbook);
router.get("/", getbook);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deletedbook);

module.exports = router;

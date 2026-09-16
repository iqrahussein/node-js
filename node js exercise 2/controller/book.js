const books = require("../model/user");

exports.createbook = async (req, res) => {
  try {
    console.log("body data", req.body);
    const book = new books(req.body);
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.getbook = async (req, res) => {
  const book = await books.find();
  res.json(book);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedbook = await books.findByIdAndUpdate(
      id,
      req.body,
      { new: true }, // returns updated document
    );
    if (!updatedbook) {
      return res.status(404).send("User not found");
    }
    res.json(updatedbook);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.deletedbook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedbook = await books.findByIdAndDelete(id);
    if (!deletedbook) {
      return res.status(404).send("User not found");
    }
    res.send(`User with id ${id} deleted`);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

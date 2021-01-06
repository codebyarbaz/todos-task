const mongoose = require("../dbConfig");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("task", taskSchema);

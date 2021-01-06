const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Db connected!");
    }
  }
);

module.exports = mongoose;
